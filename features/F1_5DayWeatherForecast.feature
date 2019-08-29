@TestForecast
Feature: As a whetherForecast service provider, I should be able to fetch the whether details from the application successfully

  @BasicScenario
  Scenario Outline: Verify the whetherForecast Application whether user can able to lunch the application for mentioned city
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


    @NagativeScenario
  Scenario Outline: Verify the whetherForecast Applicif user enter incorrect city name then user should get error message
      When I open the url http://localhost:3000/
      When I enter the <cityName> for whetherforecast
      Then I should be able to launch the application with header1 "Error retrieving the forecast"

      Examples:
        | cityName  |
        | delhi     |

  @AfterEvery3Hours
  Scenario Outline: Verify that user can able to expand the forecast data and the user is getting forecast after every 3 hours.
    When I open the url http://localhost:3000/
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the stirling for whetherforecast
    Then I should able to select <day>
    Then User should able to expand the data and get after every three hourly forecast data"<day>"

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

  @HiddenForecastData
  Scenario Outline: Verify that user can able to hidden the forecast data.
    When I open the url http://localhost:3000/
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the edinburgh for whetherforecast
    Then I should able to select <day>
    Then User should be able to hidden forecast data "<day>"

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |


  @MaxTemp
  Scenario Outline: Verify that user can able to get correct MaxTemp the forecast data.
    When I open the url http://localhost:3000/
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the <cityName> for whetherforecast
    Then I should able to get maximum temp for <cityName> among <day> days

    Examples:
      | day |cityName|
      | 5   |aberdeen|
      | 5   |dundee|
      | 5   |edinburgh|
      | 5   |glasgow|
      | 5   |perth|


  @MinTemp
  Scenario Outline: Verify that user can able to get correct MinTemp the forecast data.
    When I open the url http://localhost:3000/
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the <cityName> for whetherforecast
    Then I should able to get minimum temp for <cityName> among <day> days

    Examples:
      | day |cityName|
      | 5   |aberdeen|
      | 5   |dundee|
      | 5   |edinburgh|
      | 5   |glasgow|
      | 5   |perth|

  @Rainfall
  Scenario Outline: Verify that user can able to get correct agg of rainfall for forecast data.
    When I open the url http://localhost:3000/
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the <cityName> for whetherforecast
    Then I should able to get agg of rainfall for <cityName> among <day> days

    Examples:
      | day |cityName|
      | 5   |aberdeen|
      | 5   |dundee|
      | 5   |edinburgh|
      | 5   |glasgow|
      | 5   |perth|


  @windCon
  Scenario Outline: Verify that user can able to get correct most dominant wind conditions for forecast data.
    When I open the url http://localhost:3000/
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the <cityName> for whetherforecast
    Then I should able to get most dominant wind conditions for <cityName> among <day> days


    Examples:
      | day |cityName|
      | 5   |aberdeen|
      | 5   |dundee|
      | 5   |edinburgh|
      | 5   |glasgow|
      | 5   |perth|


  @weather
  Scenario Outline: Verify that user can able to get correct most dominant conditions for forecast data.
    When I open the url http://localhost:3000/
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the <cityName> for whetherforecast
    Then I should able to get most dominant weather conditions for <cityName> among <day> days

    Examples:
      | day |cityName|
      | 5   |Aberdeen|
      | 5   |Dundee|
      | 5   |Edinburgh|
      | 5   |Glasgow|
      | 5   |Perth|

#@test4
  #  Most dominant (or current) condition
  #  Most dominant (or current) wind speed and direction
  #  Aggregate rainfall
  #  Minimum and maximum temperatures

#  Scenario Outline: Weather app test
#    When I open the url http://localhost:3000/
#    Then I should be able to launch the application with header "Five Day Weather Forecast for"
#    When I enter the perth for whetherforecast
#    Then I should able to select a <day>
#    Then user should see 3hourly forcast for that "<day>"
#
#    Examples:
#      | day |
#      | 1   |
##      | 2   |
##      | 3   |
##      | 4   |
##      | 5   |
