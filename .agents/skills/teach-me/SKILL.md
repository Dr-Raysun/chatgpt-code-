---
name: teach-me
description: Adaptive teaching skill that explains any topic at the learner's level. Use this skill whenever the user asks to learn, understand, be taught, get an explanation, or says things like "teach me", "explain", "how does X work", "help me learn", "I want to understand", or asks for a tutorial/lesson on a topic—even if they do not explicitly mention this skill. Before explaining, it must determine the user's level (beginner, medium, or pro) and tailor the explanation accordingly. If no topic is provided, it must ask what the user wants to learn. If the topic is time-sensitive, fast-changing, or uncertain, it must verify information on the internet before teaching to avoid incorrect or outdated explanations.
---

# Teach Me

Deliver clear, level-appropriate explanations. Prioritize correctness over speed: do not guess when verification is needed.

## Workflow

Follow this sequence for every request that uses this skill.

### 1. Identify the topic

- If the user provided a topic or question, extract the specific thing they want to learn.
- If no topic is provided (for example: "teach me something", "use teach-me", or an empty/vague request), ask: **"What would you like to learn about?"** and stop there until the user answers.
- If the request contains multiple topics, ask which one to start with unless the user clearly wants an overview.

### 2. Determine the learner's level

Before explaining, identify the user's level: **beginner**, **medium**, or **pro**.

- If the user already stated a level in the current request (for example "explain like I'm a beginner", "intermediate", "expert/pro"), use that level and state the assumption briefly.
- Otherwise, ask: **"What's your level for this topic: beginner, medium, or pro?"** and wait for the answer before giving the explanation.
- Do not provide the substantive explanation until the level is known.

### 3. Assess whether verification is needed

Before teaching, decide whether the topic may be outdated, uncertain, or easy to get wrong.

**Verify on the internet first when:**
- The topic involves current events, recent changes, "latest", "current", pricing, policies, schedules, or live status.
- The topic involves fast-changing technical details: library/framework behavior, API signatures, version-specific features, CLI flags, compatibility, security guidance, or product capabilities that may have changed.
- You are not confident the information is accurate and up to date.
- The user explicitly asks to verify or wants sources.

**How to verify:**
- Use web search/fetch tools to check authoritative, recent sources (official docs, vendor pages, primary references).
- Cross-check key claims when sources disagree or when the topic is high-stakes.
- If verification is not possible (tool limits, no reliable sources), be transparent: state what could not be verified, give the best-known answer with uncertainty clearly marked, and avoid presenting guesses as facts.
- Prefer verified facts over memory. Do not teach something you suspect may be wrong.

### 4. Explain based on level

Tailor depth, vocabulary, and examples to the chosen level.

**Beginner**
- Assume little or no prior knowledge.
- Define key terms plainly before using them.
- Use simple analogies and small, concrete examples.
- Build up step by step; avoid jargon or explain it immediately.
- End with a short recap of the core idea.

**Medium**
- Assume familiarity with basics; skip elementary definitions unless important.
- Focus on how it works, common patterns, trade-offs, and practical examples.
- Connect concepts to things an intermediate learner likely knows.
- Include pitfalls or misconceptions when relevant.

**Pro**
- Assume strong background; be concise and precise.
- Emphasize internals, edge cases, trade-offs, performance/constraints, and best practices.
- Use correct terminology without over-explaining fundamentals.
- Highlight nuanced or non-obvious details and, when verified, version/context specifics.

### 5. Quality checks

- Keep the explanation accurate, scoped to the asked topic, and matched to the stated level.
- Distinguish verified facts from assumptions when verification was partial.
- If helpful, offer a brief follow-up (e.g., "Want a beginner example, a deeper dive, or practice questions?") without being pushy.

## Response patterns

- **No topic provided:** ask what they want to learn; do not pick a topic for them.
- **Topic provided, level missing:** ask for beginner/medium/pro before explaining.
- **Topic provided, level provided:** verify if needed, then explain at that level.
- **Uncertain/outdated risk:** verify first, cite or mention source basis briefly when useful, then explain.

## Example triggers

- "Teach me recursion"
- "Explain Kubernetes networking" (ask level; verify if needed)
- "I want to learn Rust lifetimes, I'm a beginner"
- "Teach me something" (ask for topic)
- "What's new in Next.js?" (verify current information before explaining)
