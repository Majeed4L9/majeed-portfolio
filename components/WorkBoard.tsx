import type { CSSProperties } from "react";

type Status = "done" | "run" | "back";

interface Ticket {
  id: string;
  meta: string;
  title: string;
  role?: string;
  description: string;
  tags?: string[];
  href?: string;
}

interface Column {
  status: Status;
  title: string;
  tickets: Ticket[];
}

const statusColor: Record<Status, string> = {
  done: "var(--done)",
  run: "var(--run)",
  back: "var(--back)",
};

const colorVar = (status: Status): CSSProperties =>
  ({ "--c": statusColor[status] }) as CSSProperties;

const columns: Column[] = [
  {
    status: "done",
    title: "Completed",
    tickets: [
      {
        id: "MR-0001",
        meta: "2026 · about 2 weeks",
        title: "Marlowe",
        role: "LegalTech · AI-native workspace for law firms",
        description:
          "Designed an AI workspace concept for law firms, built on a workflow mapped to real litigation stages, with evidence tied to the claims it supports.",
        tags: ["Research", "Wireframes", "High fidelity", "Prototype"],
        href: "https://majeedraji.com/marlowe/",
      },
      {
        id: "MR-0002",
        meta: "2026 · about 3 weeks",
        title: "VeloGaming",
        role: "iGaming · Verification-first discovery platform",
        description:
          "Designed a verification-first iGaming platform concept built on a Discover, Compare, Verify, Choose framework and an inspectable trust score, with optional AI personalization.",
        tags: ["Product strategy", "Responsive", "Prototype"],
        href: "https://majeedraji.com/velogaming/",
      },
      {
        id: "MR-0003",
        meta: "2025",
        title: "ShopEase",
        role: "E-commerce · Global shopping app",
        description:
          "Designed interactive prototypes for a global shopping app centered on simplicity and speed, with streamlined discovery and checkout.",
        tags: ["Mobile", "Survey", "Prototype"],
        href: "https://majeedraji.com/work/shopease/",
      },
    ],
  },
  {
    status: "run",
    title: "Running",
    tickets: [
      {
        id: "MR-0004",
        meta: "Feb 2026 to now",
        title: "Wyze",
        role: "UX/UI Designer, long-term freelance contract",
        description:
          "Redesigned a live e-commerce app, and the founding team praised the new direction. Designed a restaurant POS with oversized buttons and quantity steppers to cut tap errors on busy shifts. Delivered high-fidelity designs for a B2B finance app and a dating app.",
        tags: ["Mobile", "E-commerce", "POS", "B2B finance"],
      },
      {
        id: "MR-0005",
        meta: "Aug 2025 to now",
        title: "Avaye Ocean",
        role: "Product and Graphic Designer",
        description:
          "Supporting web and mobile product work across three brands, with designers, product managers, marketers and developers. I also design campaign graphics and educational carousels.",
        tags: ["Web", "Mobile", "Brand"],
      },
    ],
  },
  {
    status: "back",
    title: "Backlog",
    tickets: [
      {
        id: "MR-0006",
        meta: "Next",
        title: "Testing with real users",
        description:
          "My case studies have not been tested. I want to run usability tests and learn from what people actually do.",
      },
      {
        id: "MR-0007",
        meta: "Next",
        title: "Dense interfaces for developers",
        description:
          "I want to design a surface that people live in all day, such as a board of agents.",
      },
      {
        id: "MR-0008",
        meta: "Next",
        title: "Designing against real builds",
        description:
          "Iterating with engineers on running software, not only on prototypes.",
      },
      {
        id: "MR-0009",
        meta: "Next",
        title: "Motion and interaction craft",
        description:
          "Timing, feedback and state changes that keep a busy screen calm.",
      },
    ],
  },
];

const mono = "font-[family-name:var(--font-mono)]";

function TicketCard({ ticket, status }: { ticket: Ticket; status: Status }) {
  const isBack = status === "back";
  return (
    <article
      className={`grid min-w-0 gap-2.5 rounded-xl border p-[18px] transition-colors duration-150 hover:border-[var(--line-strong)] ${
        isBack
          ? "border-dashed border-[var(--line-strong)] bg-transparent"
          : "border-[var(--line)] bg-[var(--surface)]"
      }`}
    >
      <div
        className={`flex justify-between gap-2.5 text-[0.72rem] text-[var(--muted)] ${mono}`}
      >
        <span>{ticket.id}</span>
        <span>{ticket.meta}</span>
      </div>
      <h4 className="text-[1.12rem] font-semibold leading-tight tracking-[-0.015em]">
        {ticket.title}
      </h4>
      {ticket.role && (
        <p className="-mt-1.5 text-[0.86rem] text-[var(--muted)]">
          {ticket.role}
        </p>
      )}
      <p className="text-[0.92rem] leading-[1.55] text-[var(--muted)]">
        {ticket.description}
      </p>
      {ticket.tags && (
        <ul className="flex flex-wrap gap-1.5">
          {ticket.tags.map((tag) => (
            <li
              key={tag}
              className={`rounded-md border border-[var(--line)] px-[7px] py-[3px] text-[0.7rem] text-[var(--muted)] ${mono}`}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      {ticket.href && (
        <a
          href={ticket.href}
          target="_blank"
          rel="noopener noreferrer"
          className="justify-self-start text-[0.86rem] font-medium underline decoration-[var(--line-strong)] decoration-1 underline-offset-[3px] hover:decoration-[var(--fg)]"
        >
          Read the case study ↗
        </a>
      )}
    </article>
  );
}

export default function WorkBoard() {
  return (
    <section
      id="work"
      aria-labelledby="work-h"
      className="pt-[clamp(64px,10vw,112px)]"
    >
      <div className="mb-7 grid gap-2.5">
        <h2
          id="work-h"
          className="text-[clamp(1.7rem,3.6vw,2.3rem)] font-semibold leading-[1.1] tracking-[-0.035em]"
        >
          What I&apos;ve worked on
        </h2>
        <p className="max-w-[66ch] text-[var(--muted)]">
          Completed holds my three case studies: finished projects that show how
          I think. Running is my current work. Backlog is what I want to learn
          next.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 min-[901px]:grid-cols-3 min-[901px]:gap-5">
        {columns.map((col) => (
          <div
            key={col.status}
            className="grid min-w-0 gap-3"
            style={colorVar(col.status)}
          >
            <div className="flex items-center gap-[9px] border-b border-[var(--line)] pb-3">
              <i
                aria-hidden="true"
                className="pulse-dot h-2 w-2 flex-none rounded-full bg-[var(--c)]"
                style={
                  col.status === "run"
                    ? { animation: "pulse-ring 2.2s ease-out infinite" }
                    : undefined
                }
              />
              <h3 className="text-[0.95rem] font-semibold tracking-[-0.01em]">
                {col.title}
              </h3>
              <span
                className={`ml-auto text-[0.76rem] font-medium text-[var(--muted)] ${mono}`}
              >
                {col.tickets.length}
              </span>
            </div>
            <div className="grid gap-3">
              {col.tickets.map((t) => (
                <TicketCard key={t.id} ticket={t} status={col.status} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}