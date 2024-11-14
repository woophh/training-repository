const cars = {
    BMW: {
        name: 'BMW',
        wheels: 4,
        doors: 2,
        isStarted: false,
        hp: 350,
    },

    Audi: {
        name: 'Audi',
        wheels: 4,
        doors: 2,
        isStarted: false,
        hp: 300,
    },

    Mercedes: {
        name: 'Mercedes',
        wheels: 4,
        doors: 4,
        isStarted: true,
        hp: 280,
    },
    
}

function carsName () {
    const carsBrand = Object.keys(cars)
    carsBrand.forEach((brand) => console.log(brand));
}

carsName()