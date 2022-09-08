// router
import { Link } from'react-router-dom';

export const Game = ({game}) => {

  return (
    <div className="game">
      <img src={game.thumbnail} alt="" />
      <Link to={`/games/${game.id}`}>{game.title}</Link>
    </div>
  )
}
