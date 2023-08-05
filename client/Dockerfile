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

# Build the React application
RUN npm run build

# Use a multi-stage build to serve the React app using an nginx server
FROM nginx:alpine

COPY --from=0 /usr/src/app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
