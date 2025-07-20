<template>
<section class="sec_1">
    <div class="home-slider">
        <ul ref="slider" class="slider"> 
            <li>
                <img class="desktopView" :src="require('../assets/images/bannerhome1.webp')" alt="">
            </li>
            <li>
                <img class="desktopView" :src="require('../assets/images/bannerhome2.webp')" alt="">
            </li>
            <li>
                <img class="desktopView" :src="require('../assets/images/bannerhome3.webp')" alt="">
            </li>
            <li>
                <img class="desktopView" :src="require('../assets/images/bannerhome4.webp')" alt="">
            </li>
            <li>
                <img class="desktopView" :src="require('../assets/images/bannerhome5.webp')" alt="">
            </li>
        </ul>
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
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      autoplay:false,
      // Add more options as needed
    });
  },
};
</script>

<style scoped>
section.sec_1 .home-slider ul.slider.slick-initialized.slick-slider {
    padding: 0;
    margin: 0;
}

ul.slider.slick-initialized.slick-slider li img {
    position: relative;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
    height: auto;
    margin: 0 auto;
}
section.sec_1 {
    overflow-x: hidden;
}

ul.slider.slick-initialized.slick-slider li .banner_content {
    position: absolute;
    z-index: 1;
    padding: 60px 0 0 100px;
}

</style>
