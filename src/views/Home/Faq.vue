<template>
  <div>
    <Header />
    <div class="content-center">
      <b-row>
        <b-col md="9">
        <div class="content-faq">
             <p style="font-weight:bold;font-size:16px;color:#233E98">FAQ</p>
             <b-alert show style="background-color:#D9F7FA;color:#000000;font-size:12px;font-weight:bold;">what is cGO?</b-alert>
             <p style="font-size:12px;">cGO is an app exist to provide access to everyone to Explore, Experience and Enjoy the Indonesian archipelago through local social platform in an affordable, safety and comfortable manner.</p>
             <b-alert show style="background-color:#D9F7FA;color:#000000;font-size:12px;font-weight:bold;">How to join cGO as a merchant?</b-alert>
             <p style="font-size:12px;">Please fill in the merchant form on this website. You will be contacted by cGO employees for further process. We are excited to have you as our partner!</p>
             <b-alert show style="background-color:#D9F7FA;color:#000000;font-size:12px;font-weight:bold;">How to book my trip?</b-alert>
             <p style="font-size:12px;">Download CGo mobile application, choose your destination and then pay directly through the application. We will provide a barcode which can be shown to merchants in your chosen destination.</p>
             <b-alert show style="background-color:#D9F7FA;color:#000000;font-size:12px;font-weight:bold;">How to pay my trip?</b-alert>
             <p style="font-size:12px;">CGo offers a secure payment using a credit card, bank transfer or any local payment method available in your country.</p>
      </div>
      </b-col>
        <b-col md="3">
           <div class="sidebar-right">
        <p style="font-weight:bold;">Need Help?</p>
        <img src="@/assets/image 44.png">
         <b-button style="background-color:#233E98;width:100%;">Contact Us</b-button>
      </div>
        </b-col>
      </b-row>
      </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Footer,
    Header
  }
}
</script>
<style>
.content-center{
width: 100%;
color: #ffffff;
}
.content-faq{
float: left;
color: #ffffff;
padding: 10px;
margin:50px;
color: black;
text-align: justify;
}
.sidebar-right{
color: black;
margin: 100px 50px 0 0;
border:#d4d9da solid 1px;
padding: 20px;
}
@media only screen and (max-width: 600px) {
.sidebar-right{
margin: 0 0 0 0;
  }
}
</style>
