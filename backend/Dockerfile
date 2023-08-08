# Use an official Node runtime as the parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Make port 8080 available to the outside world (or whichever port your backend runs on)
EXPOSE 8080

# Run the application when the container launches
CMD ["node", "src/index.js"]
