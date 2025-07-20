<template>
<HomeBanner />

<CategoryList />

<section class="home_sec_3">
    <div class="container">
        <div class="row bg_grey">
            <div class="col-md-6">
                <div class="discunt_offer_home">
                    <h2><b>10% OFF </b><br>Orders Over $100+ </h2>
                </div>
            </div>
            <div class="col-md-6">
                <div class="discount_offer_coupon">
                    <h5>CODE</h5>
                    <span>FORYOU10</span>
                </div>
            </div>
        </div>
    </div>
</section>

<DiscountCategory />
<section class="home_sec_4">
    <div class="contianer-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="main_trending">
                    <h2>Trending</h2>
                    <TrendingProduct />
                </div>
            </div>
        </div>
    </div>
</section>

<section class="home_sec_5">
    <div class="contianer-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="more_toLove">
                    <h2>More To Love</h2>
                    <ul>
                        <li><button :class="{ active: activeButton === 'Bestsellers' }" @click="toggleButton('Bestsellers')">Bestsellers</button></li>
                        <li><button :class="{ active: activeButton === 'NewIn' }" @click="toggleButton('NewIn')">New In</button></li>
                    </ul>

                    <div v-if="activeButton === 'Bestsellers'">
                        <BestSeller />
                    </div>

                    <div v-else-if="activeButton === 'NewIn'">

                        <NewIn />                   
                     </div>
                </div>
            </div>
        </div>
    </div>
</section>








<FooterSection />
</template>

<script>
import HomeBanner from "@/components/HomeBanner.vue"
import TrendingProduct from "@/components/TrendingProduct.vue"
import BestSeller from "@/components/BestSeller.vue"
import NewIn from "@/components/NewIn.vue"
import FooterSection from "@/components/FooterSection.vue"
import CategoryList from "@/components/CategoryList.vue"
import DiscountCategory from "@/components/DiscountCategory.vue"

export default {
    name: 'HomeView',
    components: {
        HomeBanner,
        TrendingProduct,
        BestSeller,
        CategoryList,
        NewIn,
        FooterSection,
        DiscountCategory,
    },
    data() {
        return {
            activeButton: 'Bestsellers',
        }
    },
    methods: {

        toggleButton(button) {
            this.activeButton = button; // Set the active button
        },
    }

};
</script>
