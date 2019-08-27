Feature: As a whetherForecast service provider, I should be able to fetch the whether details from the application successfully

  Scenario Outline: Verify the whetherForecast data
    When I open the url http://localhost:3000/
    When I enter the <cityName> for whetherforecast


    Examples:
      | cityName  |
      | aberdeen  |
      | dundee    |
      | edinburgh |
      | glasgow   |
      | perth     |
      | stirling  |

