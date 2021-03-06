import { Link } from 'react-router-dom'
import '../styles/components/CharacterDetail.scss';


function CharacterDetail(props) {

  const renderDeadOrAlive = (statusCharacter) => {
    if (statusCharacter === 'Dead') {
      return (
        <p>
          <span>Status:</span> <i class='fas fa-skull-crossbones icon'></i> Dead
        </p>
      );
    } else if (statusCharacter === 'Alive') {
      return (
        <p>
          <span>Status:</span> <i class='fas fa-heart icon'></i> Alive
        </p>
      );
    } else if (statusCharacter === 'unknown') {
      return (
        <p>
          <span>Status:</span>
          <i class='fa fa-question icon' aria-hidden='true'></i> Unknown
        </p>
      );
    }
  };

  if (props.dataCharacter === undefined) {
    return (
      <section>
        <p className='cards__item--title'>Personaje no encontrado 😪 </p>
      </section>
    );
  } else {
    return (
      <article className='detail'>
        <img
          src={props.dataCharacter.image}
          alt={`Imagen de ${props.dataCharacter.name}`}
        />
        <h2>{props.dataCharacter.name} </h2>
        <div>
          <p>
            <span>Origin:</span> {props.dataCharacter.origin}
          </p>
          <p>
            <span>Species:</span> {props.dataCharacter.species}
          </p>
          {renderDeadOrAlive(props.dataCharacter.status)}
          <p>
            <span># Episodes:</span> {props.dataCharacter.episodes}
          </p>
        </div>
        <Link to={`/`}>
          <button>Return</button>
        </Link>
      </article>  

    );
  }
}

export default CharacterDetail;
