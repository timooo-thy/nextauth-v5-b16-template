# Next.js 14 with Auth.js v5 and SQLite Template

This template demonstrates the integration of Next.js 14 with Auth.js v5, using a Turso SQLite database through the Prisma adapter. It showcases how to implement authentication on both the server and client sides, leveraging Vercel's edge functions for optimal performance and scalability. The template includes OAuth with Google and email management using Resend.

## Features

- **Next.js 14.2.1**: Utilises the latest features of Next.js for enhanced SSR, API routes, and middleware support.
- **Auth.js v5 Beta 16**: Implements robust authentication handling with the latest version of Auth.js.
- **Prisma Adapter**: Uses Prisma as the ORM for straightforward database operations with SQLite.
- **Vercel Edge Functions**: Deployed with Vercel's edge functions for fast, globally distributed server-side logic.
- **Google OAuth**: Integrates Google for OAuth to facilitate easy and secure logins.
- **Email Handling with Resend**: Manages email sending and verification processes with magic links.

## Prerequisites

- Node.js
- Vercel CLI (for deployment)
- SQLite and Turso CLI

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/timooo-thy/nextauth-template.git
   cd nextauth-template
2. Install dependencies:
   ```bash
   bun install
3. Set up SQLite in Turso CLI 
   ```bash
   turso db create turso-prisma-db
   turso db show turso-prisma-db
   turso db tokens create turso-prisma-db
4. Apply prisma migration
   ```bash
   turso db shell turso-prisma-db < ./prisma/migrations/20240414083726_init/migration.sql
5. Obtain your OAuth Google API keys and set up Resend API key and domain.
6. Create a .env file in the root of your project and update it accordingly to .env.example:
   ```bash
   AUTH_SECRET=
   AUTH_GOOGLE_ID=
   AUTH_GOOGLE_SECRET=
   AUTH_RESEND_KEY=
   TURSO_AUTH_TOKEN=
   TURSO_DATABASE_URL=
   DOMAIN_EMAIL=
7. Start the development server with:
   ```bash
   bun run dev

## Usage
The template includes basic user authentication flows:

- Sign In: Demonstrates client and server-side authentication handling.
- Sign Out: Secure user logout implementation.
- User Session Management: Utilises edge functions to manage user sessions effectively.
- Google OAuth: Provides an option for users to log in using their Google accounts.
   
## Contributing
Contributions are welcome! Please feel free to submit pull requests, create issues, or provide feedback.

   

