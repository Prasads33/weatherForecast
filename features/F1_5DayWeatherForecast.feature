Feature: As a whetherForecast service provider, I should be able to fetch the whether details from the application successfully

  Scenario Outline: Verify the whetherForecast data
    When I open the url <URL>
    When I enter the <cityName> for whetherforecast


    Examples:
      | cityName  |URL|
      | aberdeen  |http://localhost:3000/|
      | dundee    |http://localhost:3000/|
      | edinburgh |http://localhost:3000/|
      | glasgow   |http://localhost:3000/|
      | perth     |http://localhost:3000/|
      | stirling  |http://localhost:3000/|

