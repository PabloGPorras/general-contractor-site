# Set the base image. Node:14 is the LTS version.
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json or yarn.lock (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local content into the container
COPY . .

# Define the API's port number (match this to your server's port)
EXPOSE 3000

# The command to run the application
CMD ["npm", "start"]
