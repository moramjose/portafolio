import { useState, useRef, useEffect } from 'react'
import { useLang } from '../i18n/LanguageContext'

export default function Chatbot() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: t.chatbot.welcome }])
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open && !streaming) inputRef.current?.focus()
  }, [open, streaming])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || streaming) return

    const userMsg = { role: 'user', content: text }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setStreaming(true)
    window.umami?.track?.('chatbot-message-sent')

    // Add empty assistant message for streaming
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updated.filter((m) => m.content).map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        if (res.status === 429 || err.error === 'rate_limit') {
          throw new Error('rate_limit')
        }
        throw new Error(err.error || 'Error')
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6)
          if (data === '[DONE]') break
          try {
            const { text: chunk, error } = JSON.parse(data)
            if (error) throw new Error(error)
            if (chunk) {
              setMessages((prev) => {
                const copy = [...prev]
                copy[copy.length - 1] = {
                  ...copy[copy.length - 1],
                  content: copy[copy.length - 1].content + chunk,
                }
                return copy
              })
            }
          } catch { /* skip malformed chunks */ }
        }
      }
    } catch (e) {
      const isRateLimit = e?.message === 'rate_limit'
      setMessages((prev) => {
        const copy = [...prev]
        copy[copy.length - 1] = {
          role: 'assistant',
          content: isRateLimit ? t.chatbot.rateLimit : t.chatbot.error,
        }
        return copy
      })
    } finally {
      setStreaming(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat window */}
      <div
        className={`fixed bottom-20 sm:bottom-24 right-3 sm:right-5 left-3 sm:left-auto z-50 sm:w-96 transition-all duration-300 ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-bg-card border border-border rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden" style={{ height: 'min(520px, calc(100vh - 7rem))' }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-card">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 00-.659 1.59v.271c0 .621-.504 1.125-1.125 1.125h-5.492a1.125 1.125 0 01-1.125-1.125v-.271a2.25 2.25 0 00-.659-1.59L5 14.5m14 0V17a2.25 2.25 0 01-2.25 2.25H7.25A2.25 2.25 0 015 17v-2.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary">{t.chatbot.title}</h3>
                <p className="text-[10px] text-text-muted">{t.chatbot.powered}</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-text-muted hover:text-text-primary transition-colors p-1"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-br-md'
                      : 'bg-bg-card-hover text-text-primary border border-border rounded-bl-md'
                  }`}
                >
                  {msg.content}
                  {msg.role === 'assistant' && i === messages.length - 1 && streaming && (
                    <span className="inline-block w-1.5 h-4 bg-primary/70 ml-0.5 animate-pulse rounded-sm align-text-bottom" />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-border">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.chatbot.placeholder}
                disabled={streaming}
                className="flex-1 bg-bg-dark border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || streaming}
                className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                aria-label="Send message"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating bubble */}
      <button
        onClick={() => {
          setOpen((v) => {
            if (!v) window.umami?.track?.('chatbot-opened')
            return !v
          })
        }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-5 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 transition-all duration-300 flex items-center justify-center hover:scale-105"
        aria-label="Toggle chat"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </>
  )
}
