const axios = require('axios')

//1. group by continent and sort DESC
//2. select the minimum cases for each continent

const logSafeCountryByContinent = (continents) => {
  console.log("***LogSafeCountryByContinent***")
  continents.map(continent => console.log(`${continent.continentName} :`, continent.minCase.country))
}

const logContryListByContinent = (continents) => {
  console.log("***LogContryListByContinent***")
  continents.map(continent => console.log(`${continent.continentName} :`, continent.countries.map(e => `${e.country} :case ${e.cases}`)))
}

const fetchData = async () => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/countries")
  return data
}

const groupByContinent = (covidData) => {
  let continents = []
  covidData.forEach(data => {
    let indexContinent = continents.findIndex(c => c.continentName === data.continent)
    if (indexContinent === -1) {
      // not heve continent
      continents.push(
        {
          continentName: data.continent,
          countries: [{
            country: data.country,
            cases: data.cases
          }]
        }
      )
    } else {
      // have continent
      continents[indexContinent].countries.push(
        {
          country: data.country,
          cases: data.cases
        }
      )
    }
  })
  
  continents.forEach( continent => {
    continent.countries.sort((a, b) =>  b.cases - a.cases)
  })

  return continents
}

const calMincaseByContinental = (groupedContinent) => {
  let result = groupedContinent
  result.forEach( (continent) => {
    let lastIndex = continent.countries.length - 1
    continent.minCase = continent.countries[lastIndex]
  })
  return result
}

(async () => {
  const covidData = await fetchData()
  const groupedContinent = groupByContinent(covidData)
  logContryListByContinent(groupedContinent)
  const mincaseByContinental = calMincaseByContinental(groupedContinent)
  logSafeCountryByContinent(mincaseByContinental)
})()
