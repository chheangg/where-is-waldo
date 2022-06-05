const TargetCheck = ({characters}) => {
  return (
    <div className='target-mark-container'>
      <img className='target-icon' data-testid='target-marker'>

      </img>
      <div className='target-list'>
        <ul>
          {characters.map((character) => <li key={character}>{character}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default TargetCheck;