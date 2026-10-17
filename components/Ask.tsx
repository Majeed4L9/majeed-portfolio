interface GiveItem {
  title: string;
  body: string;
}

interface Question {
  title: string;
  body: string;
}

const give: GiveItem[] = [
  {
    title: "Self-directed work.",
    body: "Give me a problem and I'll take it from research to a clickable prototype on my own, and ask when I'm stuck.",
  },
  {
    title: "A user's view of AI tools.",
    body: "I use Claude, ChatGPT and Lovable daily, so I quickly notice where an AI tool is hard to steer or hides what it is doing.",
  },
  {
    title: "Easy conversations with engineers.",
    body: "I ask early what is feasible, and my computer science background helps me follow the answer.",
  },
];

const questions: Question[] = [
  {
    title: "Which card do I open first?",
    body: "Twenty running tickets is a priority problem before it is a layout problem. In Marlowe I learned that the nearest deadline is not always the most urgent item. What is the right signal on a board of agents?",
  },
  {
    title: "What does a blocked agent need?",
    body: "How fast can someone see that an autonomous cloud agent is stuck or blocked, and exactly what context it needs to resume? I want to master these interactive workflows before attempting to design them.",
  },
  {
    title: "How do you review fast work?",
    body: "Marlowe taught me that people trust AI output when they can check it. I'd like to learn what checking looks like for a pull request diff that an agent wrote in its own worktree.",
  },
];

const mono = "font-[family-name:var(--font-mono)]";

export default function Ask() {
  return (
    <section
      id="ask"
      aria-labelledby="ask-h"
      className="pt-[clamp(64px,10vw,112px)]"
    >
      <div className="mb-7 grid gap-2.5">
        <h2
          id="ask-h"
          className="text-[clamp(1.7rem,3.6vw,2.3rem)] font-semibold leading-[1.1] tracking-[-0.035em]"
        >
          Why I want to learn at Fredrin
        </h2>
      </div>

      <div className="grid grid-cols-1 items-start gap-[clamp(28px,5vw,72px)] min-[901px]:grid-cols-[1.25fr_1fr]">
        <div className="grid max-w-[62ch] gap-4">
          <p className="text-[1.12rem] leading-[1.55] text-[var(--fg)]">
            Neither of my current roles puts me next to a senior product
            designer day to day. I want to be taught properly: to see how an
            experienced designer makes decisions, to get honest feedback on my
            work, and to grow toward owning whole problems, as your listing
            describes.
          </p>
          <p className="text-[var(--muted)]">
            Making twenty agents feel as calm as one is the kind of problem I
            want to spend my time on.
          </p>
        </div>

        <aside
          aria-labelledby="give-h"
          className="grid rounded-[20px] border border-[var(--line)] bg-[var(--surface-2)] p-[22px]"
        >
          <p
            id="give-h"
            className={`mb-1 text-[0.72rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)] ${mono}`}
          >
            What I&apos;d bring
          </p>
          <ul>
            {give.map((item, i) => (
              <li
                key={item.title}
                className={`grid gap-0.5 py-3.5 ${
                  i === 0 ? "" : "border-t border-[var(--line)]"
                }`}
              >
                <strong className="font-semibold tracking-[-0.01em]">
                  {item.title}
                </strong>
                <span className="text-[0.92rem] text-[var(--muted)]">
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="mt-[clamp(36px,6vw,56px)] grid gap-3.5">
        <p
          className={`text-[0.72rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)] ${mono}`}
        >
          Questions I&apos;d bring on day one
        </p>
        <div className="grid grid-cols-1 gap-x-[clamp(20px,3vw,40px)] border-t border-[var(--line)] min-[901px]:grid-cols-3">
          {questions.map((q) => (
            <div key={q.title} className="grid content-start gap-1.5 py-5">
              <h3 className="text-base font-semibold tracking-[-0.01em]">
                {q.title}
              </h3>
              <p className="text-[0.92rem] text-[var(--muted)]">{q.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}