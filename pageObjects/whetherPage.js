import assert from 'assert';
var  moment = require('moment')
//import whetherPage from 'pageObjects/forecast'
import forecast from './forecast'

class whetherPage {

    get searchField() {return $('#city')}
    get enterName() {return $('#city')}
    get TextMatch() {return $('#root > div > h1')}
    get NoOfDaysCount(){return $$('//*[@id="root"]/div/div[@style]')}
    get Day() {return $('#root > div > div:nth-child(2) > div.summary > span:nth-child(1)')}
    get WhetherForecastTime () {return $$('#root > div > div:nth-child(2) > div.details > div:nth-child(1) > span:nth-child(1) > span')}
    get hideElement(){return $('.summary')}
    get TempElementCount() {return $$(`//*[@id="root"]/div/div[1]/div[2]/div`)}
    get weatherElement () {return $('.details')}
    get tempFilterContainer() { return $('.max')}


   // get tempValue() {return $(`//*[@id='root']/div/div[1]/div[2]/div["${tempCount}"]/span[3]/span[1]`)}

    hideWebElement(){
        browser.pause(800)
        this.hideElement.getAttribute('hidden');

    }
    MaxTemp(){

        let countrow=this.RowCount.length;
        console.log('countrow--',countrow);
        let arr = [];
        this.tempFilterContainer.forEach(elem => {
            arr.push(elem.getText())
        });
        return arr;
        //console.log('prasad',arr)
       // let tempCount = this.TempElementCount.length;
       //  console.log('tempCount',tempCount);
       //  for(let i=1; i<=tempCount ; i++){
       //      let a =$(`//*[@id='root']/div/div[1]/div[2]/div[${i}]/span[3]/span[1]/text()[1]`).getText();
       //       console.log('text1--->>',i,'---',a)
       //  }
    }











    summariseWeather(day){
        //need to fetch Current Condition, WindSpeen, RainFall, maxTemp,minTemp
        const child= (parseInt(day,10) + 1).toString();
        let condition = $(`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1)`).getAttribute("aria-label");
        const windSpeed = $(`#root > div > div:nth-child(${child}) > div.summary > span:nth-child(4) .speed`).getText();
        const rainFall = $(`#root > div > div:nth-child(${child}) > div.summary > span:nth-child(5) > span.rainfall`).getText();
        const maxTemp = $(`#root > div > div:nth-child(${child}) > div.summary > span:nth-child(3) > span.max`).getText();
        const minTemp = $(`#root > div > div:nth-child(${child}) > div.summary > span:nth-child(3) > span.rmq-5ea3c959.min`).getText();
        console.log('condition',condition);
        console.log('Wind Speed',windSpeed);
        console.log('Rain Fall',rainFall);
        console.log('Maximum Temperature',maxTemp);
        console.log('Minimum Temperature',minTemp);
        return true;
    }

    threeHourDifference(day) {
        const child = (parseInt(day, 10) + 1).toString();
       // const valueOfHours = $(`#root > div > div:nth-child(${child}) > div.summary > span:nth-child(4) > span.speed`).getText();
        //const valueOfHoursForecast = valueOfHours.substring(0, valueOfHours.length - 3)
       // console.log('valueOfHoursForecast', valueOfHoursForecast)
        const size1 = $$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length;
        console.log('sizeeeee', size1);
        var arr = [];
        for (let i = 1; i < size1 + 1; i++) {
            const text = $((`#root > div > div:nth-child(${child}) > div.details > div:nth-child(${i}) > span:nth-child(1) > span`)).getText();
            console.log('list>>', text);
            arr.push(text);
        }

        arr.sort((a,b) => {
            var timeDifference = a-b;
            //  console.log(moment(timeDifference, ‘hmm’).format(‘hh:mm’));
            // expect(moment(timeDifference, ‘hmm’).format(‘hh’)).to.equal(‘03’);
            assert.strictEqual(moment(timeDifference,'hmm').format('hh'),'03')
        })

        console.log('array time--->',arr);

    }
    checkItemExpanded(day){
        console.log('inside itemExpanded Fun',day)
        browser.pause(800);
      var day1= parseInt(day,10) + 1;
       const style=$(`#root > div > div:nth-child(${day1}) > div.details`).getAttribute('style');
        console.log(style)

        if(!style.includes("max-height: 2000px"))
        {
            Assert.fail("3 hourly forecast is hidden");
        }

    }

    checkItemCollapsed(day){
        $(`[data-test='day-${day}']`).click();
        browser.pause('900')
         var day1= parseInt(day,10) + 1;
         const style=$(`#root > div > div:nth-child(${day1}) > div.details`).getAttribute('style');
         console.log('style---',style)
        if(style.includes("max-height: 2000px"))
        {
            Assert.fail("3 hourly forecast is hidden");
        }
    }

    SelectElement(day){
        console.log('Select Element func',day)
        this.Day.isDisplayed();
        console.log("in select Element::",day);
            console.log('inside LOOP',day)
            $(`[data-test='day-${day}']`).click();
    }

    windCondition(day,cityName){
       this.Day.isDisplayed();
       var name=cityName;
       console.log("in select Element::",day);
       for (var i=1;i<=day;i++)
        {
            console.log('inside LOOP',i)
            $(`[data-test='day-${i}']`).click();
            browser.pause(700)
            forecast.DominantConditionWind(i,name)
         }
        browser.pause(800)
    }


    aggRain(day,cityName){
        this.Day.isDisplayed();
        console.log("in select Element::",day);
        for (var i=1;i<=day;i++)
        {
            console.log('inside LOOP',i)
            $(`[data-test='day-${i}']`).click();
            browser.pause(700)
            forecast.aggRainfallCheck(i,cityName)
        }
        browser.pause(800)
    }

    minimum(day,cityName){
        this.Day.isDisplayed();
        console.log("in select Element::",day);
        for (var i=1;i<=day;i++)
        {
            console.log('inside LOOP',i)
            $(`[data-test='day-${i}']`).click();
            browser.pause(700)
            forecast.minTempCheck(i,cityName)
        }
        browser.pause(800)
    }

    maxTemp(day,cityName){
        this.Day.isDisplayed();
        console.log("in select Element::",day);
        for (var i=1;i<=day;i++)
        {
            console.log('inside LOOP',i)
            $(`[data-test='day-${i}']`).click();
            browser.pause(700)
            forecast.maxTempCheck(i,cityName)
        }
        browser.pause(800)
    }


    weatherCondition(day,cityName){
        var city=cityName
        this.Day.isDisplayed();
        console.log("in select Element::",day);
        console.log('cityName',cityName)
        for (var i=1;i<=day;i++)
        {
            console.log('inside LOOP',i)
            $(`[data-test='day-${i}']`).click();
            browser.pause(500)
            forecast.DominantCondition(i,city)
        }
        browser.pause(800)
    }


    DaysCount(){
      let a =this.NoOfDaysCount.length;
        return a;

    }

    clearSearchTerm() {
        this.searchField.clearValue()
        browser.pause(800)
    }

    enterField(cityName){
        this.enterName.isDisplayed()
        this.enterName.setValue(cityName);
        browser.keys("\uE007");
    }


    TextEqual(text){
       let headerText = $('#root > div > h1').getText()
        console.log('headerText----', headerText)
        assert.strictEqual(headerText,text,'You have landed in wrong page')
    }

    TextEqual2(text){
        let headerText = $('#root > div > div').getText()
        console.log('headerText----', headerText)
        assert.strictEqual(headerText,text,'You have landed in wrong page')
    }




}

export default new whetherPage()