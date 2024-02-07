import { FC } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails: FC = () => {

  const { id } = useParams();
  console.log(id)
  
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold my-2">Pokemon Details page</h3>
    </div>
  );
};

export default PokemonDetails;
