# DevStreak

**Keep the green squares alive.**

DevStreak is a developer productivity tool that watches your GitHub activity and reminds you — before the day ends, not after — if you're about to miss your own weekly coding goal.

## The idea

GitHub's contribution graph is purely retrospective: it shows you the damage after you've already missed a day, with no concept of a personal goal, and no proactive nudge. DevStreak aims to close that gap — you set a weekly goal (commit-days, minimum commits, or a streak target with configurable off-days), and get a single evening reminder if you're at risk of missing it.

Open question, not yet resolved: the core nudge mechanic is cheaply replicable with a GitHub Actions cron job and a webhook, so the real differentiators (burnout-aware goal adjustment, team/accountability mode, and gaming-resistant activity scoring) are what would actually justify this as a standalone product. None of those are built yet.

## Current status: frontend-only mock

This repo currently contains a fully built, mobile-responsive landing page — nothing else.

What's built:
- 9 landing page sections: Hero, ComparisonSection, WhySection, HowItWorks, DashboardShowcase, FeatureCards, SocialProof, FAQ, FinalCTA, Footer
- A GitHub-accurate contribution graph component (5-level shading, month/day labels, hover tooltips) — visually faithful to real GitHub, but the data itself is fake/deterministic
- A hover-to-highlight interactive dashboard mock

What's NOT built:
- No backend (no FastAPI, no database)
- No real GitHub data or OAuth — everything on the page is hardcoded/fake
- No email integration (Resend, per the original plan)
- "Continue with GitHub" buttons and footer links are non-functional placeholders

## Stack

- Vite
- React 19
- Tailwind CSS v3

## Getting started

    npm install
    npm run dev

## Project structure

    src/
      components/     # Landing page sections
      assets/         # Static images/icons
      App.jsx         # Section composition
      main.jsx        # Entry point

## Roadmap

See open items around GitHub OAuth, backend scaffold, real GitHub API integration, the daily evening check scheduler, and email nudges — none of which are built yet. The biggest open question is strategic (what makes this more than a cron job), not technical, and is worth resolving before backend work starts.
