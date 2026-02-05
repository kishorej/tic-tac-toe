# Simple Dockerfile for tic-tac-toe
FROM node:18-alpine

WORKDIR /app

# Install only production dependencies for the final image
COPY package*.json ./
RUN npm ci --production

# Copy app source
COPY . .

EXPOSE 3000
ENV NODE_ENV=production

CMD ["node", "server.js"]
