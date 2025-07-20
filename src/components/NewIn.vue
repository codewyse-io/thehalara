<template>
    <div class="best_selling_prod">
        <ul >
            <li>
                <a href="">
                    <div class="product_slider">
                        <div class="both_img">
                            <div class="first_img">
                                <img :src="firstImageUrl" alt="">
                                <img :class="{ parent: true, variation: isHovered }" class="black opacity" :src="blackHoverImageUrl" alt="">
                                <img :class="{ parent1: true, variation1: isHovered1 }" class="gray opacity" :src="grayHoverImageUrl" alt="">
    
                            </div>

                        </div>
                        <div class="product_head">
                            <div class="varriation">
                                <span @mouseover="toggleHover(true)" @mouseout="toggleHover(false)">
                                    <img :src="blackImageUrl" alt="">
                                </span>
                                <span @mouseover="toggleHover1(true)" @mouseout="toggleHover1(false)">
                                    <img :src="grayImageUrl" alt="">
                                </span>
                            </div>
                            <p>Flowy Waffle Jumpsuit</p>
                            <ul>
                                <li><b>$29.95</b></li>
                                <li><del>$39.95</del></li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="product_slider">
                        <div class="both_img">
                            <div class="first_img">
                                <img :src="firstImageUrl" alt="">
                                <img :class="{ parent: true, variation: isHovered }" class="black opacity" :src="blackHoverImageUrl" alt="">
                                <img :class="{ parent1: true, variation1: isHovered1 }" class="gray opacity" :src="grayHoverImageUrl" alt="">
    
                            </div>

                        </div>
                        <div class="product_head">
                            <div class="varriation">
                                <span @mouseover="toggleHover(true)" @mouseout="toggleHover(false)">
                                    <img :src="blackImageUrl" alt="">
                                </span>
                                <span @mouseover="toggleHover1(true)" @mouseout="toggleHover1(false)">
                                    <img :src="grayImageUrl" alt="">
                                </span>
                            </div>
                            <p>Flowy Waffle Jumpsuit</p>
                            <ul>
                                <li><b>$29.95</b></li>
                                <li><del>$39.95</del></li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="product_slider">
                        <div class="both_img">
                            <div class="first_img">
                                <img :src="firstImageUrl" alt="">
                                <img :class="{ parent: true, variation: isHovered }" class="black opacity" :src="blackHoverImageUrl" alt="">
                                <img :class="{ parent1: true, variation1: isHovered1 }" class="gray opacity" :src="grayHoverImageUrl" alt="">
    
                            </div>

                        </div>
                        <div class="product_head">
                            <div class="varriation">
                                <span @mouseover="toggleHover(true)" @mouseout="toggleHover(false)">
                                    <img :src="blackImageUrl" alt="">
                                </span>
                                <span @mouseover="toggleHover1(true)" @mouseout="toggleHover1(false)">
                                    <img :src="grayImageUrl" alt="">
                                </span>
                            </div>
                            <p>Flowy Waffle Jumpsuit</p>
                            <ul>
                                <li><b>$29.95</b></li>
                                <li><del>$39.95</del></li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="product_slider">
                        <div class="both_img">
                            <div class="first_img">
                                <img :src="firstImageUrl" alt="">
                                <img :class="{ parent: true, variation: isHovered }" class="black opacity" :src="blackHoverImageUrl" alt="">
                                <img :class="{ parent1: true, variation1: isHovered1 }" class="gray opacity" :src="grayHoverImageUrl" alt="">
    
                            </div>

                        </div>
                        <div class="product_head">
                            <div class="varriation">
                                <span @mouseover="toggleHover(true)" @mouseout="toggleHover(false)">
                                    <img :src="blackImageUrl" alt="">
                                </span>
                                <span @mouseover="toggleHover1(true)" @mouseout="toggleHover1(false)">
                                    <img :src="grayImageUrl" alt="">
                                </span>
                            </div>
                            <p>Flowy Waffle Jumpsuit</p>
                            <ul>
                                <li><b>$29.95</b></li>
                                <li><del>$39.95</del></li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="product_slider">
                        <div class="both_img">
                            <div class="first_img">
                                <img :src="firstImageUrl" alt="">
                                <img :class="{ parent: true, variation: isHovered }" class="black opacity" :src="blackHoverImageUrl" alt="">
                                <img :class="{ parent1: true, variation1: isHovered1 }" class="gray opacity" :src="grayHoverImageUrl" alt="">
    
                            </div>

                        </div>
                        <div class="product_head">
                            <div class="varriation">
                                <span @mouseover="toggleHover(true)" @mouseout="toggleHover(false)">
                                    <img :src="blackImageUrl" alt="">
                                </span>
                                <span @mouseover="toggleHover1(true)" @mouseout="toggleHover1(false)">
                                    <img :src="grayImageUrl" alt="">
                                </span>
                            </div>
                            <p>Flowy Waffle Jumpsuit</p>
                            <ul>
                                <li><b>$29.95</b></li>
                                <li><del>$39.95</del></li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="product_slider">
                        <div class="both_img">
                            <div class="first_img">
                                <img :src="firstImageUrl" alt="">
                                <img :class="{ parent: true, variation: isHovered }" class="black opacity" :src="blackHoverImageUrl" alt="">
                                <img :class="{ parent1: true, variation1: isHovered1 }" class="gray opacity" :src="grayHoverImageUrl" alt="">
    
                            </div>

                        </div>
                        <div class="product_head">
                            <div class="varriation">
                                <span @mouseover="toggleHover(true)" @mouseout="toggleHover(false)">
                                    <img :src="blackImageUrl" alt="">
                                </span>
                                <span @mouseover="toggleHover1(true)" @mouseout="toggleHover1(false)">
                                    <img :src="grayImageUrl" alt="">
                                </span>
                            </div>
                            <p>Flowy Waffle Jumpsuit</p>
                            <ul>
                                <li><b>$29.95</b></li>
                                <li><del>$39.95</del></li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="product_slider">
                        <div class="both_img">
                            <div class="first_img">
                                <img :src="firstImageUrl" alt="">
                                <img :class="{ parent: true, variation: isHovered }" class="black opacity" :src="blackHoverImageUrl" alt="">
                                <img :class="{ parent1: true, variation1: isHovered1 }" class="gray opacity" :src="grayHoverImageUrl" alt="">
    
                            </div>

                        </div>
                        <div class="product_head">
                            <div class="varriation">
                                <span @mouseover="toggleHover(true)" @mouseout="toggleHover(false)">
                                    <img :src="blackImageUrl" alt="">
                                </span>
                                <span @mouseover="toggleHover1(true)" @mouseout="toggleHover1(false)">
                                    <img :src="grayImageUrl" alt="">
                                </span>
                            </div>
                            <p>Flowy Waffle Jumpsuit</p>
                            <ul>
                                <li><b>$29.95</b></li>
                                <li><del>$39.95</del></li>
                            </ul>
                        </div>
                    </div>
                </a>
            </li>
            
    
        </ul>
    </div>
    </template>
    
    <script>
    export default {
        data() {
            return {
                isHovered: false,
                isHovered1: false,
                firstImageUrl: require('../assets/images/trendingProduct1.webp'),
                blackHoverImageUrl: require('../assets/images/trendingProduct1.webp'),
                grayHoverImageUrl: require('../assets/images/trendingProduct1_1.webp'),
                blackImageUrl: require('../assets/images/black.webp'),
                grayImageUrl: require('../assets/images/gray.webp')
            };
        },
        methods: {
            toggleHover(value) {
                this.isHovered = value;
            },
            toggleHover1(value) {
                this.isHovered1 = value;
            }
        },
      
    };
    </script>
    
    <style>
    .opacity {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        max-height: 320px;
        transition: opacity 1.2s;
        width: 100%;
    }
    
    .variation img.variation {
        opacity: 1;
    }
    </style>
    