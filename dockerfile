FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4000

CMD ["nginx", "-g", "daemon off;"]

#Normal
# FROM node:lts-alpine

# WORKDIR /app 

# COPY . /app/

# RUN npm install -g serve@latest

# RUN npm install

# RUN npx vite build 

# ENTRYPOINT ["serve", "-s", "-l", "tcp://0.0.0.0:4000", "dist"]

