import { useState, useEffect } from 'react';
import axios from 'axios';

// router
import { useParams } from 'react-router-dom';

export const GamePage = () => {

    const { gameId } = useParams();

    console.log(gameId)

    const [ game, setGame ] = useState({});

    useEffect(() => {
        const handleGame = () => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: { id: `${gameId}`},
            headers: {
            'X-RapidAPI-Key': '46b37b20a9msh92aed9be2b060a5p1cf061jsn211cc00eb274',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
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
