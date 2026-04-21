# Mahiru

Mahiru is a comprehensive Discord bot ecosystem designed with a focus on modularity, performance, and advanced AI interactions. The project is structured as a monorepo containing a Discord client, a high-performance backend API, and a modern web dashboard.

## Core Components

The architecture is divided into three primary applications supported by shared internal packages.

### Discord Bot

The bot serves as the primary interface, built on Discord.js and optimized for low-latency interactions. It features a sophisticated AI chatbot system that utilizes a custom Spintax engine for prompt generation. This allows for weighted behavioral variance and dynamic personality management. Beyond AI, it includes specialized handlers for content tagging and integration with external media services.

### Backend API

A centralized API server built with Hono and Node.js. It provides an OpenAPI-compliant interface that facilitates communication between the bot and the web dashboard. The backend manages authentication, user data, and system-wide configurations while providing real-time health monitoring and proxy services.

### Web Dashboard

A modern administrative interface developed with React 19 and Tailwind CSS 4. It enables users and administrators to manage bot settings, configure tags, and monitor system status through a responsive and intuitive UI. The dashboard leverages TanStack Router and Query for efficient state management and navigation.

## Key Features

The ecosystem provides several advanced functionalities that differentiate it from standard Discord integrations.

### Spintax Prompt Engine

A custom-built syntax engine that supports weighted variations and probability-based content generation. This system is used to define bot personas and automated responses, ensuring that interactions remain diverse and natural rather than repetitive.

### Enhanced Networking

Integration of a DNS-over-HTTPS resolution layer allows the bot to handle requests and media fetching with improved reliability. This sub-system is designed to bypass common network restrictions and ensure consistent service availability.

### Full-Stack Type Safety

The project maintains strict type definitions across the entire stack. Database schemas defined with Drizzle ORM are automatically propagated to the backend API and frontend clients, reducing runtime errors and improving developer productivity.

## Development Setup

The project uses pnpm and Turborepo for workspace management.

### Build and Execution

To prepare the entire workspace, execute the build command from the root directory.

```bash
pnpm build
```

For local development with hot-reloading across all applications, use the dev command.

```bash
pnpm dev
```

### Environment Configuration

Each application requires specific environment variables. Reference the .env.example files within the respective apps directories to set up local configurations for the bot, backend, and web dashboard.
