# Use the official Node.js 14 Alpine image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the index.js and index.html files to the working directory
COPY index.js index.html ./

# Expose port 3000 for the Node.js application
EXPOSE 3000

# Start the Node.js application
CMD [ "npm", "start" ]
