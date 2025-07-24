import './card.css';
import { Link } from 'react-router'

export const CustomCard = ({elem}) => {
  return (
    <Link to={`/oneCharacterInfo/${elem.id}`} className='text-decoration-none text-black'>
      <article className='custom-card w-100 bg-light text-center border border-2 border-black rounded-4 shadow'>
        <img 
          src={elem.image} 
          alt={elem.name}
          className='w-100 rounded-top-4'
        />
        <p className='border-top border-2 border-black fw-bold pt-2'>{elem.name}</p>
      </article>
    </Link>
  )
}
