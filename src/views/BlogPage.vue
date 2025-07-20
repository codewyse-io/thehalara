


<template>
<section class="about_sec_1">
        <div class="container-fluid">
           
            <div class="Blog_fold">
                <RouterLink to="/BlogPageDetails"><img :src="require('../assets/images/blog1.jpg')" alt=""></RouterLink>
            </div>
            <div class="Blog_fold">
                <RouterLink to="/BlogPageDetails"><img :src="require('../assets/images/blog2.jpg')" alt=""></RouterLink>
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
    
    