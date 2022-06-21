import { collection, query, getDocs, orderBy, limit} from "firebase/firestore";
import { useState, useEffect } from "react";
import uniqid from 'uniqid';
import Timer from "./timer";

const LeaderBoard = ({db, location}) => {
  const [ leaderBoard, setLeaderBoard ] = useState([]);

  const getLeaderboard = async () => {
    const cachedLeaderBoard = []
    const lbRef = collection(db, 'leaderboard', location, 'ranking');
    const lbQuery = query(lbRef, orderBy('time'), limit(10));
    const lb = await getDocs(lbQuery);

    lb.forEach((spot) => {
      cachedLeaderBoard.push(spot.data());
    })

    setLeaderBoard(cachedLeaderBoard);
  }

  useEffect(() => {
    getLeaderboard();
  }, [])

  return (
    <div className='leaderboard'>
      {leaderBoard[0] ? leaderBoard.map((ranking, rank) => {
        return (
          <div key={uniqid()} className='ranking-container'>
            <div className='name'>{`${rank + 1}. ${ranking.name}`}</div>
            <Timer time={ranking.time} />
          </div>
        )
       }) : null }
    </div>
  )
}

export default LeaderBoard;