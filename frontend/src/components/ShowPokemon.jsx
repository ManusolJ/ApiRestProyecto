import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api' 

const ShowPokemon = () => {

const [Pokemon, setPokemon] =useState([])
useEffect(() => {
    getAllPokemon()
}, [])


const getAllPokemon = async () => {
    const response = await axios.get(`${endpoint}/pokemon`)
    setPokemon(response.data) /* Revisar si es Pokemon con mayusc */
}


const deletePokemon = async (id) => {

    await axios.delete(`${endpoint}/pokemon/${id}`)
    getAllPokemon()

}
return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Altura</th>
                    <th>Peso</th>
                    <th>Habilidad</th>
                </tr>
            </thead>
            <tbody>
                {Pokemon.map((pokemon) => (
                    <tr key={pokemon.id}>
                        <td>{pokemon.nombre}</td>
                        <td>{pokemon.tipo}</td>
                        <td>{pokemon.altura}</td>
                        <td>{pokemon.peso}</td>
                        <td>{pokemon.habilidad}</td>
                    
                        <td>
                            <Link to={'/edit/${pokemon.id}'} className='btn btn-info'>Edit</Link>
                            <button onClick={() => deletePokemon(pokemon.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)
}

export default ShowPokemon


