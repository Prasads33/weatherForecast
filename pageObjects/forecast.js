import assert from "assert";

class forecast {


    DominantCondition(day,city){
       // console.log('main function cityName:: ',city)
        const child= (parseInt(day,10) + 1).toString();
        const valueDominantCondition = $(`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1)`).getAttribute("aria-label");
        //const valueDominant=valueDominantCondition.substring(0,valueDominantCondition.length-1)
       // console.log('valueDominantCondition',valueDominantCondition)
        const size1=$$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length;
       // console.log('sizeeeee',size1);
        var arr=[];
        for(let i=1;i<size1+1;i++){
            const text=$((`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(2) > div:nth-child(${i}) > span:nth-child(2) > svg:nth-child(1)`)).getAttribute("aria-label");

           // console.log('list>>',text);

            arr.push(text);
        }
       // console.log('arr----->',arr)

        function mode(arr){
            return arr.sort((a,b) =>
                arr.filter(v => v===a).length
                - arr.filter(v => v===b).length
            ).pop();
        }
        let MostDominantCondition=mode(arr);

       // console.log('valueDominantCondition--->', valueDominantCondition)
       // console.log('MostDominantCondition--->', MostDominantCondition)
        assert.strictEqual(valueDominantCondition,MostDominantCondition,`For ${city} Most dominant condition is not matching for day ${day}`)
    }

    DominantConditionWind(day,name){
       // console.log('1111->',day)
       // console.log('2222',name)
        const child= (parseInt(day,10) + 1).toString();
        const valueDominantConditionWind = $(`#root > div > div:nth-child(${child}) > div.summary > span:nth-child(4) > span.speed`).getText();
        const valueDominantWind=valueDominantConditionWind.substring(0,valueDominantConditionWind.length-3)
       // console.log('valueDominantCondition',valueDominantWind)
        const size1=$$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length;
       // console.log('sizeeeee',size1);
        var arr=[];
        for(let i=1;i<size1+1;i++){
            const text=$((`#root > div > div:nth-child(${child}) > div.details > div:nth-child(${i}) > span:nth-child(4) > span.speed`)).getText();
            const MostDominantConditionArr=text.substring(0,text.length-3)
           // console.log('list>>',MostDominantConditionArr);

            arr.push(MostDominantConditionArr);
        }
       // console.log('arr----->',arr)

        // function mode(arr){
        //     return arr.sort((a,b) =>
        //         arr.filter(v => v===a).length
        //         - arr.filter(v => v===b).length
        //     ).pop();
        // }
        const MostDominantConditionWind=Math.max(...arr).toString();
       // console.log('valueDominantConditionWind--->',  valueDominantWind)
       // console.log('MostDominantConditionWind--->', MostDominantConditionWind)
        assert.strictEqual(valueDominantWind,MostDominantConditionWind,`For ${name} Most dominant wind condition is not matching for day ${day}`)
    }

    aggRainfallCheck(day,cityName){
       // console.log('rain::',cityName)
        const child= (parseInt(day,10) + 1).toString();

        const aggRainfallValue = $(`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(1) > span:nth-child(5) > span:nth-child(1)`).getText();
        const aggRainfall=aggRainfallValue.substring(0,aggRainfallValue.length-2)
       // console.log('aggRainfall-->>',aggRainfall)

        const size1=$$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length
        var arr=[];
        let sum =0;
        for(let i=1;i<=size1;i++){

            const text=$((`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(2) > div:nth-child(${i}) > span:nth-child(5) > span:nth-child(1)`)).getText();
           // console.log('list>>',text);
            const aggRain=text.substring(0,text.length-2)
            sum=(parseInt(aggRain,10) + sum+aggRain).toString();

            console.log(aggRain)
            arr.push(aggRain);
        }
       // console.log('arrayList',arr)
        const aggregate = (arr.reduce((a, c) => Number(a) + Number(c))).toString();
        // const minimumTempList = Math.min(...arr);
       // console.log('----minimumTempList---', aggregate,'---');
       // console.log('----DailyForcastMinTemp--',aggRainfall,'---')
        assert.strictEqual(aggRainfall,aggregate,`For ${cityName} agg rainFall is incorrect for day ${day}`);
        //console.log('maximumTempList',maximumTempList);

    }

    minTempCheck(day,cityName){
        const child= (parseInt(day,10) + 1).toString();
        const valueMinTemp = $(`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(1) > span:nth-child(3) > span:nth-child(2)`).getText();
        const DailyForcastMinTemp=valueMinTemp.substring(0,valueMinTemp.length-1)
       // console.log('DailyForcastTemp',DailyForcastMinTemp)

        const size1=$$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length
        var arr=[];
        for(let i=1;i<size1+1;i++){
            const text=$((`#root > div > div:nth-child(${child}) > div.details > div:nth-child(${i}) > span:nth-child(3) > span.min`)).getText();
           // console.log('list>>',text);
            const temp=text.substring(0,text.length-1)
            console.log(temp)
            arr.push(temp);
        }
        const minimumTempList = Math.min(...arr).toString();
       // console.log('----minimumTempList---', minimumTempList,'---');
       // console.log('----DailyForcastMinTemp--',DailyForcastMinTemp,'---')
        assert.strictEqual(minimumTempList,DailyForcastMinTemp,`For ${cityName} Maximum temp calculation logic is incorrect for ${day} day`)
        //console.log('maximumTempList',maximumTempList);




    }

    maxTempCheck(day,cityName){
       // console.log('inside maxTemp--',day)
        const child= (parseInt(day,10) + 1).toString();
        const valueTemp = $(`#root > div > div:nth-child(${child}) > div.summary > span:nth-child(3) > span.max`).getText();
        const DailyForcastTemp=valueTemp.substring(0,valueTemp.length-1)
       // console.log('DailyForcastTemp',DailyForcastTemp)
        const size=$$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length
        var arr=[];
        for(let i=1;i<size+1;i++){
            const text=$((`#root > div > div:nth-child(${child}) > div.details > div:nth-child(${i}) > span:nth-child(3) > span.max`)).getText();
           // console.log('list>>',text);
            const temp=text.substring(0,text.length-1)
            console.log(temp)
            arr.push(temp);
        }

       // console.log('Array list maxTempCheck',arr)
        const maximumTempList = Math.max(...arr).toString();;
       // console.log('----maximumTempList---', maximumTempList,'---');
       // console.log('----DailyForcastTemp--', DailyForcastTemp,'---')
        assert.strictEqual(maximumTempList,DailyForcastTemp,`For ${cityName} Maximum temp calculation logic is incorrect for ${day}`)
       // console.log('maximumTempList',maximumTempList);




    }
}
export default new forecast()