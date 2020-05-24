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


## Updating latest version of Chrome Driver 
Locate ./package.json file
Update "chromedriver:" version to your chrome version 
Note: You will see the following error if the driver version mismatches
"This version of ChromeDriver only supports Chrome version"
```	
"dependencies": {
	"chromedriver": "^83.0",
	"grunt-cli": "^1.2.0"
}```

## Install node modules 
```	
npm install
```

## Run the Test Suite
```
grunt --conf=./TestModule_SWAGLABS/Conf/protractor.conf.js --suite=Regression
```

## Sample code to read data as Example
### Steps under Scenario Outline will be executed for each line in the Examples

### Feature File
```
  Scenario Outline: Verify user is able to add  ONE items to the cart using Examples
    Given I'm on the Inventory container
    When I Add the <Item1> to the cart
    And I click on the shopping cart button
    Then I should be able to see the items <Item1>  in the cart
    And I click on continue shopping button
    Examples:
      | Item1             |
      | Sauce Labs Onesie |
```      
### Step Definition
    this.Then(/^I should be able to see the items (.*) in the cart$/, function (item1, callback) {
        var list = element.all(by.css('.inventory_item_name'));
        list.get(0).getText().then(function (text) {
            expect(text).to.equal(item1.trim());
            callback();
        });
    });

    ```

## Sample code to read test data from Data Table

### Feature File
```
     Then I should verify "All Products" are in the shopping cart
      | Products                 |
      | Sauce Labs Onesie        |
      | Sauce Labs Bike Light    |
      | Sauce Labs Fleece Jacket |
      
```      
### Step Definition
        this.Then(/^I should verify "All Products" are in the shopping cart$/, function (table, callback) {
        var list = element.all(by.css('.inventory_item_name'));
        for (let i = 0; i < table.hashes().length; i++) {
            let exp = table.rows()[i].toString()
            list.get(i).getText().then(function (text) {
                expect(text).to.equal(exp);
            });
        }
        callback();
    });
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
### Step Definition
```  
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
 
        this.getCsvFormatData = function (fileName) {
        const filePath = './' + fileName;
        let fileContent;
        return new Promise(resolve => {
            fileContent = fs.readFileSync(filePath, {encoding: 'utf8'});
            resolve(fileContent.split(/\r?\n/g));
        })
    };
```

## Sample code to use @tags in Examples: of Scenario Outline

### Feature File
```
    Scenario Outline: Verify user able to read from a csv file

    Given I load the url
    When I enter <username> <password> login page
    @positive
        Examples:
        |username       |password     |
        |standard_user  |secret_sauce |
        @nagative
        Examples:
        |username               |password     |
        |locked_out_user        |secret_sauce |
        |problem_user           |secret_sauce |
```      
### Step Definition
```  
        this.When(/^I enter (.*) (.*) login page$/, function (username, password, callback) {
            console.log("On the login page");
            helper.clearWebElement(loginPage.userId());
            helper.setDisplayValue(loginPage.userId(), username);
            helper.clearWebElement(loginPage.passWd());
            helper.setDisplayValue(loginPage.passWd(), password);
            loginPage.signInButton().click().then(function () {
                browser.sleep(1000).then(function () {
                    callback();
                });
            });
        });
```

```
© 2020 GitHub, Inc.
