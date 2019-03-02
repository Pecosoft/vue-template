ssh -i ../../taikan.pem  root@39.108.65.205 "rm -rf /pecosoft/www/taikan/mobile/dsclerk/*"

scp -i ../../taikan.pem -r dist/dsclerk/* root@39.108.65.205:/pecosoft/www/taikan/mobile/dsclerk
