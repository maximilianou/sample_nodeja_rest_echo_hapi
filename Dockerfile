FROM node
WORKDIR /code
RUN npm set prefix /usr/local && npm install -g nodemon
COPY package.json /code/package.json
RUN npm set prefix /usr/local && npm install && npm ls
RUN mv /code/node_modules /node_modules
COPY . /code
CMD ["npm", "start"]
