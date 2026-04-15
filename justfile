default:
    @just --choose

docker-build-backend:
    docker build -t youyoumu2025/mahiru-backend:latest -f apps/backend/Dockerfile .

docker-interactive-backend:
    docker run -it --rm --env-file ./apps/backend/.env \
    -v $(pwd)/.root/nix:/nix \
    -v $(pwd)/.root/home/node:/home/node \
    youyoumu2025/mahiru-backend:latest bash

docker-push-backend:
    docker push youyoumu2025/mahiru-backend:latest

docker-build-bot:
    docker build -t youyoumu2025/mahiru-bot:latest -f apps/bot/Dockerfile .

docker-interactive-bot:
    docker run -it --rm --env-file ./apps/bot/.env \
    -v $(pwd)/.root/nix:/nix \
    -v $(pwd)/.root/home/node:/home/node \
    youyoumu2025/mahiru-bot:latest bash

docker-push-bot:
    docker push youyoumu2025/mahiru-bot:latest
