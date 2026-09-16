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

### React Practice — Day 1–2

- Built a small Blog component structure using JSX, components, and props.
- Passed post data from PostList to PostCard through typed props.
- Explained basic parent/child component relationships.
- Used useState and event handlers to create state-driven UI behavior.
- Implemented conditional UI, toggle behavior, and multi-state interaction.
- Debugged simple import/save issues independently.
- Still needs more practice reasoning about multiple state updates and the exact event → state update → re-render sequence.


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
Learn and demonstrate the next React fundamentals:

- controlled form inputs
- form submission
- list rendering with map()
- adding new data into state

Continue using the existing Blog React practice.

Practice target:
Extend the current Blog project with a CreatePostForm.

The form should allow the user to enter:
- title
- author
- description

Then submit a new post and display it in the existing PostList.

Target flow:

User types into form
→ onChange event
→ input state updates
→ form UI reflects state

User submits form
→ onSubmit event
→ new post is created
→ posts state updates
→ PostList re-renders
→ new PostCard appears

Daily Evidence:
- Explain what a controlled input is in my own words.
- Use state to control form input values.
- Handle onChange correctly.
- Handle form submission with onSubmit.
- Render posts using map().
- Add a new post into state without mutating the existing array.
- Explain the full flow from typing to the new PostCard appearing.
- Explain which component should own the posts state and why.

Daily Stop Condition:
Stop when I can independently create and submit a post through the form and correctly explain:

input event
→ form state update
→ submit event
→ posts state update
→ re-render
→ new post displayed

Do not continue to Next.js until this evidence is demonstrated.


---



## LAST UPDATED

2026-09-12