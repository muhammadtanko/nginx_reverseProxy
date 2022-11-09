FROM node:latest
LABEL author="muhammad"
WORKDIR /app
COPY package.json .
RUN ["npm","install"]
COPY /src ./src
EXPOSE 3000
RUN ["npm","start"]