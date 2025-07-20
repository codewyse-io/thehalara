<template>
    <section class="product_anner">
        <div class="contaienr-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="bannerProduct">
                        <img :src="require('../assets/images/productBanner.webp')" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
<section class="product_list">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="filter-product">
                    <h2>Filter</h2>
                    <hr>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Size
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="sizes_btn">
                                        <ul>
                                            <li><button class="sizes">10/M</button></li>
                                            <li><button class="sizes">12/L</button></li>
                                            <li><button disabled class="sizes">12/L</button></li>
                                            <li><button class="sizes">14-16/1X</button></li>
                                            <li><button disabled class="sizes">16/1X</button></li>
                                            <li><button disabled class="sizes">18/2X</button></li>
                                            <li><button class="sizes">18-20/2X</button></li>
                                            <li><button disabled class="sizes">20/2X</button></li>
                                            <li><button disabled class="sizes">22/3X</button></li>
                                            <li><button class="sizes">22-24/3X</button></li>
                                            <li><button class="sizes">26/4X</button></li>
                                            <li><button class="sizes">28/5X</button></li>
                                            <li><button class="sizes">30/6X</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Price
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="input_ranges">
                                        <form action="">
                                            <div class="input_gie">
                                                <input type="text" id="volumeText" name="volumeText" :value="volumeValue">
                                                <input type="text" id="volumeText" name="volumeText" :value="volumeValue2">
                                            </div>
                                            <input type="range" id="volume" name="volume" min="1" max="100" v-model="volumeValue">

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Color
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="colors_select">
                                        <ul>
                                            <li><span class="white"></span>White</li>
                                            <li><span class="black"></span>black</li>
                                            <li><span class="green"></span>green</li>
                                            <li><span class="lightgreen"></span>Light Green</li>
                                            <li><span class="white"></span>White</li>
                                            <li><span class="black"></span>black</li>
                                            <li><span class="green"></span>green</li>
                                            <li><span class="lightgreen"></span>Light Green</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <ProductList />
            </div>
        </div>
    </div>
</section>

<section class="material_product_content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="main_product_para">
                    <div class="first_para">
                        <p>Looking for the perfect everyday dress? Look no further than our popular Halara's Dresses & Skirts 2023 Collection. With a range of athleisure styles and designs to choose from, you're sure to find something that suits your personal taste and lifestyle. You can think of exercise dresses, high waisted designs and casual sporty looks with sizes ranging from XS to 4XL. Plus size clothing? Yes! Built-in shorts? Yes! Pockets? Yes!</p>
                        <p>The collection includes a variety of casual dresses that are perfect for everyday wear. Made from super stretchy, breathable fabrics, these dresses are designed to keep you cool and comfortable throughout the day. The designs are simple and versatile, so you can dress them up or down depending on the occasion. Whether you're running errands or meeting friends for lunch, these dresses are the perfect choice for any casual activity.</p>
                        <p>One popular style in the collection is the t-shirt dress. This simple yet stylish dress features a relaxed, t-shirt style top and a flowy, knee-length skirt. The design is both comfy and flattering, making it the perfect choice for a casual day out. Our dresses come in a range of colors ranging from navy blue, to lush green, pink and all-black to burgundy red and classic white for the ultimate sporty look.</p>

                    </div>
                    <div class="first_para">
                        <p>If you're looking for something a little more dressed up, Halara's Dresses & Skirts collection also includes a range of more formal styles. From elegant maxi dresses to chic cocktail dresses, you'll find something that's perfect for any occasion. The dresses are designed with both style and comfort in mind, so you can look and feel your best no matter where you're going without breaking the bank.</p>
                        <p>So why wait? Browse our Dresses & Skirts collection today and find the perfect everyday dress for your wardrobe. With its range of stylish and versatile designs, you're sure to find something that you'll love wearing again and again.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<FooterSection />
</template>

  
<script>
import ProductList from "@/components/ProductList.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'ProductCategory',
    components: {
        ProductList,
        FooterSection,
    },
    data() {
        return {
            volumeValue: 1,
            volumeValue2: 400,
        }
    },
    watch: {
        volumeValue(newValue) {
            // Ensure newValue is a number
            const volume = parseInt(newValue);
            this.volumeValue = isNaN(volume) ? 1 : Math.min(Math.max(volume, 1), 100);
        }
    },
};
</script>
