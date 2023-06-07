interface ICountry {
    countryName: string,
    gdp: number,
    population: number,
    averageLifespan: number,
    birthsPerYear: number,
    eurovisionWins: number
}

export const hardcodedData: ICountry[] = [
    {
        countryName: 'country1',
        gdp: 0.4,
        population: 10000000,
        averageLifespan: 99,
        birthsPerYear: 3000,
        eurovisionWins: 5
    },{
        countryName: 'country2',
        gdp: 0.1,
        population: 50000000,
        averageLifespan: 86,
        birthsPerYear: 6000,
        eurovisionWins: 0
    },{
        countryName: 'country3',
        gdp: 0.2,
        population: 2000000,
        averageLifespan: 79,
        birthsPerYear: 20000,
        eurovisionWins: 3
    },{
        countryName: 'country4',
        gdp: -1.0,
        population: 500000,
        averageLifespan: 81,
        birthsPerYear: 7500,
        eurovisionWins: 1
    },{
        countryName: 'country5',
        gdp: 1.1,
        population: 100000000,
        averageLifespan: 80,
        birthsPerYear: 2900,
        eurovisionWins: 0
    }
]