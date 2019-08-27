
Feature: Daily forecast should summarise the 3 hour data:

  Most dominant (or current) condition
  Most dominant (or current) wind speed and direction
  Aggregate rainfall
  Minimum and maximum temperatures

  @weather
  Scenario Outline: Weather app test
    When I open the url http://localhost:3000/
    Then I should able to select a <day>
    Then user should see 3hourly forcast for that "<day>"

    Examples:
      | day|
      | 1 |
      | 2 |
      | 3 |
      | 4 |