FROM node
WORKDIR /code
RUN npm set prefix /usr/local && npm install -g nodemon
COPY package.json /code/package.json
RUN npm set prefix /usr/local && npm install && npm ls
RUN mv /code/node_modules /node_modules
COPY . /code
#EXPOSE 3000  # expose but no publish, except useing docker -P
CMD ["npm", "start"]
