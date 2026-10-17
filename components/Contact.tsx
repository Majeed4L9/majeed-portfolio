"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const EMAIL = "rajimajeed07@gmail.com";
const mono = "font-[family-name:var(--font-mono)]";

const pillBtn = `rounded-full border border-[var(--line-strong)] bg-transparent px-[11px] py-[5px] text-[0.74rem] font-medium text-[var(--muted)] hover:border-[var(--muted)] hover:text-[var(--fg)] cursor-pointer ${mono}`;

const linkCls =
  "underline decoration-[var(--line-strong)] decoration-1 underline-offset-[3px] hover:decoration-[var(--fg)]";

export default function Contact() {
  const [status, setStatus] = useState("");
  const emailRef = useRef<HTMLSpanElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const say = useCallback((msg: string) => {
    setStatus(msg);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 2400);
  }, []);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const selectEmail = useCallback(() => {
    const el = emailRef.current;
    if (!el) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    say("Selected. Copy it with your keyboard.");
  }, [say]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      say("Copied");
    } catch {
      selectEmail();
    }
  }, [say, selectEmail]);

  const rows: { label: string; content: React.ReactNode }[] = [
    {
      label: "Email",
      content: (
        <>
          <span ref={emailRef}>{EMAIL}</span>
          <button type="button" onClick={handleCopy} className={pillBtn}>
            Copy
          </button>
          <span
            role="status"
            aria-live="polite"
            className="text-[0.84rem] text-[var(--muted)]"
          >
            {status}
          </span>
        </>
      ),
    },
    {
      label: "Portfolio",
      content: (
        <a
          href="https://majeedraji.com"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          majeedraji.com
        </a>
      ),
    },
    {
      label: "Resume",
      content: (
        <a
          href="https://drive.google.com/file/d/1FXV-KHeqebsa6B27Nc4jt3pGyp_StzPH/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          View the PDF on Google Drive ↗
        </a>
      ),
    },
    {
      label: "LinkedIn",
      content: (
        <a
          href="https://www.linkedin.com/in/majeed-raji-bb2148226"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          linkedin.com/in/majeed-raji-bb2148226
        </a>
      ),
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-h"
      className="pt-[clamp(64px,10vw,112px)]"
    >
      <div className="mb-7 grid gap-2.5">
        <h2
          id="contact-h"
          className="text-[clamp(1.7rem,3.6vw,2.3rem)] font-semibold leading-[1.1] tracking-[-0.035em]"
        >
          How to reach me
        </h2>
        <p className="max-w-[66ch] text-[var(--muted)]">
          Email is best. I&apos;m happy to work async.
        </p>
      </div>

      <dl className="grid grid-cols-[88px_minmax(0,1fr)] border-t border-[var(--line)] min-[621px]:grid-cols-[132px_minmax(0,1fr)]">
        {rows.map((row) => (
          <div key={row.label} className="contents">
            <dt
              className={`border-b border-[var(--line)] py-4 pt-[19px] text-[0.76rem] tracking-[0.03em] text-[var(--muted)] ${mono}`}
            >
              {row.label}
            </dt>
            <dd className="m-0 flex min-w-0 flex-wrap items-center gap-x-3.5 gap-y-2 break-words border-b border-[var(--line)] py-4">
              {row.content}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className={`mt-[clamp(64px,10vw,104px)] flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-[var(--line)] pt-5 text-[0.76rem] text-[var(--muted)] ${mono}`}
    >
      <span>Written for the Fredrin UI/UX designer listing, October 2026</span>
      <span>
        Press{" "}
        <kbd
          className={`rounded-[5px] border border-[var(--line-strong)] px-1.5 py-px text-[0.72rem] font-medium text-[var(--fg)] ${mono}`}
        >
          T
        </kbd>{" "}
        to switch theme ·{" "}
        <a href="#top" className="underline">
          Back to top
        </a>
      </span>
    </footer>
  );
}