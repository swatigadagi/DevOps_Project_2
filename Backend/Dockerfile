FROM public.ecr.aws/docker/library/node:20

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install -y libreoffice ffmpeg && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY package*.json ./

RUN npm install

COPY . .

RUN npm test

EXPOSE 8080

CMD ["npm", "start"]
