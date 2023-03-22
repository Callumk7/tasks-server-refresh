FROM node:16

# Create app directory
WORKDIR /src/app

# Install app dependencies
COPY package*.json ./
RUN yarn install 

# Bundle app source
COPY . .

RUN yarn build
RUN yarn install --production

EXPOSE 8080
CMD [ "node", "dist/index.js" ]

