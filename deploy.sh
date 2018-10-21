ssh -i ~/docker-ci-server.pem  root@120.77.224.152 "rm -rf /pecosoft/www/taikan-mobile/customer/*"

scp -i ~/docker-ci-server.pem -r dist/customer/* root@120.77.224.152:/pecosoft/www/taikan-mobile/customer
