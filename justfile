default:
    @just --choose

docker-build-backend:
    docker build -t youyoumu2025/mahiru-backend:latest -f apps/backend/Dockerfile .

docker-interactive-backend:
    docker run --env-file ./apps/backend/.env -it youyoumu2025/mahiru-backend:latest bash

docker-push-backend:
    docker push youyoumu2025/mahiru-backend:latest

docker-build-bot:
    docker build -t youyoumu2025/mahiru-bot:latest -f apps/bot/Dockerfile .

docker-interactive-bot:
    docker run --env-file ./apps/bot/.env -it youyoumu2025/mahiru-bot:latest bash

docker-push-bot:
    docker push youyoumu2025/mahiru-bot:latest
