FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install -g serve && npm install
EXPOSE 3000
CMD ["serve", "-s", "public"]
