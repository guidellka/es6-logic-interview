## Interview Covid Test App

To test the understanding of es6 by using fetch and manage array please see the code in index.js

The app fetch data from  https://disease.sh/ retrive the current covid status . In this situation your duty is to answer 2 question.
1. data groupby continental and sort by country with the most cases
2. The safest country of each continental

The code below is the main function you that runs empty method 
###### main function
```js
// index.js

(async () => {
  const covidData = await fetchData()
  const groupedContinent = groupByContinent(covidData)
  logContryListByContinent(groupedContinent)
  const mincaseByContinental = calMincaseByContinental(groupedContinent)
  logSafeCountryByContinent(mincaseByContinental)
})()
```

The two method that you should implement is groupByContinent() and calMincaseByContinental() your code must writen in a good codebase and concern about consistency and no extra libary useage! 

#### Dev
To start the project please use these commands

```$xslt
git clone https://gitlab.metrabyte.cloud/MrFarang/es6-logic-interview.git
yarn
yarn start
```
