<template>
<section class="product_detail">
    <div class="container">
        <div class="row">
            <div class="col-md-6 main_staticc">
                <div class="main_row_images">
                    <div class="main_slider">
                        <!-- <ul class="slider navlistslider" ref="slider">
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                        </ul> -->
                        <ul class="slider1" ref="slider1">
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                            <li>
                                <img :src="require('../assets/images/product_slider.webp')" alt="">
                            </li>
                        </ul>
                        <div class="fav-icon">
                            <i class="fa-regular fa-heart"></i>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="product_detail_content">
                    <div class="product_rat_couton">
                        <div class="inner_cop">
                            <div class="couponn">
                                <span>$41.09 CAD</span>
                            </div>
                            <div class="dell"><span>$54.81 CAD</span> <span class="box%">- 25%</span></div>

                        </div>
                        <div class="seconf_inner_rating">
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <a href="">4018</a>
                        </div>

                    </div>
                    <h4>High Waisted Plicated Side Pocket Wide Leg Waffle Work Pants</h4>
                    <div class="colors_combinations">
                        <div class="color_names">
                            <h3>colors: {{ selectedColor }}</h3>
                        </div>
                        <div class="colors">
                            <ul>
                                <li @click="changeColor('Gray')"><img :src="require('../assets/images/gray.webp')" alt=""></li>
                                <li @click="changeColor('Black')"><img :src="require('../assets/images/black.webp')" alt=""></li>
                            </ul>
                        </div>
                    </div>
                    <div class="us_size">
                        <div class="guide_size-info">
                            <h4>Inseam: {{ LengthSize }}</h4>
                            <ul>
                                <li><button @click="ChangeLength('Regular')">Regular</button></li>
                                <li><button @click="ChangeLength('Petite')">Petite</button></li>
                                <li><button @click="ChangeLength('Tall')">Tall</button></li>

                            </ul>
                        </div>
                        <div class="btn_sizes">
                            <h4>Size (US):</h4>
                            <ul>
                                <li><button @click="Size('size10/M')" class="btn_size">10/M</button></li>
                                <li><button @click="Size('size12/L')" class="btn_size">12/L</button></li>
                                <li><button @click="Size('size14-16/1X')" class="btn_size">14-16/1X</button></li>
                            </ul>

                        </div>
                        <div class="main_size_cont">
                            <h6>Body</h6>
                            <ul>
                                <li><span>Bust: </span> {{ Bust }}</li>
                                <li><span>Waist: </span> {{ Waist }}</li>
                                <li><span>Hip: </span> {{ Hip }}</li>
                            </ul>
                            <h6>Product</h6>
                            <ul>
                                <li><span>Length: </span> {{ Length }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="add_cart_btn">
                        <button class="addtocart">ADD TO BAG</button>
                    </div>
                    <div class="promotional_div">
                        <div class="promo_head">
                            <img :src="require('../assets/images/promonational_sticker.png')">
                            <span>Promotion</span>
                        </div>
                        <div class="promotional_body">
                            <a href="">
                                <img :src="require('../assets/images/promonation_details.webp')">
                            </a>
                        </div>
                    </div>
                    <div class="privay_policy_div">
                        <div class="right_privay">
                            <svg width="18" height="18" viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg">
                                <title></title>
                                <g id="SelfbuildSiteOptimization2" fill="none" fill-rule="evenodd">
                                    <g id="product" transform="translate(-24 -2223)" fill="#222" fill-rule="nonzero">
                                        <g id="Grouping-7" transform="translate(22 2080)">
                                            <g id="Grouping-13" transform="translate(2 112)">
                                                <g id="Grouping-14" transform="translate(0 31)">
                                                    <g id="product-Numbering" transform="translate(0 .7)">
                                                        <path d="M11.677.331a3.88 3.88 0 0 1 2.865-.108l.214.083 10.432 4.4a2.435 2.435 0 0 1 1.457 1.95l.016.175.339 6.3c0 7.262-4.309 13.84-10.978 16.759-1.092.478-1.917.71-2.522.71-.605 0-1.43-.232-2.522-.71A18.302 18.302 0 0 1 .003 13.488L0 13.13l.34-6.327c.047-.868.54-1.64 1.286-2.036l.152-.074 9.9-4.363zM13.9 2.44a1.68 1.68 0 0 0-1.19-.045l-.144.056-9.899 4.363a.134.134 0 0 0-.073.08l-.007.037-.337 6.252.003.28c.127 6.09 3.732 11.592 9.302 14.167l.306.138.188.08.347.14c.545.21.92.305 1.104.305.165 0 .486-.076.946-.245l.327-.126c.115-.047.238-.098.366-.154 5.744-2.513 9.478-8.105 9.608-14.304l.002-.269-.335-6.237a.137.137 0 0 0-.05-.098l-.031-.02L13.9 2.44z" id="pathway"></path>
                                                        <path d="M20.524 9.39a1.112 1.112 0 0 1 1.595-.099c.436.395.503 1.059.173 1.534l-.076.099-8.91 10.287a1.112 1.112 0 0 1-1.485.186l-.097-.076-5.03-4.42a1.175 1.175 0 0 1-.121-1.632 1.112 1.112 0 0 1 1.496-.2l.098.076 4.185 3.679 8.172-9.435z" id="pathway-102"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span>Return Policy</span>
                            <div class="pri_para">Easy returns within 30 days</div>
                        </div>
                        <div class="left_privacy"><i class="fa-solid fa-chevron-right"></i></div>
                    </div>
                    <div class="privay_policy_div">
                        <div class="right_privay">
                            <img :src="require('../assets/images/logo_desingg.png')">
                            <span>Logo Update</span>
                            <div class="pri_para">Logo has been integrated, some styles/colorways may vary. It's possible some items you receive may or may not have the brand logo.</div>
                        </div>
                    </div>
                    <div class="related_product">
                        <h2>You May Also Like</h2>
                        <div class="best_selling_prod">
                            <ul>
                                <li>
                                    <a href="">
                                        <div class="product_slider">
                                            <div class="both_img">
                                                <div class="first_img">
                                                    <img :src="firstImageUrl" alt="">
                                                    <img :class="{ parent: true, variation: isHovered }" class="black opacity" :src="blackHoverImageUrl" alt="">
                                                    <img :class="{ parent1: true, variation1: isHovered1 }" class="gray opacity" :src="grayHoverImageUrl" alt="">

                                                </div>
                                                <div class="back_img">
                                                    <img :src="require('../assets/images/second_img.webp')" alt="">

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
                                                <p>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</p>
                                                <ul>
                                                    <li><b>$33.80</b></li>
                                                    <li>Hight Stretch</li>
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
                                                <div class="back_img">
                                                    <img :src="require('../assets/images/second_img.webp')" alt="">

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
                                                <p>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</p>
                                                <ul>
                                                    <li><b>$33.80</b></li>
                                                    <li>Hight Stretch</li>
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
                                                <div class="back_img">
                                                    <img :src="require('../assets/images/second_img.webp')" alt="">

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
                                                <p>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</p>
                                                <ul>
                                                    <li><b>$33.80</b></li>
                                                    <li>Hight Stretch</li>
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
                                                <div class="back_img">
                                                    <img :src="require('../assets/images/second_img.webp')" alt="">

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
                                                <p>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</p>
                                                <ul>
                                                    <li><b>$33.80</b></li>
                                                    <li>Hight Stretch</li>
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
                                                <div class="back_img">
                                                    <img :src="require('../assets/images/second_img.webp')" alt="">

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
                                                <p>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</p>
                                                <ul>
                                                    <li><b>$33.80</b></li>
                                                    <li>Hight Stretch</li>
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
                                                <div class="back_img">
                                                    <img :src="require('../assets/images/second_img.webp')" alt="">

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
                                                <p>Supersoft Essentials Solid Pocket Adjustable Straps Jumpsuit</p>
                                                <ul>
                                                    <li><b>$33.80</b></li>
                                                    <li>Hight Stretch</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <hr>
                        <a href="">View More</a>
                    </div>
                    <div class="product_details_faqs">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Model Stats
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="model_stats">
                                            <ul>
                                                <li><img :src="require('../assets/images/model_stats.jpg')"></li>
                                                <li><span>Model Name: &nbsp; Tijana </span>
                                                    <span>Height: &nbsp; 5'7" </span>
                                                    <span>Waist: &nbsp; 26inch </span>
                                                </li>
                                                <li><span>Model Wear: &nbsp; S </span>
                                                    <span>Bust: &nbsp; 32.5inch </span>
                                                    <span>Hips: &nbsp; Hips </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Product Features
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="product_feature">
                                            <ul>
                                                <li>For: work and casual activities.</li>
                                                <li>Features:
                                                    <ul>
                                                        <li>High waist design that offers support & comfort, without sacrificing on style.</li>
                                                        <li>Designed with plicated tailoring for a textured look.</li>
                                                        <li>Featuring two side pockets for storing your essentials such as credit cards or other small items when you're on the go.</li>
                                                        <li>Wide leg style gives a timeless look, while providing comfortable wear.</li>
                                                        <li>Solid color designs that are simple yet effortlessly stylish.</li>
                                                        <li>Waffle fabric provides loose comfort and gives added texture to your look.</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Fabric & Care
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="product_feature">
                                            <p><b>Materials</b></p>
                                            <ul>
                                                <li>
                                                    97% polyester and 3% elastane
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>For: work and casual activities.</li>
                                                <li>Features:
                                                    <ul>
                                                        <li>High waist design that offers support & comfort, without sacrificing on style.</li>
                                                        <li>Designed with plicated tailoring for a textured look.</li>
                                                        <li>Featuring two side pockets for storing your essentials such as credit cards or other small items when you're on the go.</li>
                                                        <li>Wide leg style gives a timeless look, while providing comfortable wear.</li>
                                                        <li>Solid color designs that are simple yet effortlessly stylish.</li>
                                                        <li>Waffle fabric provides loose comfort and gives added texture to your look.</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        <div class="product_fleature">
                            <img :src="require('../assets/images/product_features.webp')">
                        </div>
                        
                        <div class="reviews_clientss">
                            <!-- <p><b>Shipping & Returns</b></p> -->
                            <div class="btnns">
                                <a href=""><button class="delivery">All Reviews (17)</button></a>
                                <a href=""><button class="delivery"> Add Your Review<i class="fa-solid fa-chevron-right"></i></button></a>
                            </div>
                            <div class="main_reviews">
                                <div class="first_element">
                                    <div class="rating_number">
                                        <h1>4.8</h1>
                                        <ul>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                        </ul>
                                    </div>
                                    <div class="rating_rate">
                                        <p>How did the item fit?</p>
                                        <div class="rating-bar">
                                            <div class="label">Too Small</div>
                                            <div class="bar"></div>
                                            <div class="percentage">0% <span>(0)</span></div>
                                        </div>
                                        <div class="rating-bar1">
                                            <div class="label">True to size</div>
                                            <div class="bar"></div>
                                            <div class="percentage">100% <span>(17)</span></div>
                                        </div>
                                        <div class="rating-bar">
                                            <div class="label">Too Large</div>
                                            <div class="bar"></div>
                                            <div class="percentage">0% <span>(0)</span></div>
                                        </div>

                                    </div>
                                    <hr>

                                </div>
                                <div class="second_element">
                                    <div class="Clientname">
                                        <button class="bttnImg">0</button>
                                        <h3>Odeen</h3>
                                        <p><span>Purchased: </span>Indigo 18/2X</p>
                                    </div>
                                    <div class="cleint_date">
                                        <p>Apr 14, 2024</p>
                                        <ul>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                        </ul>
                                    </div>
                                    <div class="review_description">
                                        <p>Love these so much. I have a big booty but my waist is smaller. So the elastic works amazing so there isn’ a gap. I also like the length in these</p>
                                        <hr>
                                    </div>
                                </div>
                                <div class="second_element">
                                    <div class="Clientname">
                                        <button class="bttnImg">0</button>
                                        <h3>Odeen</h3>
                                        <p><span>Purchased: </span>Indigo 18/2X</p>
                                    </div>
                                    <div class="cleint_date">
                                        <p>Apr 14, 2024</p>
                                        <ul>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                        </ul>
                                    </div>
                                    <div class="review_description">
                                        <p>Love these so much. I have a big booty but my waist is smaller. So the elastic works amazing so there isn’ a gap. I also like the length in these</p>
                                        <hr>
                                    </div>
                                </div>
                                                                <div class="second_element">
                                    <div class="Clientname">
                                        <button class="bttnImg">0</button>
                                        <h3>Odeen</h3>
                                        <p><span>Purchased: </span>Indigo 18/2X</p>
                                    </div>
                                    <div class="cleint_date">
                                        <p>Apr 14, 2024</p>
                                        <ul>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                            <li><svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9895_9779)">
                                                        <path d="M9.42857 0H2.57143C1.15127 0 0 1.15127 0 2.57143V9.42857C0 10.8487 1.15127 12 2.57143 12H9.42857C10.8487 12 12 10.8487 12 9.42857V2.57143C12 1.15127 10.8487 0 9.42857 0Z" fill="black"></path>
                                                        <!---->
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28627 8.4675C6.10593 8.3778 5.89396 8.3778 5.71362 8.4675L4.1162 9.26224C3.80046 9.41931 3.44071 9.1491 3.5036 8.80208L3.79408 7.1994C3.83332 6.98288 3.75912 6.7614 3.5974 6.61221L2.38188 5.49098C2.11563 5.24537 2.25523 4.80072 2.61408 4.7514L4.34669 4.51315C4.553 4.48478 4.73279 4.35818 4.82909 4.17354L5.61993 2.65715C5.78017 2.34996 6.21972 2.34996 6.37996 2.65715L7.1708 4.17354C7.2671 4.35818 7.44689 4.48478 7.6532 4.51315L9.38583 4.7514C9.74467 4.80072 9.88426 5.24537 9.61803 5.49098L8.40247 6.61221C8.24077 6.7614 8.16659 6.98288 8.2058 7.1994L8.49629 8.80208C8.55916 9.1491 8.19942 9.41931 7.88369 9.26224L6.28627 8.4675Z" fill="white"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9895_9779">
                                                            <rect width="12" height="12" fill="white"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg> </li>
                                        </ul>
                                    </div>
                                    <div class="review_description">
                                        <p>Love these so much. I have a big booty but my waist is smaller. So the elastic works amazing so there isn’ a gap. I also like the length in these</p>
                                        <hr>
                                    </div>
                                </div>
                                <div class="view_all_review">
                                    <a href=""><button>View all reviews</button></a>
                                </div>

                            </div>

                        </div>
                        <hr>

                    </div>
                </div>
            </div>
