# Use the Node.js LTS image as a base
FROM node:lts

# Set working directory to /src
WORKDIR /usr/src/app

#Copy the package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source
COPY . .


# Expose port to outside world
EXPOSE 3000

# Start command as per the package.json file
CMD ["npm", "start"]

