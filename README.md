# swaglabsuitests
## Setup Instructions to run Protractor UI Tests using Chrome

## Download and install node
### Download & install Node  https://nodejs.org/en/download/  (install Node v8.11.3)

## Install Grunt Cli
```		
npm install -g grunt-cli
npm config set strict-ssl false
```	

## Clone the repository
```	
git clone "https://github.com/prakashappani/swaglabsuitests.git"
cd swaglabsuitests
```	

## Install node modules 
```	
npm install
```

## Run the Test Suite
```
grunt --conf=feature.filename --suite=Suite Name
grunt --conf=./TestModule_SWAGLABS/Conf/protractor.conf.js --suite=Regression
```

## Sample code to read test data from CSV file

### Feature File
```
    Scenario Outline: Verify user able to read from a csv file

    Given I load the url
    And I read from a <csv_file> file
    Examples:
      | csv_file                                     |
      | TestModule_SWAGLABS/envData/user_details.csv |
      
```      
### Step Defination
    this.Given(/^I read from a (.*) file$/, function (csvFile, callback) {
        helper.getCsvFormatData(csvFile).then(function (dataTable) {
            for (let i = 1; i < dataTable.length; i++) {
                const line = dataTable[i].split(',');
                helper.clearWebElement(loginPage.userId());
                helper.setDisplayValue(loginPage.userId(), line[0]);
                helper.clearWebElement(loginPage.passWd());
                helper.setDisplayValue(loginPage.passWd(), line[1]);
                loginPage.signInButton().click().then(function () {
                    browser.sleep(2000).then(function () {
                        callback();
                    });
                });
            }
        });
    });
    ```
### Helper Method in Page Objects 

```   
        this.getCsvFormatData = function (fileName) {
        const filePath = './' + fileName;
        let fileContent;
        return new Promise(resolve => {
            fileContent = fs.readFileSync(filePath, {encoding: 'utf8'});
            resolve(fileContent.split(/\r?\n/g));
        })
    };
```
© 2020 GitHub, Inc.
