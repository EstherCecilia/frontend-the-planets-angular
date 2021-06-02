import { Component } from '@angular/core';
class planet {
  id: string;
  about: string;
  img: string;
  evolution: string;
  radius: number;
  rotation: number;
  temp: number;

  constructor(
    id: string,
    about: string,
    img: string,
    evolution: string,
    radius: number,
    rotation: number,
    temp: number
  ) {
    this.id = id;
    this.about = about;
    this.img = img;
    this.evolution = evolution;
    this.radius = radius;
    this.rotation = rotation;
    this.temp = temp;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dados: planet[] = [
    {
      id: 'earth',
      about:
        'The Earth is the only planet known where life exists. Almost 1.5 million species of animals and plants have been discovered so far, and many more have yet to be found. While other planets may have small amounts of ice or steam, the Earth is 2/3 water. Earth has perfect conditions for a breathable atmosphere.',
      img: 'https://theplanets.org/wp-content/uploads/2014/09/earth.png',
      evolution: '365 DAYS',
      radius: 6371.0,
      rotation: 0.99726968,
      temp: 16,
    },
    {
      id: 'mercury',
      about:
        'Mercury is the first of the four terrestrial planets. This means it is a planet made mostly of rock. The planets closest to the Sun—Venus, Earth, and Mars—are the other three. Mercury is the smallest of the terrestrial planets. It has an iron core that accounts for about 3/4 of its diameter. Most of the rest of the planet is made up of a rocky crust.',
      img: 'https://theplanets.org/wp-content/uploads/2014/09/mercury.png',
      evolution: '88 DAYS',
      radius: 2439.7,
      rotation: 58649,
      temp: 430,
    },
    {
      id: 'venus',
      about:
        "Of all the planets, Venus is the one most similar to Earth. In fact, Venus is often called Earth's “sister” planet. As similar as it is in some ways, however, it is also very different in others.",
      img: 'https://theplanets.org/wp-content/uploads/2014/09/venus.png',
      evolution: '225 DAYS',
      radius: 6051.8,
      rotation: -243.018,
      temp: 471,
    },
    {
      id: 'mars',
      about:
        'No planet has sparked the imaginations of humans as much as Mars. It may be the reddish color of Mars, or the fact that it can often be easily seen in the night sky, that has caused people to wonder about this close neighbor of ours. Tales of “Martians” invading Earth have been around for well over fifty years. But is it likely that any kind of life really does exist on Mars?',
      img: 'https://theplanets.org/wp-content/uploads/2014/09/mars.jpg',
      evolution: '687 DAYS',
      radius: 3389.5,
      rotation: 1.026,
      temp: 28,
    },
    {
      id: 'jupiter',
      about:
        'The planet Jupiter is the first of the gas giant planets. Made mostly of gas, they include Jupiter, Saturn, Uranus, and Neptune. Jupiter is first among the planets in terms of size and mass. Its diameter is 11 times bigger than Earth, and its mass is 2.5 times greater than all the other planets combined. The “Great Red Spot” on Jupiter is actually a raging storm.',
      img: 'https://theplanets.org/wp-content/uploads/2014/09/jupiter.png',
      evolution: '12 Earth years',
      radius: 69911,
      rotation: 0.41354,
      temp: -108,
    },
    {
      id: 'saturn',
      about:
        'Most people know about the rings around Saturn, because they are the brightest and most colorful. These rings are made mainly out of ice particles orbiting the planet. While the rings themselves seem big, the particles are very small, usually no more than 10 feet (3 meters) wide.',
      img: 'https://theplanets.org/wp-content/uploads/2014/09/saturn.png',
      evolution: '29.5 Earth years',
      radius: 58232,
      rotation: 0.444,
      temp: -138,
    },
    {
      id: 'uranus',
      about:
        "Uranus is the first planet so far away from the Earth that it can only be seen with the use of a telescope. When it was first discovered in 1781, scientists didn't know what they had found. As astronomers studied the object more closely, they discovered that it had a circular orbit around the Sun. They had found the seventh planet.",
      img: 'https://theplanets.org/wp-content/uploads/2014/09/uranus.jpg',
      evolution: '84 Earth years',
      radius: 25362,
      rotation: -0.718,
      temp: -195,
    },
    {
      id: 'neptune',
      about:
        'Imagine being so good at math that you could figure out the location of a planet you had never even seen! That is what John C. Adams did in 1843 when he discovered Neptune.',
      img: 'https://theplanets.org/wp-content/uploads/2014/09/neptune.png',
      evolution: '165 Earth years',
      radius: 246220,
      rotation: 0.671,
      temp: -201,
    },
  ];
  selecionado: planet = {
    id: 'earth',
    about:
      'The Earth is the only planet known where life exists. Almost 1.5 million species of animals and plants have been discovered so far, and many more have yet to be found. While other planets may have small amounts of ice or steam, the Earth is 2/3 water. Earth has perfect conditions for a breathable atmosphere.',
    img: 'https://theplanets.org/wp-content/uploads/2014/09/earth.png',
    evolution: '365 DAYS',
    radius: 6371.0,
    rotation: 0.99726968,
    temp: 16,
  };

  onChangePlanet(id: string): void {
    let aux = this.dados.find((element) => element.id === id);

    let radius = aux ? aux.radius : 0;
    let rotation = aux ? aux.rotation : 0;
    let evolution = aux ? aux.evolution : '';
    let temp = aux ? aux.temp : 0;
    let about = aux ? aux.about : '';
    let img = aux ? aux.img : '';
    this.selecionado = new planet(
      id,
      about,
      img,
      evolution,
      radius,
      rotation,
      temp
    );
  }
}
