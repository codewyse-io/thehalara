<template>


 
<section class="about_sec_1">
        <div class="container-fluid">
            <div class="first_fold">
                <img :src="require('../assets/images/aboutBanner.jpg')" alt="">
            </div>
            <div class="second_fold">
                <img :src="require('../assets/images/about_fold2.jpg')" alt="">
            </div>
            <!-- <div class="third_fold">
                <a href=""><img :src="require('../assets/images/about_fold2.jpg')" alt=""></a>
            </div> -->
            <div class="third_fold">
                <a href=""><img :src="require('../assets/images/about_fold3.jpg')" alt=""></a>
            </div>
            <div class="third_fold">
                <a href=""><img :src="require('../assets/images/about_fold4.jpg')" alt=""></a>
            </div>
            <div class="third_fold">
                <a href=""><img :src="require('../assets/images/about_fold5.jpg')" alt=""></a>
            </div>
            <div class="third_fold">
                <a href=""><img :src="require('../assets/images/about_fold6.jpg')" alt=""></a>
            </div>
            <div class="third_fold">
                <a href=""><img :src="require('../assets/images/about_fold7.jpg')" alt=""></a>
            </div>
        </div>
    </section>


<FooterSection />

</template>




<script>

import FooterSection from "@/components/FooterSection.vue"



  export default {
      name: 'AboutUs',
      components: {
        FooterSection,
      }
  };
  </script>