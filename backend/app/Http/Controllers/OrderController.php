<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\OrderDetail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::all()->load("order_details");

        return response()->json([
            'status' => 200,
            'categories' => $orders,
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
     * @param  \App\Http\Requests\StoreOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderRequest $request)
    {
        DB::beginTransaction();
        try {

            $order = Order::create([
                'name' => $request->input('name'),
                'phone' => $request->input('phone'),
                'address' => $request->input('address'),
                'city' => $request->input('city'),
                'date' => $request->input('date'),
                'items_price' => $request->input('items_price'),
                'shipping_price' => $request->input('shipping_price'),
                'tax_price' => $request->input('tax_price'),
                'total_price' => $request->input('total_price'),
                'cus_id' => $request->input('cus_id'),
                'emp_id' => $request->input('emp_id'),
                'status_id' => $request->input('status_idstatus_id'),
            ]);


            $items = json_decode($request->input('orderItems'), true);

            foreach ($items as $item) {
                $orderDetals = OrderDetail::create([
                    'order_id' => $order->id,
                    'product_id' => $item['product_id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                    'subtotal' => $item['subtotal'],
                ]);
            }
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::find($id)->load("order_detail");
        if (!$order)
            return response()->json(['status' => 404, 'message' => 'Order not found']);

        return response()->json(['order' => $order]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOrderRequest  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOrderRequest $request, $id)
    {
        $order = Order::find($id);
        if (!$order) {
            return response()->json(['status' => 404, 'message' => 'Order not found']);
        }

        $order->update($request->all());
        return response()->json(['status' => 200, 'message' => 'Updated successfully', 'order' => $order]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order = Order::find($id);
        if (!$order) {
            return response()->json(['status' => 404, 'message' => 'Order not found']);
        }
        $order->delete();
        return response()->json([
            'status' => 200, 'message' => 'Deleted successfully'
        ]);
    }
}
