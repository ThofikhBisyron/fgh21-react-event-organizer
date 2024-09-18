FROM node:lts-alpine

WORKDIR /app 

COPY . /app/

RUN npm install -p serve@latest

RUN npm install

# ENTRYPOINT cd dist $$ serve -l tcp://0.0.0.0

ENTRYPOINT npm run dev  -- --host 0.0.0.0

# FROM node:lts-alpine

# WORKDIR /app 

# COPY . /app/

# RUN npm install -g serve@latest

# RUN npx vite build 

# ENTRYPOINT cd dist $$ serve -l tcp://0.0.0.0:3000