export type FitStatus = "Not yet" | "Building it" | "Have it";

export type FitRow = {
  requirement: string;
  status: FitStatus;
  evidence: string;
};

export const fitStatusClass: Record<FitStatus, string> = {
  "Not yet": "is-back",
  "Building it": "is-run",
  "Have it": "is-done",
};

export const fitRows: FitRow[] = [
  {
    requirement: "Shipped product design work, ideally developer tools or dense interfaces.",
    status: "Not yet",
    evidence:
      "I haven't owned a product through to launch. My case studies were never built, and my paid work has been on other people's products.",
  },
  {
    requirement:
      "Fluency in modern design tooling, with enough front-end literacy to speak precisely with engineers.",
    status: "Building it",
    evidence:
      "I work in Figma and FigJam every day. My front-end skills stop at basic HTML and CSS, and that is the part I'm building.",
  },
  {
    requirement:
      "Strong opinions about typography, spacing and restraint, and the taste to defend them.",
    status: "Building it",
    evidence:
      "My case studies show where I stand on restraint: one question per screen in Marlowe, and fixed color roles in VeloGaming. I'd love to learn how to defend those choices against a more experienced designer.",
  },
  {
    requirement: "Attention to empty states, error states and edge cases.",
    status: "Building it",
    evidence:
      "ShopEase has a designed empty wishlist. VeloGaming has skippable onboarding and a setting that wipes the AI profile. Marlowe flags a finished stage when new evidence affects it, instead of silently reopening it. Error states are what I most want to practice.",
  },
  {
    requirement: "Written-first, async, remote work.",
    status: "Have it",
    evidence:
      "I already work fully remotely, and I write up each project from the problem to the final screens.",
  },
];
