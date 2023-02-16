# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the source code to /app/src
COPY src ./src

# Copy the public directory to /app/public
COPY public ./public

# Build the app
RUN npm run build

# Start the server
CMD ["npm", "start"]