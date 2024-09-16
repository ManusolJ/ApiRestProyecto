import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/pokemon/';

const EditPokemon = () => {
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [habilidad, setHabilidad] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    
    // Función para manejar la actualización
    const update = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${endpoint}${id}`, {
                nombre: nombre,
                tipo: tipo,
                peso: peso,
                altura: altura,
                habilidad: habilidad
            });
            // Redirigir a la página principal de Pokémon después de actualizar
            navigate('/');  // Cambia esta ruta si la lista de Pokémon está en otra ruta
        } catch (error) {
            console.error("Error updating Pokémon:", error);
        }
    };

    useEffect(() => {
        const getPokemonById = async () => {
            try {
                const response = await axios.get(`${endpoint}${id}`);
                setNombre(response.data.nombre);
                setTipo(response.data.tipo);
                setPeso(response.data.peso);
                setAltura(response.data.altura);
                setHabilidad(response.data.habilidad);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        };
        getPokemonById();
    }, [id]);

    return (
        <div>
            <h2>Edit Pokemon</h2>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Tipo</label>
                    <input
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Peso</label>
                    <input
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Altura</label>
                    <input
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Habilidad</label>
                    <input
                        value={habilidad}
                        onChange={(e) => setHabilidad(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <button type='submit' className='btn btn-success'>Update</button>
            </form>
        </div>
    );
};

export default EditPokemon;
