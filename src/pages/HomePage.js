import { useState, useEffect } from 'react';
import axios from 'axios';

// components
import {Game} from '../components/Game.js';

export const HomePage = () => {

    const [ games, setGames ] = useState([]);

    useEffect(() => {
        const handleGameList = () => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            headers: {
            'X-RapidAPI-Key': '46b37b20a9msh92aed9be2b060a5p1cf061jsn211cc00eb274',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setGames(response.data);
        }).catch(function (error) {
            console.error(error);
        })
        }
    handleGameList();
  }, [])
  
  return (
    <>
        {
            games.map((game, index) => {
                return (
                    <Game
                        key={index}
                        game={game}
                    />
                )
            })
        }
    </>
  )
}