</div>
<!-- </div> -->
</section>
</template>

<script>
import 'jquery';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jquery from 'jquery';

export default {
    data() {
        return {
            selectedColor: 'Gray',
            LengthSize: 'Regular',
            Bust: '38.2-40.2"',
            Waist: '31.9-33.9"',
            Hip: '42.1-44.1"',
            Length: '50.6"',
            isHovered: false,
            isHovered1: false,
            firstImageUrl: require('../assets/images/first_img.webp'),
            blackHoverImageUrl: require('../assets/images/black_hover.webp'),
            grayHoverImageUrl: require('../assets/images/gray_hover.webp'),
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
        },
        changeColor(color) {
            this.selectedColor = color;
        },
        ChangeLength(LengthSize) {
            this.LengthSize = LengthSize
        },
        Size(size) {
            if (size === 'size10/M') {
                this.Bust = '38.2-40.2"';
                this.Waist = '31.9-33.9"';
                this.Hip = '42.1-44.1"';
                this.Length = '50.6"';
            } else if (size === 'size12/L') {
                this.Bust = '40.2-42.1"';
                this.Waist = '33.9-36"';
                this.Hip = '44.1-46.1"';
                this.Length = '51.3"';
            } else if (size === 'size14-16/1X') {
                this.Bust = '42.1-46.1"';
                this.Waist = '36-40.2"';
                this.Hip = '46.1-50"';
                this.Length = '52"';
            }
        },
        closeCart() {
            // Close the cart logic
            const offCanvasElement = document.getElementById('offCanvasGuide');
            console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
            if (offCanvasElement) {
                offCanvasElement.classList.remove('is-open');
            }
        },
        toggleCart() {
            // Toggle the cart open/close
            const offCanvasElement = document.getElementById('offCanvasGuide');
            console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
            if (offCanvasElement) {
                offCanvasElement.classList.toggle('is-open');
            }
        }

    },
    mounted() {
        // Initialize Slick Slider

        jquery(this.$refs.slider1).slick({
            // Slick Slider options
            autoplay: true,
            slidesToShow: window.screen.width < 700 ? 1 : 1,
            vertical: false,
            slidesPerRow: 1,
            focusOnSelect: true,
            arrows: false,
            responsive: []
            // Add more options as needed
        });
    },
};
</script>

