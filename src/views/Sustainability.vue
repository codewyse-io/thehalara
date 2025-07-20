<template>
<section class="about_sec_1">
        <div class="container-fluid">
            <div class="first_fold">
                <img :src="require('../assets/images/sustain1.jpg')" alt="">
            </div>
            <div class="second_fold">
                <img :src="require('../assets/images/sustain2.jpg')" alt="">
            </div>
            <!-- <div class="third_fold">
                <a href=""><img :src="require('../assets/images/about_fold2.jpg')" alt=""></a>
            </div> -->
            <div class="third_fold">
                <img :src="require('../assets/images/sustain3.jpg')" alt="">
            </div>
            <div class="third_fold">
                <a href=""><img :src="require('../assets/images/sustain4.png')" alt=""></a>
            </div>
            <div class="third_fold">
                <a href=""><img :src="require('../assets/images/sustain5.jpg')" alt=""></a>
            </div>
           
        </div>
    </section>

<FooterSection />
</template>

    
<script>
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'ProductCategory',
    components: {
        FooterSection,
    }
};
</script>
