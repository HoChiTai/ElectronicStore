<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function categories()
    {
        return $this->belongsTo('App\Models\Category', 'cate_id');
    }

    public function brands()
    {
        return $this->belongsTo('App\Models\Brand', 'brand_id');
    }
}
