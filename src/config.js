import levelOne from './components/assets/level-one.png';
import LevelOnePreview from './components/assets/level-one-preview.png';
import defaultIcon from './components/assets/account-circle.svg';
const config = [
  {
    name: 'រាមកេតិ៍',
    location: 'level-one',
    image: levelOne,
    difficulty: 'ស្រួល',
    preview: LevelOnePreview,
    characters: [
      {
        name: 'foo',
        image: defaultIcon,
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