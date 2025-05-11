FROM node:23.9.0-alpine3.21 AS node

FROM node AS base
ARG DEBUG_TOOLS=false
WORKDIR /home/node/
RUN if [ "$DEBUG_TOOLS" = "true" ]; then \
  apk update && apk add --no-cache fish=3.7.1-r0 eza=0.20.12-r0 curl=8.12.1-r1 file=5.46-r2 starship=1.20.1-r0 && fish && \
  echo 'alias ls="eza --long --icons --git --all --bytes --no-permissions --no-user --mounts --grid --group-directories-first"' >> /root/.config/fish/config.fish && \
  echo "starship init fish | source" >> /root/.config/fish/config.fish && \
  curl -L -o yazi.zip https://github.com/sxyazi/yazi/releases/download/v25.4.8/yazi-x86_64-unknown-linux-musl.zip && \
  unzip yazi.zip  && \
  mv yazi-x86_64-unknown-linux-musl/yazi /usr/local/bin/ && \
  rm yazi.zip; \
  fi
RUN npm install -g pnpm@10.10.0 turbo@2.5.2

FROM base AS builder
WORKDIR /home/node/mahiru
COPY . .
RUN turbo prune @repo/backend --docker

FROM base AS installer
WORKDIR /home/node/mahiru
COPY --from=builder /home/node/mahiru/out/json .
RUN pnpm install --frozen-lockfile
COPY --from=builder /home/node/mahiru/out/full .
RUN turbo run build && \
  mkdir storage && DATABASE_URL=file:../../storage/local.db pnpm -F @repo/db run migrate
CMD ["pnpm", "-F", "@repo/backend", "start"]




