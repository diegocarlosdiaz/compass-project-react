import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../selectors/getHeroById'

export const Heroe = () => {

    const {id} = useParams();
    const navigate=useNavigate()
    

    const heroe = useMemo(() => getHeroById(id), [id])

    if(!heroe){
        return <Navigate to='/'/>
    }

    const {superhero, publisher, alter_ego, first_appearence, characters} = heroe
    return (
        <div className='row mt-4 animate_animated animate_fadeIn'>
            <div className='col-4'> 
                <img className='img-thumbnail animate_animated animate_fadeInLeft' 
                src={`../assets/heroes/${id}.jpg`} alt='{superhero}'/>
            </div>
            <div className='col-8'>
                <h3>
                    {superhero}

                </h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter Ego: </b>{alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
                    <li className='list-group-item'><b>First Appearance: </b>{first_appearence}</li>
                    

                </ul>
                <hr/>
                <h4>
                    Characters
                </h4>
                <p>
                    {characters}
                </p>
                <button className='btn btn-outline-dark' onClick={()=> navigate(-1)}>
                    Go Back !
                </button>

            </div>
        </div>
    )
}
