FROM node:20-slim

WORKDIR /app

# Instalar dependencias necesarias
RUN apt-get update && \
    apt-get install -y postgresql-client && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copiar el package.json y el package-lock.json desde el directorio raíz
COPY ./package.json ./package-lock.json ./

# Copiar el esquema de Prisma desde el directorio raíz
COPY ./prisma ./prisma

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

RUN npm install

COPY . .

CMD sh -c 'sleep 2 && npx prisma generate && npx prisma db pull && npm run dev'