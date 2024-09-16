import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/pokemon/'

const EditPokemon = () => {

    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [habilidad, setHabilidad] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put('${endpoint}${id}', {
            nombre: nombre,
            tipo: tipo,
            alutra: altura,
            peso: peso,
            habilidad: habilidad,
        })
        navigate('/')
    }

    useEffect( () =>{

        const getPokemonId = async () => {
            const response = await axios.get('${endpoint}${id}')
            setNombre(response.data.nombre)
            setTipo(response.data.tipo)
            setAltura(response.data.altura)
            setPeso(response.data.peso)
            setHabilidad(response.data.habilidad)
        }
        getPokemonById()
        
    }, [])
  return (
    <div>
        <h2>Edit pokemon</h2>
        <form onSubmit={update}>
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

            <button type='submit' className='btn btn-success'>Actualizar</button>
        </form>
    </div>
  )
}

export default EditPokemon