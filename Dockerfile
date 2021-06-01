FROM node
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY public /usr/src/app/public
COPY app.js /usr/src/app
EXPOSE 3000
CMD [ "npm","start" ]
