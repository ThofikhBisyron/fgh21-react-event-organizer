FROM node:lts-alpine

WORKDIR /app 

COPY . /app/

RUN npm install -g serve@latest

RUN npm install

RUN npx vite build 

ENTRYPOINT cd dist && serve -l tcp://0.0.0.0:4000
# ENTRYPOINT cd dist $$ serve -l tcp://0.0.0.0

# ENTRYPOINT npm run dev  -- --host 0.0.0.0

# FROM node:lts-alpine

# WORKDIR /app 

# COPY . /app/

# RUN npm install -g serve@latest
