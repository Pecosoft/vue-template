ssh -i ../../taikan.pem  root@39.108.65.205 "rm -rf /pecosoft/www/taikan/mobile/tcworker/*"

scp -i ../../taikan.pem -r dist/tcworker/* root@39.108.65.205:/pecosoft/www/taikan/mobile/tcworker
