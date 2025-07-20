<template>
<footer class="footer_sec">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="footer_secc">
                    <div class="logo">
                        <img :src="require('../assets/images/footer_logo.png')">
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="first_side_footer">
                    <div class="first_links">
                        <RouterLink to="">Sign In / Register</RouterLink>
                    </div>
                    <div class="collisions_list">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        HELP & SUPPORT
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                       <ul>
                                        <li><RouterLink to="/TrackOrder">Track Your Order</RouterLink></li>
                                        <li><RouterLink to="/ShippingInfo">Shipping & Customs</RouterLink></li>
                                        <li><RouterLink to="/ReturnPolicy">Return Policy</RouterLink></li>
                                        <li><RouterLink to="/FAQS">FAQs</RouterLink></li>
                                        <li><RouterLink to="/SizeGuidePage">Sizing Help</RouterLink></li>
                                        <li><RouterLink to="/CouponPolicy">Coupon Policy</RouterLink></li>
                                       </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        COMPANY INFO.
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul>
                                        <li><RouterLink to="/AboutUs">About Us</RouterLink></li>
                                        <li><RouterLink to="/Sustainability">Sustainability</RouterLink></li>
                                        <li><RouterLink to="/BlogPage">Blog</RouterLink></li>
                                        <li><RouterLink to="/ThePress">Press</RouterLink></li>
                                        <li><RouterLink to="/ContactUs">Contact Us</RouterLink></li>
                                        <li><RouterLink to="/PrivacyPolicy">Privacy Policy</RouterLink></li>
                                        <li><RouterLink to="/CookiesPolicy">Cookie Policy</RouterLink></li>
                                        <li><RouterLink to="/TermsOfService">Terms and Conditions</RouterLink></li>
                                        <li><RouterLink to="/Ambasador">Ambassadors</RouterLink></li>
                                        <li><RouterLink to="/AffiliatePage">Affiliate</RouterLink></li>
                                        <li><RouterLink to="/TeacherStudentPage">Student Discount</RouterLink></li>
                                        <li><RouterLink to="/CareerPage">Career</RouterLink></li>
                                       </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="left_side_footer">
                    <h4>Let’s Stay In Touch</h4>
                    <p>Subscribe for exclusive deals, style secrets and early access to the newest drops first.</p>
                    <form action="">
                        <div class="email_fields">
                            <input type="email" placeholder="Enter Your Email" name="email">
                            <input type="submit" value="submit">
                        </div>
                    </form>
                    <p><em>*By subscribing, you agree to receive marketing communication from Halara by email. You can unsubscribe at any point.</em></p>
                    <h6>Download the Halara App & Get $100 Coupon Bundle</h6>
                    <ul>
                        <li>
                            <button><img :src="require('../assets/images/appstore.png')"></button>
                        </li>
                        <li>
                            <button class="code_App">Code: app5</button>
                        </li>
                    </ul>
                    <div class="social_media_icons">
                        <ul>
                            <li>
                                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa-brands fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa-brands fa-youtube"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa-brands fa-discord"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fa-brands fa-tiktok"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="form_field">
                        <form>
                            <select name="language">
                                <option value="USD">USD</option>
                                <option value="ENG">ENG</option>
                                <option value="GDB">GDB</option>
                                <option value="EUR">EUR</option>
                                <option value="DKK">DKK</option>
                            </select>
                        </form>
                    </div>
                    <p>Copyright © 2024 Halara <br>71 Ubi road 1 #08-34 Oxley Bizhub Singapore (408732)
</p>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>


<style scoped>
footer.footer_sec {
    background: #244317;
    color: white;
}

.footer_secc {
    margin: 0 0 50px 0;
}

.first_side_footer .first_links {
    border-bottom: 2px solid white;
    margin: 0 0 30px 0;
    text-align: start;
}

.first_side_footer .first_links a {
    text-align: start;
    font-size: 25px;
    color: white;
}


.first_side_footer .collisions_list div#accordionExample {
    background: transparent;
    border: 0;
}

.first_side_footer .collisions_list div#accordionExample .accordion-item {
    border: 0;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
}

.first_side_footer .collisions_list div#accordionExample .accordion-item h2.accordion-header {
    background: transparent;
}

.first_side_footer .collisions_list div#accordionExample .accordion-item h2.accordion-header button.accordion-button.collapsed {
    background: transparent;
    color: white;
    font-size: 26px;
}

.first_side_footer .collisions_list div#accordionExample .accordion-item .accordion-collapse.collapse {}

.first_side_footer .collisions_list div#accordionExample .accordion-item .accordion-collapse.collapse .accordion-body {
    padding: 0;
}

.first_side_footer .collisions_list div#accordionExample .accordion-item .accordion-collapse.collapse .accordion-body ul {
    padding: 20px 0 0 20px;
    text-align: start;
    color: white;
}

.first_side_footer .collisions_list div#accordionExample .accordion-item .accordion-collapse.collapse .accordion-body ul li a {
    font-size: 17px;
    color: white;
}

.accordion-body {
    padding: 0;
}

.accordion-body ul {
    padding: 20px 0 0 20px !important;
    text-align: start;
    color: white;
}
.accordion-body ul li a {
    color: white;
}

.first_side_footer .collisions_list div#accordionExample .accordion-item h2.accordion-header[data-v-2557086c] button.accordion-button {
    background: transparent;
    box-shadow: none;
    color: white;
    font-size: 24px;
}
.left_side_footer {
    text-align: start;
    padding: 0 0 0 20px;
}

.left_side_footer h4 {
    font-size: 32px;
    font-weight: 600;
}

.left_side_footer p {
    font-size: 17px;
}

.left_side_footer form {}

.left_side_footer form .email_fields {
    display: flex;
    width: 100%;
    align-items: center;
}

.left_side_footer form .email_fields input[type="email"] {
    flex: 0 0 50%;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 9px;
    padding: 0 0 0 10px;
    min-height: 32px;
    border: 0;
}

.left_side_footer form .email_fields input[type="submit"] {
    background: #ececec;
    color: #848484;
    padding: 3px 21px !important;
}

.left_side_footer ul {
    display: flex;
    list-style: none;
    padding: 0;
}

.left_side_footer ul li button img {
    object-fit: contain;
    width: 104px;
    height: 32px;
    margin-right: 10px;
}

.left_side_footer ul li button {
    border: 0;
    background: transparent;
}

.left_side_footer ul li button.code_App {
    display: flex;
    width: 110px;
    height: 32px;
    align-items: center;
    justify-content: center;
    background-color: #008334;
    color: #fff;
    position: relative;
    border-radius: 2px;
    font-size: 14px;
}


.left_side_footer .social_media_icons ul {
    display: flex;
    gap: 25px;
}

.left_side_footer .social_media_icons ul li svg {
    color: white;
    font-size: 20px;
}


.left_side_footer .form_field form select {
    width: 180px;
    height: 30px;
    margin: 0 0 20px 0;
}
</style>