<style scoped>
section.product_detail {
    padding: 60px 0;
}

.fav-icon {
    position: absolute;
    left: unset;
    right: 30px;
    top: 10px;
}

.main_row_images {
    position: relative;
}

.fav-icon svg {
    font-size: 28px;
}

.product_detail_content h2 {
    text-align: start;
    font-size: 35px;
    margin: 0 0 14px 0;
}

.product_detail_content .price {
    text-align: start;
}

.product_detail_content .price h4 {
    font-size: 35px;
    font-weight: 700;
}

.product_detail_content .colors_combinations {
    text-align: start;
}

.product_detail_content .colors_combinations .color_names h3 {
    font-size: 20px;
    margin: 0 0 20px 0;
}

.product_detail_content .colors_combinations .colors ul {
    display: flex;
    list-style: none;
    gap: 11px;
    padding: 0;
}

.product_detail_content .colors_combinations .colors ul li img {
    width: 40px;
    height: 40px;
    border-radius: 40px;
}

.product_detail_content .us_size .guide_size-info button.guide_sizes {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    border: 0;
    padding: 4px 20px 4px 20px;
    border-radius: 10px;
    margin: 0 0 20px 0;
}

.product_detail_content .us_size .btn_sizes ul {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 11px;
}

.product_detail_content .us_size .btn_sizes ul li button {
    background: white;
    border-radius: 10px;
    padding: 4px 20px 4px 20px;
}

