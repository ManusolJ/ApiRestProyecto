import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/pokemon'
const CreatePokemon = () => {

    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [habilidad, setHabilidad] = useState('')

    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {nombre: nombre, tipo: tipo, altura: altura, peso: peso, habilidad: habilidad})
        navigate('/')

    }
  return (
    <div>
        <h2>Crea un nuevo pokemon</h2>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre} 
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Tipo</label>
                <input 
                    value={tipo} 
                    onChange={ (e)=> setTipo(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Altura</label>
                <input 
                    value={altura} 
                    onChange={ (e)=> setAltura(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Peso</label>
                <input 
                    value={peso} 
                    onChange={ (e)=> setPeso(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Habilidad</label>
                <input 
                    value={habilidad} 
                    onChange={ (e)=> setHabilidad(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

           

            <button type='submit' className='btn btn-success'>Guardar</button>
        </form>
    </div>
  )
}

export default CreatePokemon