import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails: FC = () => {

  // const id = useParams();
  const id = localStorage.key;
  let [pokemonData, setPokemonData] = useState('');

  let pokemanpath = "https://pokeapi.co/api/v2/pokemon/" + (JSON.parse((JSON.stringify(id)))).index;
  useEffect(() => {
    fetch(pokemanpath).then(response => response.json()).then(data => {
      setPokemonData(pokemonData);
    });
  }, []);

  if(!pokemonData)
  {
    return (<h1>Cannot Fetch Data!</h1>)
  }

  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold my-2">Pokemon Details page</h3>
      <div className='details'>
          <h1>{pokemanpath}</h1>
          <h1>{pokemonData}</h1>
      </div>
    </div>
  );
};

export default PokemonDetails;
