
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 4173

CMD [ "sh", "-c", "npm run preview" ]