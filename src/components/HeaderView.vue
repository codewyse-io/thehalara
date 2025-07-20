<template>
<div class="select_header">
    <div class="top_hea">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="anouce_bar">
                        <RouterLink to=''>GET A FREE WAIST BAG ON ORDERS $190.69 CAD+</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <header class="main">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-5">
                    <div class="Main-side-header">
                        <div class="logo">
                            <RouterLink to="/"> <img :src="require('../assets/images/thehalara_logo.png')" alt=""></RouterLink>
                        </div>
                        <ul>
                            <li class="nav-item">
                                <RouterLink to="/">Home</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/ProductCategory">Explore</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2">
                    <!-- <div class="logo">
                        <RouterLink to="/"> <img src="../assets/img/logo.webp" alt=""></RouterLink>
                    </div> -->
                </div>
                <div class="col-md-5">
                    <div class="cart-ad list_item">
                        <ul>
                            <li class="nav-item">
                                <div class="search-container">
                                    <i class="fas fa-search search-icon"></i>
                                    <input type="text" class="search-box" placeholder="Search">
                                </div>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/LoginPage" class="nav-link" @click="closeNavbar"><i class="fa-regular fa-user"></i></RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to=""><i class="fa-brands fa-rocketchat"></i></RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/AddToCart"><i class="fa-solid fa-cart-shopping"></i></RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg new_nav ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }" id="navbarNav">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <!-- hello -->
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">New In</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">HalaraMagic™</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">New Workwear</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Mesh Collection</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Buckle Design</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Wide Leg Pants</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Active Community</RouterLink>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Bestsellers</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Active Denim Shop</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Active Workwear</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Active Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Crossover Shop</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pocket Shop</RouterLink>
                                                            </li>
                                                            <!-- <li class="nav-item"><RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Active Community</RouterLink></li> -->
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flowy Shop</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Easy Peezy</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Wide Leg Shop</RouterLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Clothing</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Active Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Maxi & Midi Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Mini Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flowy Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Party Dresses</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Joggers & Pants</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Active Work Pants</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Jeans</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flare Pants</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cargo Pants</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Wide Leg & Palazzo Flowy Pants</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flare Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">HalaraMagic™ Denim Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Crossover Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Butt Lifting Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pocket Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Yoga Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Casual Wear Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Training Leggings</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Tops</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Tank Tops & Camis</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Sports Tops</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Sports Bras</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Long Sleeve Tops</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cropped Tops</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">T-Shirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shirts & Blouses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Curved Hem Tops</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Sweatshirts & Hoodies</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Coats & Jackets</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Skirts & Skorts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Mini Skirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Maxi & Midi Skirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pleated Skirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Plaid Skirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">2-in-1 Skorts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flowy Skirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Tennis & Golf Skirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Everyday Skirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Commuting Skirts</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shorts & Bikers</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Denim Shorts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cargo Shorts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Crossover Shorts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">2.5" Shorts</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Active Denim</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Active Jeans</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Denim Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Denim Skirts & Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Denim Shorts</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Jumpsuits</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Overalls</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Rompers</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Dressey Jumpsuits</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Bodysuits</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Beachwear</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Swimwear Tops</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Swimwear Bottoms</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Swimwear Sets</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cover Ups</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Other Categories</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Two-Piece Outfits</RouterLink>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link color_red" to="/ProductCategory" @click="closeNavbar">Sale</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flash Sale-Up To 80% Off</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Buy 3 For 2</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Buy 2 For $49</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Buy 3 For $59</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Buy 1, Get 1 Free</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">All Under $29.95</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">All Under $19.95</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Buy 2 For $39</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Clearance-Buy 3 for $29</RouterLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Sale</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flash Sale-Up To 80% Off</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Buy 3 For 2</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Buy 2 For $49</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Buy 3 For $59</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Buy 1, Get 1 Free</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">All Under $29.95</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">All Under $19.95</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Buy 2 For $39</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Clearance-Buy 3 for $29</RouterLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Joggers & Pants</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Joggers</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Jeans</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Wide Leg Pants</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Cargo Pants</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flare Pants</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Active Work Pants</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">High Waisted Pants</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Low Rise Pants</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Linen & Cotton Pants</RouterLink>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Skirts & Skorts</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Mini Skirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Maxi & Midi Skirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pleated Skirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">2-in-1 Skorts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flowy Skirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Tennis & Golf Skirts</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Commuting Skirts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Everyday Skirts</RouterLink>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Dresses</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Active Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Mini Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Maxi & Midi Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Bodycon Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Party Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flowy Dresses</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Backless Dresses</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Easy Peezy</RouterLink>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Shorts & Bikers</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flowy Shorts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">2.5" Shorts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Crossover Shorts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Denim Shorts</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Bikers</RouterLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <RouterLink class="nav-link" to="/ProductCategory" @click="closeNavbar">Leggings</RouterLink>
                                    <button type="button" class="btn   dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span class="mega-indicator" data-has-click-event="true"></span>
                                    </button>
                                    <div class="dropdown-menu w-100 mt-0">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="main_submenue">
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Shop All</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Yoga Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Casual Wear Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Training Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Denim Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Softlyzero™ Fabric Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Patitoff™ fabric Leggings</RouterLink>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-group list-group-flush first_one">
                                                            <li class="first_head">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Flare Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Crossover Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">High Waisted Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Pocket Leggings</RouterLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <RouterLink to="/ProductCategory" class="nav-link" @click="closeNavbar">Butt Lifting Leggings</RouterLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>

                        </div>

                    </nav>
                </div>
            </div>
            <!-- <div class="search-container d-none">
                <i class="fas fa-search search-icon"></i>
                <input type="text" class="search-box" placeholder="Search">
            </div> -->
        </div>
    </header>

