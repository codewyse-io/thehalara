<template>
<section class="Faqs_sec">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="faqs_sec">
                   <h2>Frequently Asked Questions</h2>
                   <p>We hope we can answer your question below, but if not, feel free to contact us!</p>
                   <h4>Top 5 FAQs</h4>
                   <FaqsSection />
                </div>
            </div>
        </div>
    </div>
</section>  

  <FooterSection />
  </template>
  
  <script>
  import FaqsSection from "@/components/FaqsSection.vue"
  import FooterSection from "@/components/FooterSection.vue"
  
  export default {
      name: 'ProductCategory',
      components: {
        FaqsSection,
          FooterSection,
      }
  };
  </script>
  