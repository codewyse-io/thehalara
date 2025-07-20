<template>
<section class="blog_details">
    <div class="container">
        <div class="row">
      <div class="col-md-12">
        <div class="blog_post_details">
            <h2>Halara's Active Dress: The Inside Story on Its Explosive Growth</h2>
            <h5 class="mt-5 text-start">The Humble Beginnings of Our Active Dress</h5>
            <p class="text-start">Before our active dresses became a hit, Halara was all about selling athleisure products like leggings, tops, and shorts that were both comfortable and looked good. But then, things took an exciting turn. In the spring and summer of 2021, we introduced our now-famous Active Dress. It was our first venture beyond what we typically did, and wow, did you all make it blow up! With our active dress launch, we aimed to create something that makes women look cute and feel incredibly comfortable. We imagined an active dress that would let you run, play, and tackle the day without sacrificing your style – especially for the mothers among us. Whether you're pregnant and chasing toddlers around the park or out and about on your daily errands, we wanted you to feel confident and cute, all with the help of built-in shorts, bra, and yes, even pockets.</p>
            <p class="text-start">But what really influenced us to keep developing our active dresses was how you all responded to these features and refinements. You all loved the built-in functionality – no more hunting for the perfect bra, removing the entire dress to use the restroom, or worrying about wardrobe malfunctions.</p>
            <p class="text-start">Taking this to heart, we went back to the drawing board. But this time, we weren't alone. With feedback from over 10,000 customers through surveys, social media listening, and insights from influencers, we explored 50 different designs. You spoke: we listened. Together, we set out to innovate a solution that would keep you comfortable, covered, and confident no matter what.</p>

            <img :src="require('../assets/images/blog_details.jpg')">
            <h2 class="mt-4 text-start">Innovations Inspired by YOU</h2>
            <p class="text-start">Our current selection of active dresses is something we're really proud of, here at Halara, and it’s all because of a bit of innovation and loads of input from folks like you. One of the coolest innovations we've introduced based on your feedback is our semi-detachable shorts. Yep, you read that right. This means you get to enjoy the freedom of an active dress with the practicality of shorts without any of the hassle when you use the restroom. It’s a simple tweak that’s made a world of a difference, and it’s all thanks to our commitment to crowd-sourced design ideas.</p>
            <p class="text-start">That's not all! Our active dresses are also all about the feel-good factor: literally. The fabric we use? Imagine the lightest, airiest material you can think of, and that’s what we’re working with. It’s designed to stretch, breathe and move as you move. Keeping you cool and comfortable no matter what your day holds. And let’s not forget about the pockets. Because let’s face it, everyone loves a good pocket. It’s a small detail, but it makes all the difference, giving you a handy spot to stash your essentials so you can go about your day hands-free and worry-free.</p>
            <h2 class="mt-4 text-start">More Than Just A Dress</h2>
            <p class="text-start">Ultimately, this whole journey pushed us to rethink what active dress really means. It's not just for sports or breaking a sweat in the gym (though it's perfect for that too); it’s for everyone and anyone. Think of our active dresses as your go-to, whether you're pumping iron, running errands, or out on a dinner date. It’s about freedom - to move, to be comfortable, and to look great doing it.</p>
            <p class="text-start">This journey has also led us to a deeper understanding of our purpose and place in your lives. From feedback to fashion, this entire adventure highlights what we're all about: a good chat, loads of innovation, and our fabulous community. Whether you’re leaping, lounging, or living it up, our active dresses are here to make every moment better. And that’s a promise, from us to you</p>
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

<style scoped>
.main_row_images .main_slider ul.slider {
    display: flex;
    list-style: none;
    flex-direction: column;
    padding: 0;
}

.main_row_images .main_slider ul.slider li {
    display: flex;
    margin: 0 0 20px 0;
}

.main_row_images .main_slider ul.slider li img {
    width: 80px;
    height: 107px;
}

.main_row_images .main_slider {
    display: flex;
    padding: 0;
    justify-content: center;
}

.main_row_images .main_slider ul.slider {
    flex: 0 0 20%;
}

.main_row_images .main_slider ul.slider1 {
    padding: 0;
    margin: 0;
}

.main_row_images .main_slider ul.slider1 li img {
    width: 100%;
    border-radius: 30px;
}

section.product_detail {
    padding: 60px 0;
}

.modal-content {
    width: 800px !important;
    margin: 0 auto !important;
    left: -110px;
}
.modal-body h2 {
    text-align: center;
    margin: 10px 0 30px 0;
}

input.flatpickr-input {
    visibility: hidden;
}

.flatpickr-calendar.animate.inline {
    top: -30px;
    width: 100%;
}

.images_slider img {
    width: 100%;
}

.images_slider img {width: 100%;}

.close_modal_btn {
    position: absolute;
    top: 6px;
    left: unset;
    right: 5px;
}

.close_modal_btn button.close {
    border: 0;
    background: transparent;
    font-size: 32px;
}
</style>
