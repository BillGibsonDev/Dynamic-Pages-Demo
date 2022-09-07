import { useState, useEffect } from 'react';
import axios from 'axios';

// router
import { useParams } from 'react-router-dom';

export const GamePage = () => {

    const { gameId } = useParams();

    const [ game, setGame ] = useState({});

    useEffect(() => {
        const handleGame = () => {
            const options = {
                method: 'GET',
                url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
                params: { id: `${gameId}`},
                headers: {
                    'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_KEY}`,
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            axios.request(options).then(function(response){
                setGame(response.data);
            }).catch(function (error) {
                console.error(error);
            })
        }
    handleGame();
  }, [ gameId ])

  return (
    <div className="game-page">
        <h1>{game.title}</h1>
        <img src={game.thumbnail} alt="" />
        <p>{game.description}</p>
    </div>
  )
}
