"use client";

import { Bot, Send } from "lucide-react";
import { useRef, useState } from "react";

import {
  getAdvisorGreeting,
  getAdvisorResponse,
  getQuickQuestions,
  type AdvisorMessage,
} from "@/lib/biol-advisor";
import { cn } from "@/lib/utils";

function formatMessageContent(content: string) {
  const parts = content.split(/(\*\*.+?\*\*|_.+?_)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-[var(--foreground)]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("_") && part.endsWith("_")) {
      return (
        <em key={index} className="text-[var(--muted)]">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part.split("\n").map((line, lineIndex, arr) => (
      <span key={`${index}-${lineIndex}`}>
        {line}
        {lineIndex < arr.length - 1 && <br />}
      </span>
    ));
  });
}

function MessageBubble({ message }: { message: AdvisorMessage }) {
  const isUser = message.role === "user";
  return (
    <div
      className={cn(
        "flex",
        isUser ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
            : "border border-[var(--border)] bg-[var(--background)] text-[var(--muted)]",
        )}
      >
        {formatMessageContent(message.content)}
      </div>
    </div>
  );
}

export function BiolAdvisorChat() {
  const [messages, setMessages] = useState<AdvisorMessage[]>([
    { role: "assistant", content: getAdvisorGreeting() },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: AdvisorMessage = { role: "user", content: trimmed };
    const assistantMessage: AdvisorMessage = {
      role: "assistant",
      content: getAdvisorResponse(trimmed),
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");

    requestAnimationFrame(() => {
      listRef.current?.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  }

  return (
    <section
      id="asesor-biol"
      className="flex h-full min-h-[28rem] flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
      aria-labelledby="advisor-heading"
    >
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--primary)]">
          <Bot className="size-5" aria-hidden />
        </div>
        <div>
          <h2
            id="advisor-heading"
            className="text-lg font-semibold text-[var(--foreground)]"
          >
            Asesor de biol líquido
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Responde dudas sobre composición, dosis y aplicación. Para
            cotizaciones, te derivamos a contacto.
          </p>
        </div>
      </div>

      <div
        ref={listRef}
        className="mt-5 flex-1 space-y-3 overflow-y-auto rounded-xl border border-[var(--border)] bg-[var(--background)]/60 p-4"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {messages.map((message, index) => (
          <MessageBubble key={`${message.role}-${index}`} message={message} />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {getQuickQuestions().map((question) => (
          <button
            key={question}
            type="button"
            onClick={() => sendMessage(question)}
            className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] transition hover:bg-[var(--accent)]"
          >
            {question}
          </button>
        ))}
      </div>

      <form
        className="mt-4 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
      >
        <label htmlFor="advisor-input" className="sr-only">
          Escribe tu pregunta
        </label>
        <input
          id="advisor-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ej.: ¿Dosis para 200 plantas de café?"
          className="min-w-0 flex-1 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--ring)] focus:ring-2 focus:ring-[var(--ring)]/30"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Enviar pregunta"
        >
          <Send className="size-4" aria-hidden />
        </button>
      </form>
    </section>
  );
}
