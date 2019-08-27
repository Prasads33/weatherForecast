import assert from 'assert';
var  moment = require('moment')

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

    maxTempCheck(day){
        const child= (parseInt(day,10) + 1).toString();
        const valueTemp = $(`#root > div > div:nth-child(${child}) > div.summary > span:nth-child(3) > span.max`).getText();
        const DailyForcastTemp=valueTemp.substring(0,valueTemp.length-1)
        console.log('DailyForcastTemp',DailyForcastTemp)
        const size=$$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length
                var arr=[];
            for(let i=1;i<size+1;i++){
                const text=$((`#root > div > div:nth-child(${child}) > div.details > div:nth-child(${i}) > span:nth-child(3) > span.max`)).getText();
                console.log('list>>',text);
                const temp=text.substring(0,text.length-1)
                console.log(temp)
               arr.push(temp);
            }
            console.log('Array list maxTempCheck',arr)
            const maximumTempList = Math.max(...arr).toString();;
        console.log('----maximumTempList---',typeof maximumTempList,'---');
        console.log('----DailyForcastTemp--',typeof DailyForcastTemp,'---')
            assert.strictEqual(maximumTempList,DailyForcastTemp,'Maximum temp calculation logic is incorrect')
            console.log('maximumTempList',maximumTempList);




    }



    aggRainfallCheck(day){
             const child= (parseInt(day,10) + 1).toString();

        const aggRainfallValue = $(`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(1) > span:nth-child(5) > span:nth-child(1)`).getText();
        const aggRainfall=aggRainfallValue.substring(0,aggRainfallValue.length-2)
        console.log('aggRainfall',aggRainfall)

        const size1=$$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length
        var arr=[];
        let sum =0;
        for(let i=1;i<size1+1;i++){

            const text=$((`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(2) > div:nth-child(${i}) > span:nth-child(5) > span:nth-child(1)`)).getText();
            console.log('list>>',text);
            const aggRain=text.substring(0,text.length-2)
            sum=(parseInt(aggRain,10) + sum+aggRain).toString();

            console.log(aggRain)
            arr.push(aggRain);
        }
        console.log('arrayList',arr)
        const aggregate = (arr.reduce((a, c) => Number(a) + Number(c))).toString();
        // const minimumTempList = Math.min(...arr);
        console.log('----minimumTempList---',typeof aggregate,'---');
        console.log('----DailyForcastMinTemp--',typeof aggRainfall,'---')
        assert.strictEqual(aggRainfall,aggregate,'Maximum temp calculation logic is incorrect');
        //console.log('maximumTempList',maximumTempList);

    }


    minTempCheck(day){
        const child= (parseInt(day,10) + 1).toString();
        const valueMinTemp = $(`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(1) > span:nth-child(3) > span:nth-child(2)`).getText();
        const DailyForcastMinTemp=valueMinTemp.substring(0,valueMinTemp.length-1)
        console.log('DailyForcastTemp',DailyForcastMinTemp)

         const size1=$$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length
         var arr=[];
         for(let i=1;i<size1+1;i++){
             const text=$((`#root > div > div:nth-child(${child}) > div.details > div:nth-child(${i}) > span:nth-child(3) > span.max`)).getText();
            console.log('list>>',text);
            const temp=text.substring(0,text.length-1)
            console.log(temp)
            arr.push(temp);
        }
        const minimumTempList = Math.min(...arr).toString();
        console.log('----minimumTempList---',typeof minimumTempList,'---');
        console.log('----DailyForcastMinTemp--',typeof DailyForcastMinTemp,'---')
        assert.strictEqual(minimumTempList,DailyForcastMinTemp,'Maximum temp calculation logic is incorrect')
        //console.log('maximumTempList',maximumTempList);




    }
    DominantCondition(day){
        const child= (parseInt(day,10) + 1).toString();
        const valueDominantCondition = $(`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1)`).getAttribute("aria-label");
        //const valueDominant=valueDominantCondition.substring(0,valueDominantCondition.length-1)
        console.log('valueDominantCondition',valueDominantCondition)
        const size1=$$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length;
        console.log('sizeeeee',size1);
        var arr=[];
        for(let i=1;i<size1+1;i++){
            const text=$((`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(2) > div:nth-child(${i}) > span:nth-child(2) > svg:nth-child(1)`)).getAttribute("aria-label");

            console.log('list>>',text);

            arr.push(text);
        }
        console.log('arr----->',arr)

        function mode(arr){
            return arr.sort((a,b) =>
                arr.filter(v => v===a).length
                - arr.filter(v => v===b).length
            ).pop();
        }
        let MostDominantCondition=mode(arr);

        console.log('valueDominantCondition--->', valueDominantCondition)
        console.log('MostDominantCondition--->', MostDominantCondition)
        assert.strictEqual(valueDominantCondition,MostDominantCondition,"Most dominant constion is not matching")
    }

    DominantConditionWind(day){
        const child= (parseInt(day,10) + 1).toString();
        const valueDominantConditionWind = $(`#root > div > div:nth-child(${child}) > div.summary > span:nth-child(4) > span.speed`).getText();
        const valueDominantWind=valueDominantConditionWind.substring(0,valueDominantConditionWind.length-3)
        console.log('valueDominantCondition',valueDominantWind)
        const size1=$$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length;
        console.log('sizeeeee',size1);
        var arr=[];
        for(let i=1;i<size1+1;i++){
            const text=$((`#root > div > div:nth-child(${child}) > div.details > div:nth-child(${i}) > span:nth-child(4) > span.speed`)).getText();

            console.log('list>>',text);

            arr.push(text);
        }
        console.log('arr----->',arr)

        function mode(arr){
            return arr.sort((a,b) =>
                arr.filter(v => v===a).length
                - arr.filter(v => v===b).length
            ).pop();
        }
        let MostDominantConditionWind=mode(arr);

        console.log('valueDominantConditionWind--->', valueDominantConditionWind)
        console.log('MostDominantConditionWind--->', MostDominantConditionWind)
        assert.strictEqual(valueDominantConditionWind,MostDominantConditionWind,"Most dominant whConstion is not matching")
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
       this.Day.isDisplayed()
       $(`[data-test='day-${day}']`).click();
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

    TextEqual(){
        browser.waitUntil(() => {
            console.log('hiii---',this.TextMatch.getText(),'--------')
            this.TextMatch.getText().trim() === ' Five Day Weather Forecast for '
        }, 5000, 'expected text to be different ');
    }



}

export default new whetherPage()