export const EXPERIENCES = [
  {
    start: { month: 3, year: 2026 },
    end: null,
    isCurrent: true,
    company: '.es formación y consultoría',
    role: 'Frontend Architect - Banc Sabadell',
    location: 'Madrid, Spain · Remote',
    description: `Joined the Frontend Architecture team to define and govern the bank's technical frontend ecosystem. Hybrid role pairing **architecture design** with hands-on implementation in production.

Built **custom agentic tooling** on top of coding agents (Pi/OpenCode), MCP servers and bespoke extensions to automate code analysis, technical documentation, change review and recurring architecture tasks.

Applied **agentic automations** to CI/CD, change review and integrations with the team's collaborative toolchain.`,
  },
  {
    start: { month: 9, year: 2025 },
    end: { month: 3, year: 2026 },
    isCurrent: false,
    company: 'Banco Santander',
    role: 'Frontend Engineer',
    location: 'Madrid, Spain',
    description: `Owned two microfrontends end-to-end — development, maintenance, releases and deployments — in a high-availability banking environment on Angular and TypeScript.

Built a **CLI tool** in Node.js + TypeScript that turns the microfrontend i18n pipeline into a single command: .xlf → CSV → batch API translation → consolidation → locale generation. **Cut internationalization time from days to ~10 minutes** and made the workflow adoptable across the team.

Strengthened E2E quality with **Playwright MCP** to drive agent-assisted automated testing, and shipped **agentic workflows** that accelerated analysis, documentation and change generation across the development lifecycle. Mentored teammates 1:1 on these MCP-based workflows.`,
  },
  {
    start: { month: 11, year: 2023 },
    end: { month: 8, year: 2025 },
    isCurrent: false,
    company: 'UST Global | Banco Santander',
    role: 'Frontend Engineer',
    location: 'Madrid, Spain · Remote',
    description: `Led the development and optimization of an **Angular + TypeScript** microfrontend inside Banco Santander's platform.

Designed the **state management layer** (NgRx + a custom store) and the **routing system** that lets microfrontends stay encapsulated through **Module Federation**.

Hardened delivery with **unit testing** (Jasmine/Karma) tuned to pass **SonarQube** quality gates and Jenkins pipeline validations, and onboarded a new engineer to the project's standards.`,
  },
  {
    start: { month: 3, year: 2023 },
    end: { month: 8, year: 2023 },
    isCurrent: false,
    company: 'GrayHats',
    role: 'Frontend Developer Intern',
    location: 'Córdoba, Spain · On-site',
    description: `Built features with **React** and **GraphQL**, and developed backend services on **AWS Amplify** with secure, scalable integrations.`,
  },
];
