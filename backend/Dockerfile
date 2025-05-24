# Use a smaller base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the full source code
COPY . .

# Expose the port
EXPOSE 8000

# Default command (override in docker-compose if needed)
CMD ["npm", "start"]
