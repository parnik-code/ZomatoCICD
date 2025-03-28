# Use the official Nginx image as base
FROM nginx:alpine

# Copy the static website files to Nginx's default serving directory
COPY . /usr/share/nginx/html/

# Copy custom Nginx configuration if needed


# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
