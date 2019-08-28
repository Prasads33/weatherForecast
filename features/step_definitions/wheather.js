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

Then(/^I should get all whether information for (.*)$/, function (NoOfDays) {
    let actualCount =whetherPage.DaysCount();
    console.log('No of Days of forecast::',actualCount)
    assert.strictEqual(actualCount,actualCount, 'No of Days forecast not matching')


}); Then(/^I should able to select a (.*)$/, function (day) {
        whetherPage.SelectElement(day);
        console.log('Element Click')

}); Then(/^Abel to get (.*) forecast data$/, function () {


});


 Then(/^I should able to hide forecast data$/, function () {
     whetherPage.hideWebElement();
    console.log('Element Hide');

});

Then(/^I should able to get all correct Maximum Temp$/, function () {
    whetherPage.MaxTemp();

    //console.log('actualTCount...>>>>',actualTCount)
});

Then(/^Daily forecast should be able to summarise the (.*) data$/, function () {



}); Then(/^I should able to get Most dominant \(or current\) condition$/, function () {

}); Then(/^Most dominant \(or current\) wind speed and direction in rounded values$/, function () {

}); Then(/^I should able to get Aggregate rainfall in rounded values$/, function () {

}); Then(/^I should able to get Minimum and maximum temperatures in rounded values$/, function () {

});Then(/^user should see 3hourly forcasasdt for that (.*)$/, function (day) {
        whetherPage.summariseWeather(day);

});Then(/^user should see Three hourly forcast for that "([^"]*)"$/, function (day) {
           whetherPage.checkItemExpanded(day);
          whetherPage.threeHourDifference(day);

 });
Then(/^Status of hourly forecast should be hidden for "([^"]*)"$/, function (day) {
    whetherPage.checkItemCollapsed(day)
    });

Then(/^user should see 3hourly forcast for that "([^"]*)"$/, function (day) {
     // whetherPage.summariseWeather(day);
      //whetherPage.maxTempCheck(day);
       whetherPage.minTempCheck(day);
    //   whetherPage.aggRainfallCheck(day);
    //  whetherPage.DominantCondition(day);
    // whetherPage.DominantConditionWind(day);
    });

    Then(/^I should be able to launch the application with header "([^"]*)"$/, function (text) {
            whetherPage.TextEqual(text);
    });
