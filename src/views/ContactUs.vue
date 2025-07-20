<template>

<section class="sec_contactUs">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-12">
              <div class="contact_us">
                <h2>Contact Us</h2>
                <div class="side_paracontet">
                    <p>Welcome. We are here to help.</p>
                    <p><b>For Frequently Asked Questions, click here.</b></p>
                    <h5>Emails</h5>
                    <ul>
                        <li>Customer service: <a href="mailto:service@thehalara.com">service@thehalara.com.</a> </li>
                        <li>Business inquiries: <a href="mailto:collaboration@thehalara.com">collaboration@thehalara.com.</a> </li>
                        <li>Legal inquiries: <a href="mailto:Legal@halara.com"> Legal@halara.com.</a> </li>
                        <li> We usually respond within 1-3 business days (check your spam).</li>
                        <li>If you've already sent emails but didn't receive a response, learn more here. </li>
                    </ul>
                    <p><b>Have more questions? Chat with us  here. </b></p>
<p>Our LiveChat is available 24 hours a day, every day.
</p>
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
    name: 'ContactUs',
    components: {
        FooterSection,
    }
};
</script>

    
<style scoped>
.about_head h2 {
    text-align: start;
}
</style>
