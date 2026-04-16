# hadolint global ignore=DL3008
FROM node:24-trixie-slim AS node-builder
FROM node:lts-alpine AS node-runner

FROM node-builder AS base
RUN apt-get update && \
  apt-get install -y --no-install-recommends \ 
  curl ca-certificates xz-utils sudo && \
  rm -rf /var/lib/apt/lists/* && \
  mkdir -m 0755 /nix && chown node /nix && \
  mkdir -m 0755 /apps && chown node /apps
ENV USER=node
ENV DOCKER=true
RUN npm install -g pnpm@10.33.0 turbo@2.9.6

FROM base AS builder
USER node
WORKDIR /apps/mahiru
COPY . .
RUN turbo prune bot --docker

FROM base AS installer
USER node
WORKDIR /apps/mahiru
COPY --from=builder /apps/mahiru/out/json .
RUN --mount=type=cache,id=pnpm,mode=0755,uid=1000,gid=1000,target=/apps/mahiru/.pnpm-store \
  pnpm config set store-dir /apps/mahiru/.pnpm-store && \
  pnpm install --frozen-lockfile
COPY --from=builder /apps/mahiru/out/full .
RUN turbo run build

# FROM node-builder AS runner
FROM node-runner AS runner
USER node
ENV USER=node
ENV DOCKER=true
WORKDIR /apps/mahiru
COPY --from=installer /apps/mahiru/package.json /apps/mahiru/pnpm-workspace.yaml /apps/mahiru/
COPY --from=installer /apps/mahiru/packages/db/package.json /apps/mahiru/packages/db/
COPY --from=installer /apps/mahiru/packages/db/dist /apps/mahiru/packages/db/dist/
COPY --from=installer /apps/mahiru/apps/bot/package.json /apps/mahiru/apps/bot/
COPY --from=installer /apps/mahiru/apps/bot/dist /apps/mahiru/apps/bot/dist/
RUN mkdir -p storage
ENV DRIZZLE_DIR=/apps/mahiru/packages/db/dist/drizzle
CMD ["sh", "-c", "npm run deploy-commands -w bot && npm run start -w bot"]
