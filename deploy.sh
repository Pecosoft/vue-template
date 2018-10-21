ssh -i ~/docker-ci-server.pem  root@120.77.224.152 "rm -rf /pecosoft/www/taikan-mobile/tcworker/*"

scp -i ~/docker-ci-server.pem -r dist/tcworker/* root@120.77.224.152:/pecosoft/www/taikan-mobile/tcworker
