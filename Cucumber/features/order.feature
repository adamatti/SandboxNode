Feature: Order Processing
  Scenario Outline: Submit an order
    Given an order - id: <id>
    When I submit it - region: <region>
    Then I receive a response - msg: <msg>
  Examples:
    | id     | region | msg              |
    | submit | US     | Order is ok      |
    | cancel | US     | Unable to cancel |