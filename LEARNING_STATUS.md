# LEARNING STATUS

## CURRENT OUTCOME

### Long-term

Become a product-thinking Web3 developer who can understand unfamiliar products and systems, design their architecture and technical flows, make technical trade-offs, use AI to accelerate implementation, and still understand, review, trace, test, modify, and debug important code.

The long-term target is not to manually write every line of code.

The target is to progressively own:

- product understanding
- requirements
- product flow
- system architecture
- frontend/backend/database boundaries
- Web3 architecture
- responsibility boundaries
- state ownership
- data flow
- technical trade-offs
- implementation task decomposition
- AI-assisted implementation workflow
- code review
- testing
- debugging
- final technical decisions

AI may accelerate implementation, but architecture and technical reasoning should progressively remain my responsibility.

### Concrete Build Outcome

Independently design and deliver a functional Web2 CRM application using AI-assisted implementation where useful.

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
- testing
- debugging
- architecture reasoning
- reviewing AI-generated implementation

The important outcome is not that every line is written manually.

The important outcome is:

> I can design the system, explain the architecture, direct implementation, verify what was built, and correct it when necessary.

### Before Devcon 8

Develop enough practical developer literacy and architecture awareness to:

- understand unfamiliar projects
- understand product flows
- understand basic architecture
- recognize frontend/backend/database/Web3 boundaries
- navigate repositories
- trace technical flows
- understand important state and data movement
- follow developer explanations
- ask useful technical and architecture questions
- discuss simple design trade-offs

---

## LEARNING MODEL

### KHTN

KHTN is the primary structured source for coding fundamentals.

Relevant areas may include:

- web fundamentals
- JavaScript
- React
- frontend fundamentals
- Node.js
- backend fundamentals
- database
- testing
- security
- performance
- DevOps

### Independent Self-Study

Independent study should avoid unnecessary duplication of KHTN fundamentals.

Primary self-study focus:

- framework mental models
- application architecture
- system design
- product flow
- state ownership
- data flow
- responsibility boundaries
- technical trade-offs
- Web3 boundaries
- AI-assisted implementation
- code review
- testing
- debugging

Preferred model:

KHTN  
↓  
FUNDAMENTALS

SELF-STUDY  
↓  
FRAMEWORK MENTAL MODEL  
↓  
ARCHITECTURE  
↓  
SYSTEM THINKING  
↓  
REAL PROJECT APPLICATION

AI  
↓  
IMPLEMENTATION ACCELERATION

ME  
↓  
DESIGN  
↓  
REVIEW  
↓  
TRACE  
↓  
TEST  
↓  
DEBUG  
↓  
FINAL TECHNICAL DECISION

### Minimum Implementation Literacy

Architecture-first does not mean code-ignorant.

I still need enough implementation literacy to:

- read important generated code
- identify important files and responsibilities
- trace critical execution flows
- understand important data and state changes
- inspect AI-generated diffs
- make small modifications
- test important behavior
- debug meaningful problems
- identify architecture violations
- accept, reject, or correct AI implementation

If I cannot determine whether the implementation matches the intended architecture, the architecture capability has not yet been demonstrated.

---

## CAN DO

Only add capabilities demonstrated through actual evidence.

### Repository / TypeScript

- With guidance, can read and explain the high-level structure of a small TypeScript package repository.
- Can identify the roles of README.md, package.json, src/, test/, and build output folders.
- Can trace basic function branches involving type checks, early returns, JSON.parse, fallback, strict error handling, and simple security filtering.
- Can read simple Vitest test cases and connect expected behavior back to source code.
- Can recognize the same parse/fallback pattern in a different simple function.

### React / Frontend

- Built controlled form inputs using value + onChange.
- Handled form submission with onSubmit and preventDefault.
- Passed submitted data from child to parent through a callback prop.
- Placed shared posts state in a common parent.
- Added new objects to array state without mutating the existing array.
- Rendered posts with map() into PostCard components.
- Reset form state after submission.
- Traced the flow from user input to updated UI.

These are implementation-literacy foundations, not the final frontend learning target.

---

## CURRENTLY LEARNING

Primary focus:

