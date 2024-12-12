# Use Node.js LTS image to build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Build the application for production
RUN npm run build

# Use Node.js LTS image for production
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app ./

# Expose the application on port 3000
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "run", "start"]
