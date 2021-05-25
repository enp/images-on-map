FROM node
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY app.js /usr/src/app
RUN npm install
EXPOSE 3000
CMD [ "npm","start" ]
