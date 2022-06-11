import config from "../config";
import LevelPreview from './utils/level-preview';

const Main = () => {
  return (
    <main className='main-container'>
      <div className='level-header-container'>
        <h1 className='level-header'>
          វគ្គ
        </h1>
        <div className='level-amount'>
          {config.length} វគ្គ
        </div>
      </div>
      <div className='level-container'>
        {config.map((level) => {
        return <LevelPreview 
                key={level.name}
                name={level.name}
                location={level.location}
                preview={level.preview}
                difficulty={level.difficulty}
              />
      })}
      </div>
    </main>
  )
}

export default Main;