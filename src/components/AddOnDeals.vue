<template>
<section class="add_on_deals">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="main_addOn">
                    <div class="main_two_sec">
                        <div class="frst_add_on">
                            <div class="icon_addON">
                                <img :src="require('../assets/images/addOn.png')">
                                <p>Select 0/1</p>
                            </div>
                            <p>Shop a minimum of $79.57 to get Add-on Deals from $13.58</p>
                        </div>
                        <div class="seond_sides_addon">
                            <a href="" class="shop_now"> Shop Now  <i class="fa-solid fa-chevron-right"></i></a>
                        </div>
                    </div>
                    <div class="main_slides_addon">
                        <ul class="slider" ref="slider">
                            <li>
                                <div class="add_produsc">
                                    <div class="pro_img">
                                        <img :src="require('../assets/images/add_pro.jpg')">
                                    </div>
                                    <div class="pro_cont">
                                        <p><em><del>$41.09 CAD</del></em></p>
                                        <p class="bold_color">$17.70 CAD</p>
                                        <div class="add_on icconnn">+</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="add_produsc">
                                    <div class="pro_img">
                                        <img :src="require('../assets/images/add_pro.jpg')">
                                    </div>
                                    <div class="pro_cont">
                                        <p><em><del>$41.09 CAD</del></em></p>
                                        <p class="bold_color">$17.70 CAD</p>
                                        <div class="add_on icconnn">+</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="add_produsc">
                                    <div class="pro_img">
                                        <img :src="require('../assets/images/add_pro.jpg')">
                                    </div>
                                    <div class="pro_cont">
                                        <p><em><del>$41.09 CAD</del></em></p>
                                        <p class="bold_color">$17.70 CAD</p>
                                        <div class="add_on icconnn">+</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="add_produsc">
                                    <div class="pro_img">
                                        <img :src="require('../assets/images/add_pro.jpg')">
                                    </div>
                                    <div class="pro_cont">
                                        <p><em><del>$41.09 CAD</del></em></p>
                                        <p class="bold_color">$17.70 CAD</p>
                                        <div class="add_on icconnn">+</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="add_produsc">
                                    <div class="pro_img">
                                        <img :src="require('../assets/images/add_pro.jpg')">
                                    </div>
                                    <div class="pro_cont">
                                        <p><em><del>$41.09 CAD</del></em></p>
                                        <p class="bold_color">$17.70 CAD</p>
                                        <div class="add_on icconnn">+</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
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
            slidesToShow: window.screen.width < 700 ? 2 : 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: []
            // Add more options as needed
        });
    },


}


</script>