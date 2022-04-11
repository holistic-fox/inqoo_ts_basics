// Create an interfaces for the following object examples

const species = {
    "average_height": "2.1",
    "average_lifespan": "400",
    "classification": "Mammal",
    "created": "2014-12-10T16:44:31.486000Z",
    "designation": "Sentient",
    "edited": "2014-12-10T16:44:31.486000Z",
    "eye_colors": "blue, green, yellow, brown, golden, red",
    "hair_colors": "black, brown",
    "homeworld": "https://swapi.dev/api/planets/14/",
    "language": "Shyriiwook",
    "name": "Wookie",
    "people": [
        "https://swapi.dev/api/people/13/"
    ],
    "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/"
    ],
    "skin_colors": "gray",
    "url": "https://swapi.dev/api/species/3/"
}

const planet = {
    "name": "Yavin IV",
    "rotation_period": "24",
    "orbital_period": "4818",
    "diameter": "10200",
    "climate": "temperate, tropical",
    "gravity": "1 standard",
    "terrain": "jungle, rainforests",
    "surface_water": "8",
    "population": "1000",
    "residents": [],
    "films": [
        "https://swapi.dev/api/films/1/"
    ],
    "created": "2014-12-10T11:37:19.144000Z",
    "edited": "2014-12-20T20:58:18.421000Z",
    "url": "https://swapi.dev/api/planets/3/"
}

const article = {
    author: {
        firstName: 'Michał',
        lastName: 'Witek',
        birthDate: new Date('November 16, 1990 23:15:30'),
        getAge: (birthDate) => new Date().getFullYear() - birthDate.getFullYear()
    },
    title: 'Typescript Interface Basics',
    topic: 'Programming',
    creationDate: new Date(),
    tag: ['#JS', '#TS'],
    category: 'Science'
};
