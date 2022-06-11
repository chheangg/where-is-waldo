import levelOne from './components/assets/level-one.jpg';
import defaultIcon from './components/assets/account-circle.svg';
import waldoIcon from './components/assets/waldo.png';
const config = [
  {
    name: 'Siege Waldo',
    location: 'level-one',
    image: levelOne,
    difficulty: 'ស្រួល',
    preview: levelOne,
    characters: [
      {
        name: 'Waldo',
        image: waldoIcon,
      },
      {
        name: 'bar',
        image: defaultIcon,
      },
      {
        name: 'foobar',
        image: defaultIcon,
      },
    ],
  }
]

export default config;