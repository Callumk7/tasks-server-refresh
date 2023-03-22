FROM node:19

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN yarn install 

# Bundle app source
COPY . .

RUN yarn build
RUN yarn run prisma generate
RUN yarn install --production

EXPOSE 8080
CMD [ "node", "dist/src/index.js" ]

