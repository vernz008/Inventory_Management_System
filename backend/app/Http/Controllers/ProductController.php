<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductModel;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $product = ProductModel::all();

            if (count($product) > 0) {
                return response()->json($product, 200);
            }else {
                return response()->json(['message' => 'No product found'], 404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            //1. Validate
            $request->validate([
                'product_name' => "required",
                'product_code' => "required",
                'description' => "required",
                'price' => "required|numeric",
            ]);

            //2. Execute the Query
            $product = ProductModel::create([
                'product_name' => $request->product_name,
                'product_code' => $request->product_code,
                'description' => $request->description,
                'price' => $request->price,
            ]);

            //3. Process the Result
            if ($product) {
                $product_all = ProductModel::all();
                return response()->json($product_all, 201);
            }else {
                return response()->json(['message' => 'Failed to add data'], 500);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $product = ProductModel::find($id);

            if ($product) {
                return response()->json($product, 200);
            }else{
                return response()->json(['message' => 'Product Not Found'], 404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
                 //1. Validate
                 $request->validate([
                    'product_name' => "required",
                    'product_code' => "required",
                    'description' => "required",
                    'price' => "required|numeric",
                ]);
    
                //2. Execute the Query
                $product = ProductModel::find($id);
    
                //3. Process the Result
                if ($product) {
                $product->product_name = $request->product_name;
                $product->product_code = $request->product_code;
                $product->description = $request->description;
                $product->price = $request->price;
                $product->save();
                
                    $product_all = ProductModel::all();
                    return response()->json($product_all, 201);
                }else {
                    return response()->json(['message' => 'Failed to update data'], 500);
                }
        } catch (\Throwable $error) {
            throw $error;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $product = ProductModel::find($id);

            if ($product) {
                $product->delete();

                $product_all = ProductModel::all();
                return response()->json($product_all, 200);
            }else{
                return response()->json(['message'=>'Product not found'],404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}