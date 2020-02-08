Feature: UIAssessment

  Scenario: Verify user is able to login
    Given I load the url
    When I enter valid credentials
    Then I should see the Inventory container

  Scenario Outline: Verify user is able to add items to the cart
    Given I'm on the Inventory container
    When I Add the <Item1> to the cart
    And I Add the <Item2> to the cart
    And I click on the shopping cart button
    Then I should be able to see the items <Item1> and <Item2> in the cart
    Examples:
      | Item1             | Item2                 |
      | Sauce Labs Onesie | Sauce Labs Bike Light |

  Scenario: Verify AllSites User is able to Logout from the application
    Given I'm on the Inventory container
    When I logout from the application
    Then I should go back to the login page