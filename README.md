This is an test automationframework created to perform automated accpetance test for WeatherForecast application is available on github and clone it from https://github.com/buildit/acceptance-testing The test execution requires the weather application to run on local host at port 3000
AutomationFramework :WebdriverIo
Language: NodeJs,JavaScripts
The Testsuite can be executed from commandline as well as from IDE. 
----------------------------------
Dependencies: 
Node version : 8.17.0,
Chromedriver: "79.0.3",
allure Reporting : npm install -g allure-commandline --save-dev
---------------------------------
Commands:
Executing featureFiles : npm run test,
For generating report : allure generate ./Results,
For cleaning the report : allure generate ./Results --clean

----------------------------------------------------------------
Automated all the scenarios with WDIO nodejs
Observations/Reports:
While testing the app, As a tester my observations for application
1)In Most dominant wether_conditions 
for Eg:
City Name : Glasgow
Expected result : User should be able to get 3 hours summeries weatherForecast data with most dominant condition of the day.
          Per Observation User got {Rain, Cloud, Cloud, Cloud} for Tuesday 20 hence the most dominant would be "Cloud"
          
Actual : User is getting "Rain" which is not expected most_dominant conditions.
2)While testing Most wind speed 
for Eg:
City Name : Glasgow
Expexted : User should be able to get 3 hours summeries weatherForecast data with most dominant condtion of the day.
          Per Observation User got {1,2,3,3,5,5,4,3} for Tuesday 21 hence most dominant windSpeed would be "5"
          
Actual : User is getting "1" which is not expected most_dominant Wind conditions.
    
Note: Above mentioned scenarios been observed by "https://github.com/buildit/acceptance-testing" UserStory.

