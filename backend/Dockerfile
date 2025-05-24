FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy only package.json and lock file to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the files (after installing to cache layers properly)
COPY . .

# Expose the backend port
EXPOSE 8000

# Use node instead of nodemon for final container (optional)
CMD ["npm", "start"]
