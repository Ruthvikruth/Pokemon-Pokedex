import { FC, useState, useEffect } from 'react';
import { Link, json } from 'react-router-dom';
import axios from 'axios';

var jsonDataPromise;

const readLocalJson = async (filePath) => {
  try
  {
    const response = await axios.get(filePath);
    return response.data;
  }
  catch (error)
  {
    console.error('Error reading local JSON file:', error.message);
    throw error;
  }
};

const HomePage: FC = () => {
  const [jsonData, setJsonData] = useState<Array[] | null>(null);
  const [jsonNext, setJsonNext] = useState<Array[] | null>(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20").then(response => response.json()).then(data => {
      setJsonData(data.results)
      setJsonNext(data.next);
    });
  }, []);

  const imageStyle = {width: '200px'};

  if(!jsonData)
  {
    return (<h1>Can't load content!</h1>)
  }
  return (

    <div className="text-center">
      <h3 className="text-4xl font-bold my-2">Pokemon Listing page</h3>
      <div className='pokemon-cards'>
        {
        jsonData.slice(0, 20).map( (pokemon, index) => (
          <div class="card" id={index}>
              <div>{pokemon.name, pokemon.url}</div>
              <img style={imageStyle} className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Name: {pokemon.name.replace(".ca", '')}.ca</h5>
                <Link className="btn btn-primary" to={pokemon.url}>Link to</Link>
            </div>
          </div>
        ))
        }
        </div>
    </div>
  );
};

export default HomePage;
