import { When, Then } from 'cucumber';

import assert from 'assert';

import whetherPage from '../../pageObjects/whetherPage'




When(/^I open the url (.*)$/, function (url) {
   console.log('url::',url)
    browser.url(url);
   //whetherPage.TextEqual();

});
When(/^I enter the (.*) for whetherforecast$/, function (cityName) {
     whetherPage.clearSearchTerm();
     whetherPage.enterField(cityName);
    browser.pause(800)

});

 Then(/^I should able to hide forecast data$/, function () {
     whetherPage.hideWebElement();
    console.log('Element Hide');

});

Then(/^User should able to expand the data and get after every three hourly forecast data"([^"]*)"$/, function (day) {
          console.log('step defination:: ',day)
           for(let j=1;j<=day;j++) {
               whetherPage.SelectElement(j)
               whetherPage.checkItemExpanded(j);
               whetherPage.threeHourDifference(j);
           }
 });
Then(/^User should be able to hidden forecast data "([^"]*)"$/, function (day) {
    whetherPage.checkItemCollapsed(day)
    });

// Then(/^user should see 3hourly forcast for that "([^"]*)"$/, function (day) {
//      // whetherPage.summariseWeather(day);
//       //whetherPage.maxTempCheck(day);
//        whetherPage.minTempCheck(day);
//     //   whetherPage.aggRainfallCheck(day);
//     //  whetherPage.DominantCondition(day);
//     // whetherPage.DominantConditionWind(day);
//     });

    Then(/^I should be able to launch the application with header "([^"]*)"$/, function (text) {
            whetherPage.TextEqual(text);
    });

    Then(/^I should be able to launch the application with header1 "([^"]*)"$/, function (text) {
        whetherPage.TextEqual2(text);
    });

    Then(/^I should able to get most dominant wind conditions for (.*) among (.*) days$/, function (cityName,day) {
        whetherPage.windCondition(day,cityName);
        console.log('Element Click')
    });

    Then(/^I should able to get most dominant weather conditions for (.*) among (.*) days$/, function (cityName,day) {
       whetherPage.weatherCondition(day,cityName)
    });


     Then(/^I should able to get agg of rainfall for (.*) among (.*) days$/, function (cityName,day) {
      whetherPage.aggRain(day,cityName)
    });

    Then(/^I should able to get maximum temp for (.*) among (.*) days$/, function (cityName,day) {
    whetherPage.maxTemp(day,cityName)
    });

    Then(/^I should able to get minimum temp for (.*) among (.*) days$/, function (cityName,day) {
        whetherPage.minimum(day,cityName)
    });


    Then(/^I should able to select (.*)$/, function (day) {
    whetherPage.SelectElement(day)
    });