- Next.js framework mental model
- frontend architecture
- page/layout/component responsibility
- Server vs Client Component boundaries
- state ownership
- frontend data flow
- route structure
- product flow → architecture mapping
- architecture → bounded implementation task decomposition
- reviewing AI-generated frontend implementation
- tracing important generated code
- testing and correcting implementation

Supporting implementation literacy:

- React component mental model
- props/state flow
- event handling
- forms
- list rendering
- reading and modifying small frontend code paths

Do not duplicate KHTN React fundamentals unless a gap blocks the current architecture objective.

---

## NEEDS GUIDANCE

Current demonstrated weaknesses:

### Repository / Code

- Opening an unfamiliar repository and deciding what to inspect first without assistance.
- Unfamiliar TypeScript syntax such as generics, type assertions, and module-related concepts.
- Determining exact execution branches when multiple branches could produce similar outputs.
- Distinguishing data creation, state update, and rendering across multiple components.

### Architecture

Architecture capability has not yet been demonstrated strongly enough in evidence.

Still needs guidance to:

- turn a product requirement into frontend architecture
- decide component responsibilities
- decide state ownership
- decide Server vs Client boundaries
- explain data flow before implementation
- identify important failure cases
- compare simple architecture alternatives
- break an architecture into bounded AI implementation tasks
- review whether AI-generated code matches the intended design

---

## RECENT EVIDENCE

### Repository: unjs/destr

Task:

Baseline assessment of JavaScript/TypeScript repository reading.

Demonstrated:

- Explained README at WHAT / WHY / HOW level after correction.
- Mapped package.json at a high level: package identity, build outputs, scripts, devDependencies, and package manager.
- Traced the main destr() execution flow.
- Read and explained representative Vitest cases for non-string input, fallback, strict mode, security, fast path, and number parsing.
- Rebuilt a simplified TypeScript parser after guided review.
- Recognized the same parse/fallback pattern in a new function.

Assistance required:

- Significant decomposition and prerequisite teaching were still required.
- Several corrections were needed for branch tracing and technical wording.

### React Practice — Day 3

Demonstrated:

- Built controlled form inputs using value + onChange.
- Handled form submission with onSubmit and preventDefault.
- Passed submitted data from child to parent through a callback prop.
- Placed shared posts state in a common parent.
- Added new objects to array state without mutating the existing array.
- Rendered posts with map() into PostCard components.
- Reset form state after submission.
- Traced the flow from user input to updated UI.

Still weak:

- Distinguishing data creation, state update, and render across multiple components.
- Architecture reasoning was not yet the main evidence target in this exercise.

---

## NEXT GAP

The highest-value next gap is:

> Move from basic React implementation literacy into Next.js frontend architecture thinking without unnecessarily duplicating KHTN fundamentals.

Focus on:

- understand what Next.js adds on top of React
- understand App Router structure
- understand page/layout/component responsibilities
- understand Server vs Client Component boundaries
- decide where state should live
- decide where data should be fetched
- map one user flow into frontend architecture
- explain why each responsibility belongs where it does
- break the design into bounded implementation tasks
- use AI to accelerate implementation
- inspect and trace the important generated code
- test whether implementation matches the design
- make at least one small correction or modification

---

## CURRENT PLAN

### Monthly Outcome

Develop enough frontend architecture and implementation literacy to understand, design, and verify a small Next.js application frontend, while using KHTN as the primary source of frontend fundamentals.

By the end of the month, I should progressively be able to:

- understand the Next.js application mental model
- map product requirements into frontend structure
- decide basic page/layout/component responsibilities
- reason about Server vs Client boundaries
- reason about state ownership
- explain data flow through the frontend
- identify where API/data-fetching responsibility should live
- design one small frontend feature before implementation
- break that feature into bounded implementation tasks
- use AI to implement parts when appropriate
- inspect important generated diffs
- trace one important user action through the implementation
- test important behavior
- identify when implementation violates the intended design
- make a small modification or correction
- transfer these architecture habits later into backend/database/Web3 systems

### KHTN Coverage

KHTN is responsible for the structured fundamentals that support this work, including relevant React/frontend concepts.

