FROM ubuntu:24.04

# Install basic dependencies (curl is often needed for setup scripts, but here we just need node/npm/nginx)
# Using standard ubuntu repos for nodejs might get an older version, but user requested ubuntu.
# For better valid versions we might want to curl setup_20.x, but let's stick to simple apt for now unless specified.
RUN apt-get update && apt-get install -y nodejs npm nginx && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source
COPY . .

# Build the app
RUN npm run build

# Setup Nginx
# Remove default nginx static assets
RUN rm -rf /var/www/html/*

# Copy built assets from 'dist' (Vite default) to Nginx public dir
RUN cp -r dist/* /var/www/html/

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/sites-available/default

EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
