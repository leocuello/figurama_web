sudo kill -9 $(sudo netstat -tulnp | grep :3000 | awk '{print $7}' | cut -d'/' -f1)
npm run dev