.product_detail_content .main_size_cont h6 {
    text-align: start;
    padding: 0 0 0 20px;
    font-size: 21px;
    font-weight: 700;
}

.product_detail_content .main_size_cont ul {
    display: flex;
    list-style: none;
    gap: 40px;
    padding: 0 0 0 20px;
}

.product_detail_content .main_size_cont {
    background: lightgray;
    padding: 6px 5px 6px 6px;
    border-radius: 11px;
}

.product_detail_content .add_cart_btn button.addtocart {
    width: 100%;
    margin: 20px 0 15px 0;
    background: black;
    color: white;
    padding: 10px 0 10px 0;
    border-radius: 10px;
}

.product_detail_content .product_description {
    text-align: start;
}

.product_detail_content .shipping_poli {
    text-align: start;
}

.product_detail_content .shipping_poli .btnns {
    display: flex;
    justify-content: space-between;
}

.product_detail_content .shipping_poli .btnns button.delivery {
    background: white;
    border: 0;
    margin: 0 0 10px 0;
}

.product_detail_content .shipping_poli .btnns button.delivery svg {
    padding: 0 10px 0 20px;
}

.product_detail_content .shipping_poli ul {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 20px;
}

.product_detail_content .shipping_poli ul li {
    background: #f5f5f5;
    border-radius: 20px;
    padding: 10px 20px 10px 20px;
}

