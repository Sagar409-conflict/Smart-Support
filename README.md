# SmartSupport

AI-powered support ticket search platform.

## Tech Stack

- Node.js / TypeScript
- Express
- PostgreSQL — main application database
- MySQL — legacy order database
- MongoDB — conversations / events
- RabbitMQ — message broker
- Qdrant — vector database (AI/embedding search)
- React (planned frontend)

## Project Structure

```
smart-support/
├── src/
│   ├── app.ts                     # Express app entry point
│   ├── infrastructure/
│   │   └── postgres/
│   │       ├── database.ts        # PostgreSQL pool
│   │       └── health.ts          # PostgreSQL health check
│   ├── middleware/                # Express middleware (planned)
│   ├── modules/                   # Feature modules (planned)
│   └── workers/                   # Background workers (planned)
├── tests/                         # Test suite (planned)
├── docs/                          # Project documentation
├── docker-compose.yml             # Local infra: Postgres, MySQL, MongoDB, RabbitMQ, Qdrant
├── .env.example                   # Environment variable template
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- Docker Desktop

### Setup

1. Clone the repo and install dependencies:
   ```
   npm install
   ```
2. Copy the environment template and fill in values:
   ```
   cp .env.example .env
   ```
3. Start local infrastructure:
   ```
   docker compose up -d
   ```
4. Run the dev server:
   ```
   npm run dev
   ```
5. Verify:
   ```
   curl localhost:3000/health
   curl localhost:3000/health/db
   ```

### Build for production

```
npm run build
npm start
```

## Services (docker-compose)

| Service  | Purpose              | Port(s)          |
|----------|-----------------------|-------------------|
| postgres | Main app database      | 5432              |
| mysql    | Legacy order database  | 3306              |
| mongodb  | Conversations/events   | 27017             |
| rabbitmq | Message broker         | 5672, 15672 (UI)  |
| qdrant   | Vector search           | 6333, 6334        |

## Roadmap

- [ ] Ticket ingestion + storage (Postgres)
- [ ] Legacy order lookup integration (MySQL)
- [ ] Conversation/event logging (MongoDB)
- [ ] Async processing via RabbitMQ workers
- [ ] Embedding-based semantic ticket search (Qdrant)
- [ ] React frontend
- [ ] Auth + API layer
- [ ] Test suite

## Status

🚧 Under Development — infrastructure scaffolding in place, core features not yet implemented.
