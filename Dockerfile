FROM node:22-bullseye-slim

WORKDIR /app

# Copy root dependency manifests
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy coderescue dependency manifests
COPY coderescue/package*.json ./coderescue/
RUN cd coderescue && npm install

# Copy complete project source
COPY . .

# Build all client distributions (Admin portal, Code Rescue arena, 3D Workstation)
RUN npm run build

ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

CMD ["node", "server/index.js"]
