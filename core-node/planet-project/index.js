const { parse } = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

// Function to determine if a planet is habitable
function isHabitablePlanet(planet) {
    return (
        planet['koi_disposition'] === 'CONFIRMED' &&
        planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 &&
        planet['koi_prad'] < 1.6
    );
}

// Stream the CSV file and process data
fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data)) {
            habitablePlanets.push(data);
        }
    })
    .on('error', (err) => {
        console.error(err);
    })
    .on('end', () => {
        console.log(`Found ${habitablePlanets.length} habitable planets:`);
        console.log(habitablePlanets.map((planet) => {
            return planet['kepler_name'];
        }));
        console.log('Done!');
    });
