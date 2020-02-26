Feature: Automation of SWAG LABS

  Scenario: Verify user is able to login
    Given I load the url
    When I enter valid credentials
    Then I should see the Inventory container

  Scenario Outline: Verify user is able to add  ONE items to the cart using Examples
    Given I'm on the Inventory container
    When I Add the <Item1> to the cart
    And I click on the shopping cart button
    Then I should be able to see the items <Item1>  in the cart
    And I click on continue shopping button
    Examples:
      | Item1             |
      | Sauce Labs Onesie |

  Scenario: Verify user is able to add multiple items to the cart using Data Table
    Given I'm on the Inventory container
    And I add "More Products" to the shopping cart
      | Products                 |
      | Sauce Labs Bike Light    |
      | Sauce Labs Fleece Jacket |
    And I click on the shopping cart button
    Then I should verify "All Products" are in the shopping cart
      | Products                 |
      | Sauce Labs Onesie        |
      | Sauce Labs Bike Light    |
      | Sauce Labs Fleece Jacket |

  Scenario: Verify User is able to Logout from the application
    Given I'm on the Inventory container
    When I logout from the application
    Then I should go back to the login page
