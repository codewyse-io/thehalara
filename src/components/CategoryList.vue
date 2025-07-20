<template>
<section class="category">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="category_list">
                    <ul class="slider" ref="slider">
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/images/homeCategory1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Jogers & Pants</h3>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/images/homeCategory1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Jogers & Pants</h3>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/images/homeCategory1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Jogers & Pants</h3>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/images/homeCategory1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Jogers & Pants</h3>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/images/homeCategory1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Jogers & Pants</h3>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/images/homeCategory1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Jogers & Pants</h3>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/images/homeCategory1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Jogers & Pants</h3>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/images/homeCategory1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Jogers & Pants</h3>
                                </div>
                            </div></a>
                        </li>
                        <li>
                            <a href=""><div class="cat_box_list">
                                <img :src="require('../assets/images/homeCategory1.webp')" alt="">
                                <div class="cat_info">
                                    <h3>Jogers & Pants</h3>
                                </div>
                            </div></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

</template>





<script>
import 'jquery';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jquery from 'jquery';

export default {
    mounted() {
        // Initialize Slick Slider
        jquery(this.$refs.slider).slick({
            // Slick Slider options
            infinite: false,
            slidesToShow: window.screen.width < 700 ? 3 : 7,
            slidesToScroll: 1,
            arrows: true,
            responsive: []
            // Add more options as needed
        });
    },
};
</script>




<style scoped>
section.category {
    padding: 40px 0;
}

.category_list ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}

.category_list ul li .cat_box_list {padding: 10px 10px 10px 10px;}

.category_list ul li .cat_box_list img {
    width: 222px;
    height: 191px ;
    object-fit: cover;
    border: 1px solid #66666650;
}

.category_list ul li .cat_box_list .cat_info {
    color: black;
    left: 15px;
    text-align: start;
}


.category_list ul li .cat_box_list .cat_info h3 {
    color: black;
    font-size: 20px;
    font-weight: 700;
    margin-top: 17px;
    /* padding-right: 32px; */
    /* word-wrap: break-word; */
}

.category_list ul li .cat_box_list .cat_info span {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
}


</style>