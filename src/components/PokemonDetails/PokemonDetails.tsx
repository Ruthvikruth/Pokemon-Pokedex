import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails: FC = () => {

  const id = useParams();
  console.log(id.id);
  let x = id.id;
  console.log(x)

  const [pokemonData, setPokemonData] = useState<Array | null>(null);
  useEffect( () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${x}`).then(response => response.json()).then(data => {
      console.log(data);
      setPokemonData(data);
    });
  }, []);

  if(!pokemonData)
  {
    return (<h1>Cannot Fetch Data!</h1>)
  }

  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold my-2">Pokemon Details page</h3>
      <h4>Attacks: </h4>
      <div className='details'>
          {
            pokemonData.abilities.map( data => (
            <h1>{data.ability.name}</h1>
            ))
          }
          <br></br><h4>Base Experience: {pokemonData.base_experience}</h4>
          <br></br><h4>Base Height: {pokemonData.height}</h4>
      </div>
    </div>
  );
};

export default PokemonDetails;
