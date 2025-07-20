<template>
<section class="sec_privacy">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="shpping_info">
                    <div class="butoons_tabss">
                       <RouterLink to="/ShippingInfo"> <button class="shiping ">Shipping Info</button></RouterLink>
                       <RouterLink to="/ReturnPolicy"> <button class="shiping acctive">Return Policy</button></RouterLink>
                    </div>
                    <div class="shipping_para">
                        <p>Returns are accepted <strong>within 30 days of the delivery date.</strong> Please be aware there are certain exceptions. </p>

                    </div>
                    <div class="shipping_faqs">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Shipping Info
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="return_process">
                                            <ul>
                                                <li><img :src="require('../assets/images/return1.png')">
                                                    <p>Initiate your return</p>
                                                </li>
                                                <li><img :src="require('../assets/images/return2.png')">
                                                    <p>Select the items & Refund Method
                                                    </p>
                                                </li>
                                                <li><img :src="require('../assets/images/return3.png')">
                                                    <p>Mail back your item(s)
                                                    </p>
                                                </li>
                                                <li><img :src="require('../assets/images/return4.png')">
                                                    <p>Items delivered to Halara & Warehouse Inspections
                                                    </p>
                                                </li>
                                                <li><img :src="require('../assets/images/return5.png')">
                                                    <p>Issue Refund</p>
                                                </li>
                                            </ul>
                                            <p><b>Step 1: </b> <a href="">Click here</a> o initiate your return. After you've requested a return, kindly wait as we'll email you return instructions within 24 hours. <br>

                                                If you have any questions, please feel free to contact us here. Or you can email us at service@thehalara.com, and we will get back to you within 1-3 business days. </p>
                                            <p><b>Step 2: </b> Mail back your item(s) with a carrier of your choice.</p>
                                            <p><b>Step 3: </b> Refund will be issued within 3-5 days after we receive your item(s). Halara reserves the right to decline a return that does not comply with the conditions of our return policy.</p>
                                            <p><b>Please do not send returns to the sender's address on the package you received. Returns will not be accepted without submitting the request first.</b></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What is the return policy?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p><b>Return Shipping Fee</b></p>
                                        <p>All return shipping costs will be covered by the customer, unless it's due to a quality issue.</p>
                                        <p><b>Return Window</b></p>
                                        <p>You have up to 30 days from the date you've received all your items.</p>
                                        <p>Our standard returns window will be temporarily extended in anticipation of customers shopping early for the holidays. All items purchased online between November 20, 2023, and December 24, 2023, are returnable through January 23, 2024, or 30 days from delivery date, whichever is later. Although the returns window for orders will be extended, returns eligibility remains the same.</p>
                                        <p><b>Conditions</b></p>

                                        <ul>
                                            <li>The item(s) and any accompanying free gifts must be returned in their original condition, unused, unwashed, and with the original tags attached.</li>
                                            <li>Swimwear returns can only be accepted if the hygiene liner remains intact.</li>
                                            <li>Unfortunately, we are unable to accept returns for lingerie, water bottles, hair accessories, glasses, hats, socks, jewelry or masks due to hygiene concerns.</li>
                                            <li><b>Shipping costs are non-refundable.</b></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        When can I receive my refund?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p><b>Please note that the conditions below are not deemed as defective in quality:</b></p>
                                        <ul>
                                            <li>Loose threads, raw edges, thickness, touch, and differences in color due to differences in monitor display do not constitute as quality issues.</li>
                                            <li>Returns due to dissatisfaction in style, color, and changes in personal preference do not constitute as quality issue.</li>
                                            <li>Damages due to use, wash, care, improper maintenance, self-repair, modifications, or other human factors do not constitute as quality issues.</li>
                                            <li>Please refer to our sizing chart for decisions on your purchase, as our service team can only offer our recommendations. Returns due to sizing issues do not constitute as quality issues.</li>
                                            <li>Due to differences in design and style between items, there may be slight differences between different items of the same size. Please refer to the actual measurements.</li>
                                        </ul>
                                        <p><b>Important</b></p>
                                        <p>If you're not receiving our emails, check your Spam or Junk folders. Label them as "Not Spam” or “Not Junk to ensure future emails land in your inbox. Click here for further instructions.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        When can I receive my refund?
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">

                                        <ul>
                                            <li>Refunds will be granted once we've received and inspected the eligible return item. Due to high warehouse volume, please allow 3 to 5 days for return processing.</li>
                                            <li>Refunds to your original payment method will be made within 5 business days upon receiving the returned item or cancellation request. If you don't receive your refund 14 days after returning the product, please email us immediately at service@thehalara.com.</li>
                                            <li>Refunds to Halara Gift Card will be issued within 1-2 business days.</li>
                                        </ul>
                                        <p><b>Important</b></p>
                                        <p>If you're not receiving our emails, check your Spam or Junk folders. Label them as "Not Spam” or “Not Junk to ensure future emails land in your inbox. Click here for further instructions.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                        Exchanges

                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse " aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Unfortunately, we don’t offer exchanges at the moment, but you can place a new order and initiate a return. Your refund will be processed as soon as we receive the returned package.

</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading1">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                        Still Need Help?
                                    </button>
                                </h2>
                                <div id="collapse1" class="accordion-collapse collapse " aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Note that Halara is not responsible for any failed delivery attempt caused by the negligent behaviors of customers. Negligence includes, but is not limited to, refusal of shipment confirmation and incorrect consignee's information (such as order address, contact number, or consignee's name). In this case, we are unable to file a refund for you. If you find your order information wrong, If you encounter any problems or have any concerns you can reach out to our dedicated Customer Support team throug this link or via email at service@thehalara.com .

</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                  
                        <button class="start_retun">start_return</button>
                 
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
