@TestForecast
Feature: As a whetherForecast service provider, I should be able to fetch the whether details from the application successfully

  @Test1
  Scenario Outline: Verify the whetherForecast Application whether use can able to lunch the application or not
    When I open the url http://localhost:3000/
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the <cityName> for whetherforecast


    Examples:
        | cityName  |
        | aberdeen  |
        | dundee    |
        | edinburgh |
        | glasgow   |
        | perth     |
        | stirling  |

@test2
  Scenario Outline: Verify that user can able to expand the forecast data and the user is getting forecast after every 3 hours.
    When I open the url http://localhost:3000/
  Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the stirling for whetherforecast
    Then I should able to select a <day>
    Then user should see Three hourly forcast for that "<day>"

    Examples:
      | day   |
      | 1     |
      | 2     |
      | 3     |
      | 4     |

@test3

    Scenario Outline: Verify that user can able to collapse the forecast data.
    When I open the url http://localhost:3000/
      Then I should be able to launch the application with header "Five Day Weather Forecast for"
      When I enter the edinburgh for whetherforecast
    Then I should able to select a <day>
    Then Status of hourly forecast should be hidden for "<day>"

    Examples:
      | day   |
      | 1     |
      | 2     |
      | 3     |
      | 4     |


@test4
#  Most dominant (or current) condition
#  Most dominant (or current) wind speed and direction
#  Aggregate rainfall
#  Minimum and maximum temperatures

  Scenario Outline: Weather app test
     When I open the url http://localhost:3000/
     Then I should be able to launch the application with header "Five Day Weather Forecast for"
     When I enter the perth for whetherforecast
     Then I should able to select a <day>
     Then user should see 3hourly forcast for that "<day>"

    Examples:
      | day|
      | 1 |
      | 2 |
      | 3 |
      | 4 |