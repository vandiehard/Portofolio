# Product Requirements Document - Developer Portfolio

## Overview
A modern, responsive personal portfolio website for a software developer to showcase projects, skills, experience, and provide contact information. Supports dark/light theme toggling.

## Goals
- Present a professional online presence
- Showcase technical skills and projects effectively
- Provide an easy way for recruiters/clients to make contact
- Fully responsive across all devices

## Target Audience
- Recruiters and hiring managers
- Potential freelance clients
- Fellow developers and collaborators

## Tech Stack
- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS
- **Languages**: JavaScript (React), HTML5, CSS3
- **Backend Skills Showcased**: Python, Flask, Django, MySQL
- **Deployment**: Static site (Vercel/Netlify compatible)

## Sections & Features

### 1. Navbar
- Sticky/fixed top navigation bar
- Logo/Name on the left
- Navigation links to each section (smooth scroll)
- Dark/Light mode toggle button (sun/moon icon)
- Mobile hamburger menu

### 2. Hero Section
- Full-viewport height landing area
- Developer name with animated typing effect or gradient text
- Tagline/role (e.g., "Full-Stack Developer")
- Brief one-liner introduction
- Call-to-action buttons: "View Projects" and "Contact Me"
- Social media icon links (GitHub, LinkedIn, etc.)

### 3. About + Skills Section
- Brief professional bio (2-3 paragraphs)
- Profile photo/avatar placeholder
- Skills displayed as categorized cards or tags:
  - **Frontend**: JavaScript, React, HTML, CSS, TailwindCSS
  - **Backend**: Python, Flask, Django
  - **Database**: MySQL
  - **Tools**: Git, VS Code, etc.
- Skill level indicators (progress bars or badges)

### 4. Projects Showcase
- Grid layout of project cards (3 columns on desktop, 1 on mobile)
- Each card includes:
  - Project title
  - Screenshot/thumbnail placeholder
  - Short description
  - Tech stack tags
  - Links: Live Demo + Source Code (GitHub)
- Minimum 6 sample project slots
- Filter by category (All, Frontend, Backend, Full-Stack)

### 5. Experience & Education
- Timeline layout (vertical line with nodes)
- **Experience** entries: role, company, date range, bullet points
- **Education** entries: degree, institution, date range, details
- Responsive: stacks on mobile

### 6. Contact Form
- Form fields: Name, Email, Subject, Message
- Form validation (client-side)
- Submit button with loading state
- Social links repeated
- Email mailto fallback

### 7. Footer
- Copyright notice
- Quick navigation links
- Social media icons
- "Built with React & TailwindCSS" credit

## Non-Functional Requirements
- **Performance**: Lighthouse score > 90
- **Accessibility**: WCAG 2.1 AA compliance
- **Responsive**: Mobile-first design, breakpoints at sm/md/lg/xl
- **SEO**: Proper meta tags, semantic HTML
- **Theme**: Dark mode default, persisted in localStorage
