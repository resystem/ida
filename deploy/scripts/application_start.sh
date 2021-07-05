
cd /home/ubuntu/ida-accounts/
npm install


cp -r /home/ubuntu/ida-accounts/dist/apps/accounts /usr/share/nginx/ida-accounts/
sudo /etc/init.d/nginx reload