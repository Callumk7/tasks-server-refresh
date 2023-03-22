FROM node:19-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install 

# Bundle app source
COPY . .

# Build app
RUN yarn run prisma generate
RUN yarn build
RUN yarn install --production

EXPOSE 8080
CMD [ "node", "dist/index.js" ]

