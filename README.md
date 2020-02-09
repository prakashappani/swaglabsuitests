# swaglabsuitests
## Setup Instructions

## Download and install node
### Download & install Node  https://nodejs.org/en/download/  (install Node v8.11.3)

## Install Grunt Cli
###	npm install -g grunt-cli
###	npm config set strict-ssl false

## Clone the repository
###  git clone "https://github.com/prakashappani/swaglabsuitests.git"
###	cd swaglabsuitests

## Install node modules 
###	npm install

## Run the Test Suite
###	grunt --conf=-<feature.filename> --suite=Regression -suite=<Suite Name>
###	grunt --conf=./TestModule_SWAGLABS/Conf/protractor.conf.js --suite=Regression
