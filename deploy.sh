ssh -i ~/docker-ci-server.pem  root@120.77.224.152 "rm -rf /pecosoft/www/taikan-mobile/manager/*"

scp -i ~/docker-ci-server.pem -r dist/manager/* root@120.77.224.152:/pecosoft/www/taikan-mobile/manager
