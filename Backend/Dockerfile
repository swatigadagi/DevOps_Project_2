FROM public.ecr.aws/docker/library/node:20
WORKDIR /usr/src/app
RUN apt-get update && \
    apt-get install -y libreoffice ffmpeg curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
RUN curl -o /usr/src/app/global-bundle.pem https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem
COPY package*.json ./
RUN npm install
RUN npm install pg
COPY . .
RUN npm test
EXPOSE 8080
CMD ["npm", "start"]
