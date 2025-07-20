<template>
<section class="sec_privacy">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="shpping_info">
                    <div class="butoons_tabss">
                        <RouterLink to="/ShippingInfo"> <button class="shiping acctive">Shipping Info</button></RouterLink>
                       <RouterLink to="/ReturnPolicy"> <button class="shiping ">Return Policy</button></RouterLink>
                    </div>
                    <div class="shipping_para">
                        <p>Halara provides <strong>FREE STANDARD SHIPPING</strong> on orders over US $49, after any discounts are applied, in selected countries. <br>Check below to see if your country qualifies for free shipping.</p>

                    </div>
                    <div class="shipping_faqs">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Shipping Info
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="inner_body">
                                            <p><b>Shipping to</b></p>
                                            <form>
                                                    <select name="shippingTo">
                                                        <option value="United States" selected>United States</option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="United Kingdom">United Kingdom</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Germany">Germany</option>
                                                    </select>
                                            </form>
                                            <p><b>Standard Shipping</b></p>
                                            <p>Orders will be delivered within 15-20 business days with a flat rate charge of $14.9</p>
                                            <p>For in-stock items, please expect an additional 1-3 days of warehouse processing time for the total delivery estimates.</p>
                                            <p>For pre-order items, please refer to the estimated date provided on the product’s description page. Please note it's not recommended to choose Express Shipping or Super Express Shipping for pre-orders.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Restrictions
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Please note that there are some restrictions such that our carriers can't ensure safe delivery to specific addresses (and let’s be real, there's nothing worse than a lost package). So please be sure to provide your address with specific details such as street number/building number if you have one.</p>

                                        <p><b>Shipping address limitations</b></p>
                                        <ul>
                                            <li>For US Customers, shipments to the 48 contiguous states are eligible for free standard shipping on orders over $49. There will be a flat charge of $14.9 for shipments to Hawaii, Alaska, Puerto Rico, the Virgin Islands, Guam and any APO, FPO, or DPO addresses.</li>
                                            <li>For Canada Customers, Super Express Shipping is not available for P.O. Boxes and APO/FPO addresses.</li>
                                            <li>Unfortunately, we cannot ship to the following countries/regions: Afghanistan, Åland Islands, Albania, Algeria, Angola, Anguilla, Argentina, Armenia, Aruba, Ascension Island, Belarus, Benin, Bermuda, Bolivia, Bosnia & Herzegovina, Botswana, British Indian Ocean Territory, British Virgin Islands, Brunei, Burkina Faso, Burundi, Cambodia, Cameroon, Caribbean Netherlands, Cayman Islands, Central African Republic, Chad, Christmas Island, Cocos (Keeling) Islands, Colombia, Costa Rica, Curaçao, Cyprus, Ecuador, Egypt, Estonia, Ethiopia, Falkland Islands, Faroe Islands, Fiji, French Guiana, French Polynesia, French Southern Territories, Gabon, Georgia, Ghana, Gibraltar, Greenland, Grenada, Guadeloupe, Guatemala, Guernsey, Guinea, Honduras, India, Indonesia, Iraq, Isle of Man, Jamaica, Jersey, Jordan, Kazakhstan, Kenya, Kosovo, Laos, Lebanon, Liberia, Libya, Liechtenstein, Madagascar, Malawi, Maldives, Mali, Martinique, Mauritius, Mayotte, Monaco, Mongolia, Montserrat, Morocco, Mozambique, Myanmar (Burma), Namibia, Nepal, New Caledonia, Nicaragua, Niger, Nigeria, Norfolk Island, Pakistan, Panama, Papua New Guinea, Paraguay, Peru, Pitcairn Islands, Réunion, San Marino, São Tomé & Príncipe, Senegal, Serbia, Seychelles, Sint Maarten, Slovakia, Slovenia, Somalia, South Africa, South Georgia & South Sandwich Islands, Sri Lanka, St. Barthélemy, St. Helena, St. Martin, St. Pierre & Miquelon, Sudan, Svalbard & Jan Mayen, Tajikistan, Tanzania, Togo, Tokelau, Tristan da Cunha, Tunisia, Turks & Caicos Islands, Tuvalu, U.S. Outlying Islands, Uganda, Ukraine, Uruguay, Venezuela, Western Sahara, Yemen, Zambia, Zimbabwe</li>
                                        </ul>
                                        <p><b>Failed Delivery Situation</b></p>
                                        <ul>
                                            <li>We are not responsible for any failed delivery attempt caused by the negligent behaviors of customers. Negligence includes, but is not limited to, incorrect information provided for delivery, such as order address/contact number/consignee's name. In this case, we are unable to file a refund for you.</li>
                                            <li>We are not responsible for any failed delivery attempt caused by the negligent behaviors of customers. Negligence includes, but is not limited to, incorrect information provided for delivery, such as order address/contact number/consignee's name. In this case, we are unable to file a refund for you.</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Additional Information
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">

                                        <ul>
                                            <li>Your order will be promptly processed and shipped within 1-3 days of payment. An email notification will be sent to you shortly after shipment.</li>
                                            <li>While we strive to deliver your package within the indicated timeframe, please note that factors beyond our control may impact the actual delivery date. For the most reliable delivery information, refer to the tracking details provided with your order.</li>
                                        </ul>
                                        <p><b>Attention</b></p>
                                        <ul>
                                            <li>If you have any shipping-related inquiries, don't hesitate to contact us here. We're always here to assist. Alternatively, you can email us at service@thehalara.com , and we'll respond to your queries within 1-3 business days.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
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
