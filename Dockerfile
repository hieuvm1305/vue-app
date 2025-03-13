
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

# build image: docker buildx build -t vue-app
# docker run -d -p 4173:4173 vue-app

