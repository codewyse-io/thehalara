import { createRouter, createWebHistory } from "vue-router";
import homeview from "@/views/homeview.vue";
import ProductCategory from "@/views/ProductCategory.vue";
import AboutUs from '@/views/AboutUs.vue';
import BlogPage from '@/views/BlogPage.vue';
import FAQS from '@/views/FAQS.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import AffiliatePage from '@/views/AffiliatePage.vue';
import ContactUs from '@/views/ContactUs.vue';
import TermsOfService from '@/views/TermsOfService.vue';
import ReturnPolicy from '@/views/ReturnPolicy.vue';
import LoginPage from "@/views/LoginPage.vue";
import AddToCart from "@/views/AddToCart.vue";
import CouponPolicy from "@/views/CouponPolicy.vue";
import TeacherStudentPage from "@/views/TeacherStudentPage.vue";
import Ambasador from "@/views/Ambasador.vue";
import CareerPage from "@/views/CareerPage.vue";
import BlogPageDetails from "@/views/BlogPageDetails.vue";
import ShippingInfo from "@/views/ShippingInfo.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import ThePress from "@/views/ThePress.vue"
import SizeGuidePage from "@/views/SizeGuidePage.vue";
import Sustainability from "@/views/Sustainability.vue";
import TrackOrder from "@/views/TrackOrder.vue";
import CookiesPolicy from "@/views/CookiesPolicy.vue";
import MePage from "@/views/MePage.vue";

const routes = [

  {
    path: '/',
    component: homeview
  },
  {
    path: '/ProductCategory',
    component: ProductCategory, 
  },
  {
    path: '/AboutUs',
    component: AboutUs, 
  },
  {
    path: '/BlogPage',
    component: BlogPage, 
  },
  {
    path: '/FAQS',
    component: FAQS, 
  },
  {
    path: '/ProductDetails',
    component: ProductDetails, 
  },
  {
    path: '/AffiliatePage',
    component: AffiliatePage, 
  },
  {
    path: '/ContactUs',
    component: ContactUs, 
  },
  {
    path: '/TermsOfService',
    component: TermsOfService, 
  },
  {
    path: '/ReturnPolicy',
    component: ReturnPolicy, 
  },
  {
    path: '/LoginPage',
    component: LoginPage, 
  },
  {
    path: '/AddToCart',
    component: AddToCart, 
  },

  {
    path: '/CouponPolicy',
    component: CouponPolicy, 
  },
 
  {
    path: '/TeacherStudentPage',
    component: TeacherStudentPage, 
  },
  {
    path: '/Ambasador',
    component: Ambasador, 
  },
  {
    path: '/CareerPage',
    component: CareerPage, 
  },
  {
    path: '/BlogPageDetails',
    component: BlogPageDetails, 
  },
  
  {
    path: '/ShippingInfo',
    component: ShippingInfo, 
  },
  {
    path: '/PrivacyPolicy',
    component: PrivacyPolicy, 
  },
  {
    path: '/ThePress',
    component: ThePress, 
  },
  {
    path: '/SizeGuidePage',
    component: SizeGuidePage, 
  },
  {
    path: '/Sustainability',
    component: Sustainability, 
  },
  {
    path: '/TrackOrder',
    component: TrackOrder, 
  },
  {
    path: '/CookiesPolicy',
    component: CookiesPolicy, 
  },
  {
    path: '/MePage',
    component: MePage, 
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active'
});


export default router;
