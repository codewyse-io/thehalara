<template>
<section class="track_order">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="track_order">
                    <h2>Track Your Order</h2>
                    <p>Both input fields are required. Please fill in all the required information</p>
                    <form>
                        <input type="text" placeholder="*Please enter your email address">
                        <input type="text" placeholder="*Please enter your number or tracking number">
                        <input type="submit" value="Track">
                    </form>
                    <div class="track_faqs">
                        <h4>Top 3 FAQs</h4>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Can I cancel/change my order?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>It depends! If you contact us service@thehalara.com to cancel your order before it is shipped, we would be more than happy to help with the cancellation (or modification) of the order. However, once the order has been shipped, we are unable to modify or cancel your order at this time. However, once you receive your package, if you're not 100% satisfied with the items, we’ll be more than happy to assist you with the return.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How long does shipping take?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            The shipping time can vary depending on the destination region and country. You can check out our shipping page for an updated timetable of delivery times by country.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What happens if my package is lost and stolen?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>
                                            Once your items are shipped, we are not liable if they are stolen or lost in transit. If your tracking number shows that your package was delivered but you did not receive it, please allow 2-3 more days of leeway for delivery before contacting your local carrier for more information.
                                        </p>
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

<section class="you_may">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="you_mayKnow">
                    <h2>You May Also Like</h2>
                    <ProductList />
                </div>
            </div>
        </div>
    </div>
</section>

<FooterSection />
</template>

<script>
import ProductList from "@/components/ProductList.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'ProductCategory',
    components: {
        ProductList,
        FooterSection,
    }
};
</script>

<style scoped>
.blog_detailss_content h5.mt-5 {
    text-align: center;
}

.blog_detailss_content .working_condtions ul li .working_condi_content h5 {
    font-size: 18px;
    margin: 14px 0 0 0;
}

.blog_detailss_content .main_return_Form.become_distri form .return_fe select {
    height: 40px;
}

.blog_detailss_content .main_return_Form.become_distri form .return_fe.other_checkbox {
    flex: 0 0 100%;
    display: flex !important;
    flex-direction: row-reverse;
    padding: 0;
    margin: 0;
    justify-content: start;
    align-items: center;
}

.blog_detailss_content .main_return_Form.become_distri form .return_fe.other_checkbox input[type="checkbox"] {
    margin: 0 10px 0 0px;
}
</style>
