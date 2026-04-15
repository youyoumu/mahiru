FROM node:24-trixie-slim AS node

FROM node AS base
RUN npm install -g pnpm@10.33.0 turbo@2.9.6

FROM base AS builder
USER node
WORKDIR /home/node/mahiru
COPY . .
RUN turbo prune @repo/backend --docker

FROM base AS installer
USER node
WORKDIR /home/node/mahiru
COPY --from=builder /home/node/mahiru/out/json .
RUN pnpm install --frozen-lockfile
COPY --from=builder /home/node/mahiru/out/full .
RUN turbo run build
CMD ["sh", "-c", "mkdir -p storage && DATABASE_URL=file:../../storage/local.db pnpm -F @repo/db run migrate && pnpm -F @repo/backend start"]
