# Linux x64
FROM alpine

# Install Node and NPM
RUN apk add --update nodejs npm 

# Copy app to /src
COPY . /src
WORKDIR /src

# Install dependencies
RUN  npm install express axios

EXPOSE 5000

# In terminal
# node areacircle.js &
