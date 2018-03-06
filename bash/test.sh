#! bin/bash

kill $( lsof -i:8545 -t ) > /dev/null

# remove truffle cache
rm ../build -rf

ganache-cli -a 100 -s "DC Blockchain swagger" > /dev/null & 

truffle test

kill $( lsof -i:8545 -t ) > /dev/null