Do not automatically repeat the entire React curriculum in self-study.

If a KHTN concept is missing and blocks the current Next.js architecture task:

> Learn only enough of that prerequisite to continue.

---

## CURRENT WEEK

### Week Outcome

Understand and design the basic architecture of a small Next.js Blog frontend, then use AI-assisted implementation to verify the design.

### Why This Week

The current implementation evidence shows basic React capability, but architecture evidence is still weak.

Next.js provides a practical environment to begin reasoning about:

- routes
- layouts
- pages
- reusable components
- Server vs Client responsibilities
- state ownership
- data flow

### KHTN Coverage

React/frontend fundamentals are primarily covered by KHTN.

Self-study should apply them rather than restart them.

### Architecture Target

For the Blog frontend, design and explain:

- Home
- Posts list
- Post detail
- Create post
- Edit post

For each flow, progressively identify:

- route
- page responsibility
- reusable components
- state ownership
- server/client responsibility
- data source
- user action
- expected result
- failure behavior

### AI Leverage

AI may implement code after the intended structure and behavior are defined.

AI should not silently choose important architecture that has not been discussed.

### Evidence

Evidence for this week should include:

- explain what app/, page.tsx, and layout.tsx are responsible for
- explain how folders/files map to routes
- explain basic Server vs Client Component responsibility
- create a simple frontend architecture map for the Blog
- explain where state should live for at least one feature
- explain one important data flow
- define one bounded implementation task for AI
- inspect the important generated files/diff
- trace one user action through the resulting code
- identify whether implementation matches the design
- make one small modification or correction

### Stop Condition

The week is sufficient when I can:

- design the basic Blog frontend structure before coding
- explain why the main responsibilities are placed where they are
- use AI to implement a bounded part
- inspect and trace the important implementation
- identify whether it matches the architecture
- test the behavior
- make one small correction without requiring full step-by-step instruction

Do not measure completion by:

- amount of code manually written
- number of Next.js APIs memorized
- tutorial completion

---

## CURRENT DAILY OBJECTIVE

### Main Objective

Shift from building Next.js pages by following implementation steps to reasoning about the architecture of the existing Blog frontend.

### Practice

Using the Blog project:

1. Define the user flow:

   Home → Posts → Post Detail

2. Map that flow to Next.js structure.

3. Decide:

   - which routes exist
   - which page owns each route
   - which UI should become reusable components
   - what data each page needs
   - whether each important component should be Server or Client
   - whether state is needed
   - where state should live if needed

4. Explain the reasoning before implementation.

5. Choose one bounded feature for AI-assisted implementation.

6. After implementation:

   - inspect the changed files
   - trace the important execution flow
   - compare implementation against the intended architecture
   - test the behavior
   - identify one thing that should be kept, changed, or questioned

### Daily Evidence

- A simple architecture map for Home → Posts → Post Detail.
- Clear responsibility for page.tsx, layout.tsx, PostList, and PostCard.
- Basic Server vs Client reasoning for the flow.
- One bounded AI implementation task.
- Review of the resulting implementation.
- One traced user flow.
- One architecture or implementation observation based on evidence.

### Daily Stop Condition

Stop when I can explain:

- the intended frontend architecture
- the responsibility of the important files/components
- the main data flow
- why Server or Client responsibility was chosen
- what AI was asked to implement
- whether the generated implementation matches the design

Do not proceed merely because the feature visually works.

---

## ROADMAP STATUS

Current decision:

> CHANGE METHOD, NOT END GOAL.

Reason:

- KHTN already provides structured fundamental learning.
- Independent study should avoid unnecessary duplication.
- The long-term objective values architecture ownership and product thinking.
- AI can reduce low-value implementation time.
- Implementation literacy must remain strong enough to verify AI output.

Current learning model:

KHTN  
→ FUNDAMENTALS

SELF-STUDY  
→ ARCHITECTURE / SYSTEM THINKING

AI  
→ IMPLEMENTATION ACCELERATION

ME  
→ DESIGN / REVIEW / TRACE / TEST / DEBUG / FINAL DECISION

---

## LAST UPDATED

2026-09-23