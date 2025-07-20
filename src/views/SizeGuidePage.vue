<template>
<section class="sec_privacy">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
              <div class="guide_size">
                <p>What's My Size?! Don't know your size? Don't freak out, we got you! Let us help you find your perfect size.</p>
                <ul>
                    <li>
                        <a href="">1. Where is the size guide displayed? ></a>
                    </li>
                    <li>
                        <a href="">2. How do I choose my size? ></a>
                    </li>                    <li>
                        <a href="">3. How do I know what size the model is wearing? ></a>
                    </li>
                </ul>
                <img :src="require('../assets/images/guide1.jpg')">
                <p class="mt-3"><b>2 How do I choose my size?</b></p>
                <p>Once you've found our 'Size Chart' page, you'll see a 'Size Chart ' section of the page. Here you'll be able to take your three measurements (bust, waist, and hips) and convert those measurements into various sizes. We offer two size charts: centimeters (cm) and inches. This way you'll easily be able to find your size without having to convert a bunch of numbers into even more numbers.</p>
                <img :src="require('../assets/images/guide2.jpg')">
                <p>Next, you'll see the 'How to Measure your Body' section at the bottom of the page. Here you'll see instructions on how to properly measure several different areas of your body: bust, waist, and hips.</p>
                <img :src="require('../assets/images/guide3.jpg')">
                <p class="mt-3"><b>3 How do I know what size the model is wearing?</b></p>
                <p>To see the size that the model in the product picture is wearing, simply scroll until you see 'Model Stats'. Here you'll find the size that the model is wearing in the picture as well as the model's measurements (height, bust, waist, hips).</p>
                <img :src="require('../assets/images/guide4.png')">

              </div>
            </div>
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
