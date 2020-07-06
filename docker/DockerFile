#simple docker file
# assumes located in the same folder as the application itself

# start with node  base image
FROM node:13.11.0

#Install git
RUN apt-get update && \
    apt-get install -y git

# Create an app directory (in the Docker container)
RUN mkdir -p /usr/apps/react-leaflet-project
RUN git clone https://github.com/saberair/react-leaflet-project.git /usr/apps/react-leaflet-project/

WORKDIR /usr/apps/react-leaflet-project

# install dependencies
RUN yarn install

# expose it from Docker container
EXPOSE 3000

# Finally start the container command
CMD ["yarn", "start"]