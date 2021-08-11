FROM node:14-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package*.json ./
RUN yarn install
ENV NODE_ENV=production
COPY . .
EXPOSE 8081
RUN yarn build
RUN yarn global add serve
CMD ["serve", "-s", "build", "-p", "8081"]