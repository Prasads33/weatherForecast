
@testprasad
Feature: Select day, get 3 hourly forecast
  Scenario Outline: test
    When I open the url <URL>
    Then I should able to select a <day>
    Then user should see Three hourly forcast for that "<day>"

    Examples:
      | day   |URL|
      | 1     |http://localhost:3000/|
      | 2     |http://localhost:3000/|
      | 3     |http://localhost:3000/|
      | 4     |http://localhost:3000/|