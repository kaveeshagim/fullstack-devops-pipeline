# Use an offical Node image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# App listens on port 3000
EXPOSE 3000

# Run the app 
CMD ["npm", "start"]