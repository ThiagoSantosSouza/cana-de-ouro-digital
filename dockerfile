FROM ubuntu:24.04

# Install basic dependencies (curl is often needed for setup scripts, but here we just need node/npm/nginx)
# Using standard ubuntu repos for nodejs might get an older version, but user requested ubuntu.
# For better valid versions we might want to curl setup_20.x, but let's stick to simple apt for now unless specified.
RUN apt-get update && apt-get install -y nodejs npm && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source
COPY . .

EXPOSE 5174

# Start Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