.product_detail_content .shipping_poli ul li p {
    margin: 0 0 4px 0;
}

.rating-bar {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    /* Equivalent to 14px */
    color: #000;
    margin-top: 0.25rem;
    /* Equivalent to 4px */
    line-height: 1rem;
    /* Equivalent to 16px */
}

.rating-bar .label {
    width: 20%;
    margin-right: -0.125rem;
    /* Equivalent to -2px */
}

.rating-bar .bar {
    height: 0.125rem;
    /* Equivalent to 2px */
    border-radius: 3px;
    overflow: hidden;
    flex-grow: 1;
    cursor: none;
    background: linear-gradient(to right, #000 0%, rgb(229, 229, 229) 0%);
}

.rating-bar .percentage {
    margin-top: 0.125rem;
    /* Equivalent to 2px */
    margin-left: 0.25rem;
    /* Equivalent to 4px */
    font-size: 0.625rem;
    /* Equivalent to 10px */
    width: 9%;
    color: #999;
    white-space: nowrap;
}

.rating-bar1 {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    /* Equivalent to 14px */
    color: #000;
    margin-top: 0.25rem;
    /* Equivalent to 4px */
    line-height: 1rem;
    /* Equivalent to 16px */
}

.rating-bar1 .label {
    width: 20%;
    margin-right: -0.125rem;
    /* Equivalent to -2px */
}

.rating-bar1 .bar {
    height: 0.125rem;
    /* Equivalent to 2px */
    border-radius: 3px;
    overflow: hidden;
    flex-grow: 1;
    cursor: none;
    background: linear-gradient(to right, #000 100%, rgb(229, 229, 229) 100%);
}

.rating-bar1 .percentage {
    margin-top: 0.125rem;
    /* Equivalent to 2px */
    margin-left: 0.25rem;
    /* Equivalent to 4px */
    font-size: 0.625rem;
    /* Equivalent to 10px */
    width: 9%;
    color: #999;
    white-space: nowrap;
}

.product_detail_content .reviews_clientss {
    text-align: start;
    margin: 20px 0 0 0;
}

.product_detail_content .reviews_clientss .btnns {
    display: flex;
    justify-content: space-between;
}

.product_detail_content .reviews_clientss .btnns button {
    border: 0;
    background: transparent;
    margin: 0 0 20px 0;
}

.product_detail_content .reviews_clientss .btnns button svg {
    padding: 0 0px 0 20px;
}

.product_detail_content .reviews_clientss .main_reviews {
    background: #f8f8f8;
    padding: 10px 10px 10px 10px;
    border-radius: 20px;
}

.product_detail_content .reviews_clientss .main_reviews .first_element {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.product_detail_content .reviews_clientss .main_reviews .first_element .rating_number h1 {
    font-size: 51px;
    font-weight: 700;
}

.product_detail_content .reviews_clientss .main_reviews .first_element .rating_number ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
    gap: 5px;
}

.product_detail_content .reviews_clientss .main_reviews .first_element .rating_number ul li svg {
    width: 20px;
}

.product_detail_content .reviews_clientss .main_reviews .first_element .rating_rate {
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.product_detail_content .reviews_clientss .main_reviews .first_element .rating_rate p {
    font-size: 20px;
    font-weight: 600;
}

.product_detail_content .reviews_clientss .main_reviews .first_element .rating_rate .rating-bar {
    width: 100%;
    padding: 0;
}

.rating-bar1 .bar {
    height: 10px !important;
}

.rating-bar1 .bar hr {
    width: 100%;
    color: black;
    background: black;
}

.product_detail_content .reviews_clientss .main_reviews .second_element {
    display: flex;
    flex-wrap: wrap;
    margin: 40px 0 0 0;
    border-top: 1px solid black;
    padding-top: 20px;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .Clientname {
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 50%;
}

button.bttnImg {}

.product_detail_content .reviews_clientss .main_reviews .second_element .Clientname button.bttnImg {
    background: gray;
    border: 0;
    border-radius: 20px;
    width: 40px;
    height: 40px;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .Clientname h3 {
    margin: 0 0px 0 10px;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .Clientname p {
    flex: 0 0 100%;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .cleint_date {
    flex: 0 0 45%;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .cleint_date ul {
    display: flex;
    padding: 0;
    list-style: none;
    margin: 0;
    gap: 10px;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .cleint_date p {
    margin: 0 0 0 0;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .cleint_date ul li svg {
    width: 25px;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .review_description {
    margin: 10px 0 0 0;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .review_description p {
    font-size: 17px;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .review_description img {
    border-radius: 10px;
    margin: 0 0 10px 0;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .review_description ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}

.product_detail_content .reviews_clientss .main_reviews .second_element .review_description ul li {
    margin: 0px 50px 10px 0;
}
 .view_all_review {
    display: flex;
    justify-content: center;
}
 .view_all_review button {
    text-align: center;
    border: 0;
    background: transparent;
    font-size: 20px;
}

.product_detail_content .also_cart {
    text-align: start;
}

.product_detail_content .also_cart ul {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 11px;
    font-size: 19px;
}

.product_detail_content .also_cart .total_price {
    display: flex;
    justify-content: center;
}

.product_detail_content .also_cart button.btn_add_cart.addcart {
    width: 100%;
    background: black;
    color: white;
    padding: 10px 0 10px 0;
    border-radius: 20px;
    margin: 0 0 20px 0;
}

.product_detail_content .also_cart form .first {
    display: flex;
    flex-wrap: wrap;
}

.product_detail_content .also_cart form .first input {
    flex: 0 0 3%;
    margin: 0px 0 10px 0;
}

.product_detail_content .also_cart form .first label {
    flex: 0 0 88%;
    margin: 0px 0 10px 0;
}

.product_detail_content .also_cart form .first select {
    flex: 0 0 30%;
    display: flex;
    align-items: center;
    height: 30px;
}

.col-md-6.main_staticc {
    position: sticky;
    top: 0px;
    height: 760px;
}
</style>
