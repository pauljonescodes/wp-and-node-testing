# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Set the start command for the container
CMD [ "npm", "start" ]