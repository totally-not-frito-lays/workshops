# Jamstack

## Context of this workshop

This workshop series was written to be delivered to Major League Hacking's 
Global Hack Week: Open Source 2024 event.

I'm still experimenting with the presentation style but have recently been 
trending towards a live demo and talk style for these streams.

There will be an accompanying github working repo for this project.

## Learning Goals

By the end of the entire workshop series / lesson plan, attendees will be able to:
- describe what a JAMstack website is
  - compare JAMstack websites to other low code documentation methods
  - how to use a JAMstack website with 0 coding ability
- understand the general order of skills to learn for web development
  - tour roadmaps.sh / the odin project
- differentiate between the architectural pattern and the framework tooling
- introduction to web development
  - understand page routing and slugs
  - set up node and nvm on their machine
  - figma prototyping crashcourse
  - working on small teams crashcourse (github projects + issues)
- introduction to templating languages
  - use liquid
  - designing resusable components
- build a basic JAMstack website using 11ty
  - 11ty architecture
  - use front matter to share information between a markdown file and a webpage
  - pagination
  - layout chaining
  - i18n
  - programmatic API
  - customize a pre-built 11ty template for their own use case
    - how to read other people's 11ty projects
- deployment with GitHub Actions

## Roadmap

### Day 1

- What is a JAMStack website
  - Building your first JAMStack website with no code!
  - Picking a website tech stack to start with!
  - Comparing JAMstack websites to other website builders (why start with 11ty)
  - Vanilla vs JAMStack
- Mapping out the learning path for mastering the JAMStack pattern
  - tour roadmaps.sh
  - tour the odin project
- Designing our own JAMStack website
  - Figma crash course
  - Content planning
  - Setting up GitHub issues + projects
  - Developer tooling setup in GitHub Codespaces

### Day 2

- Reviewing design and remaining work
- Reviewing 11ty documentation
  - Configuration quick start
  - Layout quick start
  - Front matter review
- Helpful libraries to include / learn / know
  - bootstrap vs picocss vs tailwind
  - component frameworks and 11ty (its kinda better with astro, gatsby, etc.)
  - vite
  - jsdoc / documentation generators

### Day 3

- advanced 11ty features
  - pagination
  - pages from data
    - (optional) building and running your own data
- SEO
  - i18n
  - accessibility
- Deployment
  - CI/CD pipeline general
  - GitHub Actions Crash Course