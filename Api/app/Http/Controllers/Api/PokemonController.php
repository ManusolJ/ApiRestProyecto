<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pokemon;

class PokemonController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pokemon = Pokemon::all();
        return $pokemon;
    }

    /**
     * Store a newly created resource in storage.
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pokemon = new Pokemon();
        $pokemon->nombre = $request->nombre;
        $pokemon->tipo = $request->tipo;
        $pokemon->altura = $request->altura;
        $pokemon->peso = $request->peso;
        $pokemon->habilidad = $request->habilidad;

        $pokemon->save();
    }

    /**
     * Display the specified resource.
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(string $id)
    {
        $pokemon = Pokemon::find($id);
        return $pokemon;
    }

    /**
     * Update the specified resource in storage.
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $pokemon = Pokemon::findOrFail($id);
        $pokemon->id = $request->id;
        $pokemon->nombre = $request->nombre;
        $pokemon->tipo = $request->tipo;
        $pokemon->altura = $request->altura;
        $pokemon->peso = $request->peso;
        $pokemon->habilidad = $request->habilidad;

        $pokemon->save();
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pokemon = Pokemon::destroy($id);
        return $pokemon;
    }
}
