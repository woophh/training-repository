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

function getCar (carName) {
    if (typeof cars[carName] === "undefined") {
    console.log('не найдено');
    } else {
    console.log(cars[carName]);
    }
}

getCar('Audi')

