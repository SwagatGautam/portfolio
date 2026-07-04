'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ArrowUp, MessageCircle } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; content: string };

const SUGGESTIONS = [
  'Who is Swagat?',
  'What tech does he use?',
  'Tell me about his experience',
  'How can I hire him?',
];

const GREETING =
  "Hi! I'm **Aria**, Swagat's AI assistant. Ask me anything about his work, skills, or experience — or how to get in touch.";

/** Tiny, safe markdown → React (bold, bullets, links). No dangerouslySetInnerHTML. */
function renderRich(text: string, keyBase: string) {
  const lines = text.split('\n');
  return lines.map((line, li) => {
    const trimmed = line.trim();
    const bullet = /^[-*]\s+/.test(trimmed);
    const content = bullet ? trimmed.replace(/^[-*]\s+/, '') : line;
    const parts = content.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.\w+)/g);
    const nodes = parts.map((part, pi) => {
      const k = `${keyBase}-${li}-${pi}`;
      if (/^\*\*[^*]+\*\*$/.test(part))
        return <strong key={k} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
      if (/^https?:\/\//.test(part))
        return <a key={k} href={part} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 break-all">{part}</a>;
      if (/^[\w.+-]+@[\w.-]+\.\w+$/.test(part))
        return <a key={k} href={`mailto:${part}`} className="text-accent underline underline-offset-2 break-all">{part}</a>;
      return <span key={k}>{part}</span>;
    });
    if (bullet)
      return (
        <div key={`${keyBase}-${li}`} className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
          <span>{nodes}</span>
        </div>
      );
    return (
      <p key={`${keyBase}-${li}`} className={li > 0 ? 'mt-1.5' : ''}>
        {nodes}
      </p>
    );
  });
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, busy, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  async function send(text: string) {
    const clean = text.trim();
    if (!clean || busy) return;
    setInput('');
    const next: Msg[] = [...messages, { role: 'user', content: clean }];
    setMessages(next);
    setBusy(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) throw new Error('bad response');

      // Add an empty assistant message we'll stream into.
      setMessages((m) => [...m, { role: 'assistant', content: '' }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let acc = '';

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';
        for (const line of lines) {
          const t = line.trim();
          if (!t.startsWith('data:')) continue;
          const data = t.slice(5).trim();
          if (data === '[DONE]' || data === '') continue;
          try {
            const json = JSON.parse(data);
            if (typeof json.response === 'string' && json.response) {
              acc += json.response;
              setMessages((m) => {
                const copy = [...m];
                copy[copy.length - 1] = { role: 'assistant', content: acc };
                return copy;
              });
            }
          } catch {
            /* ignore keep-alive / non-json lines */
          }
        }
      }

      if (!acc.trim()) {
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: 'assistant',
            content:
              "Sorry — I couldn't generate a reply. You can reach Swagat directly at swagatgautamm32@gmail.com.",
          };
          return copy;
        });
      }
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting right now. Please try again, or email Swagat at swagatgautamm32@gmail.com.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  const streaming = busy && messages[messages.length - 1]?.role === 'assistant';

  return (
    <>
      {/* Floating action button */}
      <div className="fixed bottom-5 right-5 z-[80] md:bottom-7 md:right-7">
        <motion.button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close assistant' : 'Open AI assistant'}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full text-accent-foreground shadow-lg"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 1.6 }}
        >
          {/* rotating gradient ring */}
          <span
            className="absolute -inset-[3px] animate-spin-slow rounded-full opacity-90"
            style={{
              background:
                'conic-gradient(from 0deg, var(--accent), var(--accent-3), var(--accent-2), var(--accent))',
            }}
          />
          {/* pulse halo */}
          <span className="absolute inset-0 animate-ping rounded-full bg-accent/40 [animation-duration:3s]" />
          {/* solid core */}
          <span className="absolute inset-[3px] rounded-full bg-[oklch(0.16_0.02_285)]" />
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="relative"
              >
                <X className="h-6 w-6 text-foreground" />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="relative"
              >
                <MessageCircle className="h-6 w-6 fill-foreground/10 text-foreground" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* little "Ask AI" nudge */}
        <AnimatePresence>
          {!open && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 2.2 }}
              className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-border/60 bg-card/80 px-3 py-1.5 text-xs font-medium backdrop-blur md:block"
            >
              Ask my AI ✦
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            style={{ transformOrigin: 'bottom right' }}
            className="fixed bottom-24 right-4 z-[80] flex h-[560px] max-h-[75vh] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-3xl md:bottom-28 md:right-7"
          >
            {/* animated gradient glow border */}
            <div
              className="absolute -inset-px -z-10 rounded-3xl opacity-70 blur-[2px]"
              style={{
                background:
                  'linear-gradient(140deg, var(--accent), transparent 40%, transparent 60%, var(--accent-3))',
              }}
            />
            <div className="glass flex h-full flex-col rounded-3xl">
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3.5">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-3">
                  <Sparkles className="h-5 w-5 text-accent-foreground" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-emerald-400" />
                </div>
                <div className="flex-1">
                  <p className="font-display text-sm font-semibold leading-tight">Aria</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Swagat&apos;s AI assistant
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
                {/* greeting bubble (always shown) */}
                <Bubble role="assistant" keyBase="greet">
                  {renderRich(GREETING, 'greet')}
                </Bubble>

                {messages.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="flex flex-wrap gap-2 pt-1"
                  >
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="rounded-full border border-border/70 bg-background/40 px-3 py-1.5 text-xs text-foreground/80 transition-all hover:border-accent/60 hover:text-accent"
                      >
                        {s}
                      </button>
                    ))}
                  </motion.div>
                )}

                {messages.map((m, i) => (
                  <Bubble key={i} role={m.role} keyBase={`m${i}`}>
                    {m.content
                      ? renderRich(m.content, `m${i}`)
                      : streaming && i === messages.length - 1
                        ? <TypingDots />
                        : null}
                  </Bubble>
                ))}
              </div>

              {/* Input */}
              <div className="border-t border-border/50 p-3">
                <div className="flex items-end gap-2 rounded-2xl border border-border/70 bg-background/50 px-3 py-2 transition-colors focus-within:border-accent/60">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        send(input);
                      }
                    }}
                    rows={1}
                    placeholder="Ask about Swagat…"
                    className="max-h-24 flex-1 resize-none bg-transparent py-1 text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <button
                    onClick={() => send(input)}
                    disabled={busy || !input.trim()}
                    aria-label="Send"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-3 text-accent-foreground transition-opacity disabled:opacity-30"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-1.5 text-center text-[10px] text-muted-foreground">
                  AI can make mistakes — verify important details.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Bubble({
  role,
  children,
  keyBase,
}: {
  role: 'user' | 'assistant';
  children: React.ReactNode;
  keyBase: string;
}) {
  const isUser = role === 'user';
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
      key={keyBase}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'rounded-br-md bg-accent text-accent-foreground'
            : 'rounded-bl-md border border-border/50 bg-card/60 text-foreground/90'
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-accent"
          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}
