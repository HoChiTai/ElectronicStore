<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    protected $PAGE_SIZE = 2;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $products = Product::select('id', 'name', 'slug', 'price', 'stock', 'rating', 'numReviews', 'image', 'cate_id', 'brand_id')->get();
        return response()->json([
            'status' => 200,
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        $product = Product::create($request->all());
        return response()->json([
            'status' => 200,
            'message' => 'Inserted successfully',
            'product' => $product,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);
        if (!$product)
            return response()->json(['status' => 404, 'message' => 'Product not found']);

        $product->load(['categories', 'brands']);

        return response()->json(['status' => 200, 'product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['status' => 404, 'message' => 'Product not found']);
        }

        $product->update($request->all());
        return response()->json(['status' => 200, 'message' => 'Updated successfully', 'product' => $product]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['status' => 404, 'message' => 'Product not found']);
        }
        $product->delete();
        return response()->json([
            'status' => 200, 'message' => 'Deleted successfully'
        ]);
    }

    public function search(Request $request)
    {
        $searchQuery =  $request->get('query') != "all" ? $request->get('query') : '';
        $priceMin = $request->priceMin != "all" ? $request->priceMin : '';
        $priceMax = $request->priceMax != "all" ? $request->priceMax : '';
        $rating = $request->rating != "all" ? $request->rating : '';
        $category = $request->selectCate ?  $request->selectCate : [];
        $brand = $request->selectBrand ? $request->selectBrand : [];
        $page = $request->page ? $request->page : 1;
        $pageSize = $request->pageSize ? $request->pageSize : $this->PAGE_SIZE;
        $order = $request->order ? $request->order : "price";
        $trend = $request->trend ? $request->trend : "desc";

        $products = Product::when($searchQuery != '', function ($query) use ($searchQuery) {
            $query->where('name', 'like', '%' . $searchQuery . '%');
        })
            ->when($priceMax != '', function ($query) use ($priceMax, $priceMin) {
                $query->where('price', '>=', $priceMin)->where('price', '<=', $priceMax);
            })
            ->when(!empty($category), function ($query) use ($category) {
                $query->whereIn('cate_id', $category);
            })
            ->when(!empty($brand), function ($query) use ($brand) {
                $query->whereIn('brand_id', $brand);
            })
            ->when($rating != '', function ($query) use ($rating) {
                $query->where('rating', '>=', $rating);
            })

            ->orderBy($order, $trend)
            //->toSql();
            //->select('id', 'name', 'price', 'stock', 'rating', 'numReviews', 'image', 'cate_id', 'brand_id')
            ->paginate($pageSize, ['id', 'name', 'price', 'stock', 'rating', 'numReviews', 'image', 'cate_id', 'brand_id'], 'page', $page);

        return response()->json([
            'status' => 200,
            'message' => 'Search successfully',
            'products' => $products,
        ]);
    }

    public function findSlug($slug)
    {
        $product = Product::where('slug', $slug)->get();
        if (!$product)
            return response()->json(['status' => 404, 'message' => 'Product not found']);

        $product->load(['categories', 'brands']);

        return response()->json(['status' => 200, 'product' => $product]);
    }
}
