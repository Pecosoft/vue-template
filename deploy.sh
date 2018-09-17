ssh -i ~/docker-ci-server.pem  root@120.77.224.152 "rm -rf /pecosoft/www/taikan-mobile/*"

scp -i ~/docker-ci-server.pem -r dist/* root@120.77.224.152:/pecosoft/www/taikan-mobile
