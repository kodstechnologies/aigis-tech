AIGIS WEBSITE — AWS/UBUNTU INSTALLATION
========================================

This package already contains the complete production website, including all
logos, images, videos and server files. Do not run npm install or rebuild it.

QUICK TEST (no nginx needed):
   cd /var/www/aigis-site && sudo PORT=80 node start.mjs
   Then open http://YOUR-SERVER-IP/ - every page, image and video will load.

1. Upload this ZIP from your computer:
   scp aigis-aws-v8.zip ubuntu@43.204.16.169:/tmp/

2. Connect to the server:
   ssh ubuntu@43.204.16.169

3. Install Node.js 22 and PM2 if they are not already installed:
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
   sudo apt-get install -y nodejs nginx unzip
   sudo npm install -g pm2

4. Replace the previous website:
   sudo rm -rf /var/www/aigis-site
   sudo unzip -q /tmp/aigis-aws-v8.zip -d /var/www
   sudo chown -R ubuntu:www-data /var/www/aigis-site
   sudo chmod -R o+rX /var/www/aigis-site/public

5. Start or replace the AIGIS server:
   pm2 delete aigis-site 2>/dev/null || true
   cd /var/www/aigis-site
   PORT=3000 HOST=0.0.0.0 pm2 start start.mjs --name aigis-site
   pm2 save
   sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu
   (Run the command printed by PM2 if it asks you to.)

6. Install the included nginx settings:
   sudo cp /var/www/aigis-site/nginx-aigis.conf /etc/nginx/sites-available/aigis
   sudo ln -sfn /etc/nginx/sites-available/aigis /etc/nginx/sites-enabled/aigis
   sudo rm -f /etc/nginx/sites-enabled/default
   sudo nginx -t && sudo systemctl reload nginx

7. Allow web traffic if UFW is active:
   sudo ufw allow 'Nginx Full'

8. Open:
   http://43.204.16.169/

Checks:
   curl -I http://127.0.0.1:3000/
   curl -I http://43.204.16.169/favicon.png

If nginx returns 403 for media:
   sudo chmod -R o+rX /var/www/aigis-site/public
   sudo systemctl reload nginx
