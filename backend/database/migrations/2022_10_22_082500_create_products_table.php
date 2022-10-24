<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->integer('stock');
            $table->double('price');
            $table->string('image');
            $table->double('screen');
            $table->integer('fcam');
            $table->integer('bcam');
            $table->string('os');
            $table->string('cpu');
            $table->string('gpu');
            $table->integer('ram');
            $table->integer('rom');
            $table->integer('battery');
            $table->double('weight');
            $table->date('released');
            $table->text('description');
            $table->foreignId('cate_id')->index()->constrained()->on('categories')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('brand_id')->index()->constrained()->on('brands')->cascadeOnDelete()->cascadeOnUpdate();
            $table->double('rating');
            $table->integer('numReviews');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
