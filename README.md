# Mahiru

![API Status](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fmahiru-be.youyoumu.my.id%2Fhealth&query=%24.status&label=API%20Status&color=brightgreen)
![Docker Image Size](https://img.shields.io/docker/image-size/youyoumu2025/mahiru-bot?logo=docker)
![License](https://img.shields.io/github/license/youyoumu/kiku)
![GitHub top language](https://img.shields.io/github/languages/top/youyoumu/kiku)



<div align="center">
<br/>
<img width="230" height="345" alt="image" src="https://github.com/user-attachments/assets/e6153d0d-5605-482e-9420-d809c739ddd0" />
<br/>

<p>
Mahiru is a fun and silly Discord bot inspired by the character Shiina Mahiru from
<a href="https://en.wikipedia.org/wiki/The_Angel_Next_Door_Spoils_Me_Rotten">
The Angel Next Door Spoils Me Rotten </a>.
Its primary purpose is to bring joy and entertainment to your Discord server through AI interactions and features.
</p>
</div>

<hr/>

## Core Components

Mahiru has three main parts:

### Discord Bot

This is the bot itself that you interact with in your Discord server.

<div align="center">
<img width="1260" height="859" alt="image" src="https://github.com/user-attachments/assets/8590731a-030a-4f22-bcc7-5ecfddc0f72f" />
</div>

### [Web Dashboard](https://mahiru.youyoumu.my.id/)

You can access this interface by using a command from the bot to log in and configure settings.

<div align="center">
<img width="1431" height="973" alt="image" src="https://github.com/user-attachments/assets/04e8c214-f466-44a8-8491-8876a0133ae3" />
  <br>
<img width="1430" height="977" alt="image" src="https://github.com/user-attachments/assets/045b129f-127b-4585-8e0a-4ef86da00c6e" />

</div>

### [Backend HTTP Server](https://mahiru-be.youyoumu.my.id/docs)

This server handles communication between the Discord bot and the web dashboard frontend.

<div align="center">
<img width="1430" height="977" alt="image" src="https://github.com/user-attachments/assets/77bf87c7-fe88-4f5d-adf0-bb186bdeb484" />
</div>

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
