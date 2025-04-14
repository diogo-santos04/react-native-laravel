<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Item;

class ItemController extends Controller
{
    // GET /item
    public function index()
    {
        return response()->json(Item::all());
    }

    // POST /item
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required',
            'descricao' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'Dados incorretos'], 400);
        }

        $item = Item::create([
            'nome' => $request->input('nome'),
            'descricao' => $request->input('descricao'),
        ]);

        return response()->json($item, 201);
    }

    // GET /item/{id}
    public function show($id)
    {
        $item = Item::find($id);

        if (!$item) {
            return response()->json(['error' => 'Item não encontrado'], 404);
        }

        return response()->json($item);
    }

    // PUT/PATCH /item/{id}
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required',
            'descricao' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'Dados inválidos'], 400);
        }

        $item = Item::find($id);

        if (!$item) {
            return response()->json(['error' => 'Item não encontrado'], 404);
        }

        $item->update([
            'nome' => $request->input('nome'),
            'descricao' => $request->input('descricao'),
        ]);

        return response()->json($item);
    }

    // DELETE /item/{id}
    public function destroy($id)
    {
        $item = Item::find($id);

        if (!$item) {
            return response()->json(['error' => 'Item não encontrado'], 404);
        }

        $item->delete();

        return response()->json(['success' => true]);
    }
}
