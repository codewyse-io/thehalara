<template>
<AddOnDeals />


 <section class="track_order addTocart">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
             <div class="your_emptyCard">
                <div class="empty_card">
                    <img :src="require('../assets/images/add_cart.png')" >
                </div>
                <h5>Your shopping cart is empty.</h5>
                <p>Add your favorite items in it.</p>
                <div class="go_to_shop">
                    <a href=""><button class="go_shop">Continue Shop</button></a>
                </div>
             </div>
            </div>
        </div>
    </div>
   </section>


   <ProductList />

<FooterSection />

</template>




<script>
import AddOnDeals from "@/components/AddOnDeals.vue"
import ProductList from "@/components/ProductList.vue"
import FooterSection from "@/components/FooterSection.vue"



  export default {
      name: 'AboutUs',
      components: {
        AddOnDeals,
        ProductList,
        FooterSection,
      }
  };
  </script>