</div>
<router-view></router-view>
</template>

<script>
import 'jquery';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jquery from 'jquery';

import {
    RouterLink
} from 'vue-router';

export default {
    name: 'HeaderView',
    props: {
        msg: String
    },
    components: {
        RouterLink
    },
    data() {
        return {
            isNavbarOpen: false,
        };
    },
    methods: {
        toggleClass() {
            const modal = document.getElementByClassName('dropdown-menu');
            if (modal) {
                modal.classList.remove('active');
                modal.style.display = 'none';
            }
        },
        openModal() {
            const modal = document.getElementById('myModal');
            if (modal) {
                modal.classList.add('show');
                modal.style.display = 'block';
            }
        },
        closeModal() {
            const modal = document.getElementById('myModal');
            if (modal) {
                modal.classList.remove('show');
                modal.style.display = 'none';
            }
        },
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        },
        closeNavbar() {
            this.isNavbarOpen = false;
            this.$nextTick(() => {
                if (this.$refs.navbarDropdown) {
                    this.$refs.navbarDropdown.classList.remove('show');
                }
            });
        },
        toggleCart() {
            // Toggle the cart open/close
            const offCanvasElement = document.getElementById('offCanvas34');
            console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
            if (offCanvasElement) {
                offCanvasElement.classList.toggle('is-open');
            }
        },
    },
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
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
div#myModal .modal-content {
    width: 860px;
}

div#myModal .modal-dialog {
    width: 100%;
    left: 0;
    right: 0;
    display: flex;
}

div#myModal .modal-content .modal-body {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}

div#myModal .modal-content .modal-body form.navbar-form {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 20px 0 0 0;
}

div#myModal .modal-content .modal-body form.navbar-form .form-group {
    display: flex;
    width: 100%;
}

div#myModal .modal-content .modal-body .close_modal_btn {
    position: absolute;
    left: unset;
    right: 0;
    top: -8px;
    border: 0;
}

div#myModal .modal-content .modal-body .close_modal_btn button.close {
    border: 0;
    background: transparent;
    font-size: 30px;
}
</style>
