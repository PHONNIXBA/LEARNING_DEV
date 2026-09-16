# LEARNING STATUS

## CURRENT OUTCOME

### Long-term

Become a product-thinking developer capable of understanding, tracing, modifying, debugging, building, and eventually designing real software and Web3 systems.

### Concrete Build Outcome

Independently build a functional Web2 CRM application.

The CRM should progressively require capabilities such as:

- frontend UI
- backend/API
- database
- authentication
- customer/contact management
- CRUD operations
- pipeline/status management
- search/filter
- basic permissions
- debugging and feature modification

This is a concrete build outcome under the broader long-term goal of becoming a product-thinking developer.

### Before Devcon 8

Develop enough practical developer literacy to:

- understand unfamiliar projects
- understand product flows
- understand basic architecture
- navigate repositories
- trace technical flows
- understand Web3 component boundaries
- follow developer explanations
- ask useful technical questions


---

## CAN DO

Only add capabilities demonstrated through actual evidence.

- With guidance, can read and explain the high-level structure of a small TypeScript package repository.
- Can identify the roles of README.md, package.json, src/, test/, and build output folders.
- Can trace basic function branches involving type checks, early returns, JSON.parse, fallback, strict error handling, and simple security filtering.
- Can read simple Vitest test cases and connect expected behavior back to source code.
- Can recognize the same parse/fallback pattern in a different simple function.


---

## CURRENTLY LEARNING

- Independent repository navigation and repository mapping.
- Accurate execution-flow tracing without relying on step-by-step decomposition.
- TypeScript repository conventions and common package structure.
- Precise technical explanation based on repository evidence.


---

## NEEDS GUIDANCE

- Opening an unfamiliar repository and deciding what to inspect first without assistance.
- Unfamiliar TypeScript syntax such as generics, type assertions, and module-related concepts.
- Distinguishing string literals, JSON text, runtime values, and parsed values in less familiar cases.
- Determining the exact execution branch when multiple branches could produce similar outputs.


---

## RECENT EVIDENCE

- Repository: unjs/destr
- Task: Baseline assessment of JavaScript/TypeScript repository reading.
- What was demonstrated:
  - Explained README at WHAT / WHY / HOW level after correction.
  - Mapped package.json at a high level: package identity, build outputs, scripts, devDependencies, and package manager.
  - Traced the main destr() execution flow.
  - Read and explained representative Vitest cases for non-string input, fallback, strict mode, security, fast path, and number parsing.
  - Rebuilt a simplified TypeScript parser after guided review.
  - Recognized the same parse/fallback pattern in a new function.
- Assistance required:
  - Significant decomposition and prerequisite teaching were still required.
  - Several corrections were needed for branch tracing and technical wording.

### React Practice — Day 3

- Built controlled form inputs using value + onChange.
- Handled form submission with onSubmit and preventDefault.
- Passed submitted data from child to parent through a callback prop.
- Placed shared posts state in a common parent.
- Added new objects to array state without mutating the existing array.
- Rendered posts with map() into PostCard components.
- Reset form state after submission.
- Traced the flow from user input to updated UI.
- Still needs practice distinguishing data creation, state update, and render, especially across multiple components.

---

## NEXT GAP

Build the minimum frontend foundation required to understand and build a small real Web2 application.

Focus on:
- React component mental model
- JSX
- props
- state
- event handling
- forms
- list rendering
- basic component responsibility

Then transfer these concepts into a small Next.js Blog frontend.


---

## CURRENT PLAN

Monthly Outcome:
Develop enough practical frontend and application-level understanding to build and explain a small Web2 application frontend, then use that foundation to continue toward full-stack CRM development.

By the end of the month, I should progressively be able to:
- build small React components independently
- reason about props and state
- handle user events and forms
- understand basic application data flow
- build a small frontend with Next.js
- understand basic routing and page structure
- identify component responsibility
- trace one user action through the frontend
- make a small modification without step-by-step guidance
- use this foundation for later frontend/backend/API/database learning

Current Week:
Week 1 — React Foundation → Next.js Blog Frontend.

Outcome:
Build a small functional Blog frontend with Next.js after first learning the minimum React fundamentals required to understand what the code is doing.

Required React foundation:
- JSX
- components
- props
- useState
- event handling
- forms
- conditional rendering
- list rendering with map()
- parent/child component data flow

Next.js target:
- App Router
- page and layout
- navigation with Link
- dynamic post routes
- basic Server vs Client Component mental model
- reusable components

Blog frontend scope:
- Blog home / post list
- Post card
- Post detail
- Create post form
- Edit post form
- local or mock data
- basic responsive UI

Do NOT add backend, database, authentication, NestJS, Prisma, or production API this week.

Current Daily Objective:
Begin Next.js by understanding and demonstrating the basic App Router structure.

Learn only:

- app directory
- page.tsx
- layout.tsx
- Link
- basic navigation
- basic Server vs Client Component mental model

Create a new Next.js Blog frontend and migrate the existing static Blog structure into it.

Practice target:

app/
├─ layout.tsx
├─ page.tsx
├─ posts/
│  └─ page.tsx
└─ components/
   ├─ Header.tsx
   ├─ PostList.tsx
   └─ PostCard.tsx

The application should support:

Home
→ navigate to Posts
→ render the existing blog post list

Reuse the React concepts already learned:
- components
- props
- list rendering
- component responsibility

Daily Evidence:
- Explain what app/, page.tsx, and layout.tsx are responsible for.
- Explain how Next.js App Router maps folders/files to routes at a basic level.
- Create at least two working routes.
- Navigate between routes using Link.
- Reuse PostList and PostCard components.
- Explain which parts are normal React and which parts are provided by Next.js.
- Explain at a basic level why some components may need "use client".

Daily Stop Condition:
Stop when I can independently:

- create a basic Next.js App Router structure
- create Home and Posts routes
- navigate between them
- render the existing Blog components inside Next.js
- explain page.tsx, layout.tsx, Link, and the basic Server vs Client Component distinction

Do not continue to dynamic routes, Create/Edit pages, backend, database, authentication, or API yet.


---



## LAST UPDATED

2026-09-12