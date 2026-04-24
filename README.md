# Mahiru

Mahiru is a fun and silly Discord bot inspired by the character Mahiru from [The Angel Next Door Spoils Me Rotten](https://en.wikipedia.org/wiki/The_Angel_Next_Door_Spoils_Me_Rotten). Its primary purpose is to bring joy and entertainment to your Discord server through AI interactions and features.

## Core Components

Mahiru has three main parts:

### Discord Bot

This is the bot itself that you interact with in your Discord server.

### Web Dashboard

You can access this interface by using a command from the bot to log in and configure settings.

### Backend HTTP Server

This server handles communication between the Discord bot and the web dashboard frontend.

## Key Features

Mahiru includes these features:

### AI Chatbot

You can configure the AI model, personality, and behavior prompt to customize how Mahiru interacts in your server.

### Tag System

Use the `/tag` command to store text, links, images, or other content. You can preview all your tags on the web dashboard with rich embeds functionality.

## Tech Stack

### Discord Bot

- **[Discord.js](https://discord.js.org/)**: For connecting to Discord and handling interactions.

### Backend HTTP Server

- **[Hono](https://hono.dev/)**: A lightweight web framework for building the API.
- **[Node.js](https://nodejs.org/)**: The JavaScript runtime that powers the server.

### Web Dashboard

- **[React 19](https://react.dev/)**: For building a dynamic and responsive user interface.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: For styling the dashboard with utility-first classes.
- **[TanStack Router](https://tanstack.com/router)**: A fully type-safe router with built-in data fetching and nested layout support.
- **[shadcn/ui](https://ui.shadcn.com/)**: Reusable components built using Base UI and Tailwind CSS that are easy to customize.
