
@test1
    Feature: Select day, get 3 hourly forecast
      Scenario Outline: test
    When I open the url http://localhost:3000/
    Then I should able to select a <day>
    Then Status of hourly forecast should be hidden for "<day>"

    Examples:
      | day   |
      | 1     |
      | 2     |
      | 3     |
      | 4     |