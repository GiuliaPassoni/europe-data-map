import {randomArray} from "../utils/calcs";
export const randomYears = [1995, 1996, 1997, 1998, 1999]

export const hardcodedData = [
    {
        countryName: 'country1',
        gdp: 0.4,
        gdp5yearTrend: randomArray(-0.3,1.2, 5).map((i, ix) => ({year: randomYears[ix], gdpValue: i})),
        population: 10000000,
        averageLifespan: 99,
        birthsPerYear: 3000,
        eurovisionWins: 5
    },{
        countryName: 'country2',
        gdp: 0.1,
        gdp5yearTrend: randomArray(1,2.5, 5).map((i, ix) => ({year: randomYears[ix], gdpValue: i})),
        population: 50000000,
        averageLifespan: 86,
        birthsPerYear: 6000,
        eurovisionWins: 0
    },{
        countryName: 'country3',
        gdp: 0.2,
        gdp5yearTrend: randomArray(.8,2.6, 5).map((i, ix) => ({year: randomYears[ix], gdpValue: i})),
        population: 2000000,
        averageLifespan: 79,
        birthsPerYear: 20000,
        eurovisionWins: 3
    },{
        countryName: 'country4',
        gdp: -.8,
        gdp5yearTrend: randomArray(1.2,3.3, 5).map((i, ix) => ({year: randomYears[ix], gdpValue: i})),
        population: 500000,
        averageLifespan: 81,
        birthsPerYear: 7500,
        eurovisionWins: 1
    },{
        countryName: 'country5',
        gdp: 1.1,
        gdp5yearTrend: randomArray(-.6,0.2, 5).map((i, ix) => ({year: randomYears[ix], gdpValue: i})),
        population: 100000000,
        averageLifespan: 80,
        birthsPerYear: 2900,
        eurovisionWins: 0
    }
]