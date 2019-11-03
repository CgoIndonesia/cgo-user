<template>
  <div>
    <Header />
    <div class="content-center">
    <b-row>
    <p style="font-weight:bold;font-size:30px;color:#233E98;float:left;margin: 50px 0 0 120px">Term Of Use</p>
    </b-row>
      <b-row align-h="center">
        <b-col md="2">
        <div class="sidebar-left">
            <div class="menu-sidebar-left">
                <b-lin>Introduction</b-lin>
            </div>
            <div class="menu-sidebar-left">
                <b-lin>Purchasing and Payments I</b-lin>
            </div>
            <div class="menu-sidebar-left">
                <b-lin>Purchasing and Payments II</b-lin>
            </div>
            <div class="menu-sidebar-left">
                <b-lin>Promo Code</b-lin>
            </div>
            <div class="menu-sidebar-left">
                <b-lin>Your Obligations</b-lin>
            </div>
            <div class="menu-sidebar-left">
                <b-lin>Intellectual Property</b-lin>
            </div>
            <div class="menu-sidebar-left">
                <b-lin>Disclaimer</b-lin>
            </div>
            <div class="menu-sidebar-left">
                <b-lin>Suspension and Terminations</b-lin>
            </div>
        </div>
        </b-col>
        <b-col md="6">
        <div class="content-privaci-policy">
        <ol style="font-size:16px;">
            <li>Please read these terms of use (“Terms”) carefully before accessing and/or using the Platform and/or Service. These Terms govern your rights and obligations (whether as a guest or a registered user) regarding the access and/or use of cGO’s website, mobile application or any Internet service (including any associated software supplied by cGO) (collectively referred to as “Platform”) under cGO’s control or ownership. These Terms constitute a legally binding agreement between PT DTech Solusi Bisnis (including all its subsidiaries, related and/or associated companies) (these entities are collectively referred to as “cGO”, “we”, “us” or “our”), the proprietor of all rights in and to the Platform and/or Service, and you, the user of the Platform and/or Service.</li>
            <li>cGO is an online platform that provides access to book a variety of sea travel transportation including yacht rental and tour booking outlets (collectively referred to as “Boat” and the parties providing such Boat are referred to as “Merchant”) in their city (“Service”).</li>
            <li>cGO is a technology company that provides the Platform and/or Service but not the Activities. The Service enables cGO members to reserve and join Activities offered by the Merchant. It is up to the Merchant to offer their travel activities to cGO users and it is up to cGO members to accept such Activities.</li>
            <li>By accessing, browsing, downloading and/or using the Platform and/or Service, you acknowledge that you agree to comply with and be bound by these Terms, as amended from time to time. If you disagree with any part of these Terms, you must immediately discontinue your access and/or use of the Platform and/or Service.</li>
            <li>We may revise or update these Terms at any time by posting a revised/an updated version on the Platform. Unless stated otherwise, any revision or update takes effect immediately. Your continued access and/or use of the Platform and/or Service after a revision or update to these Terms constitutes your binding acceptance of the revised or updated Terms.</li>
            <li>We may change or update the Platform and/or Service and any information on the Platform and/or Service at any time without notice to you or liability to us. We may also suspend, discontinue, or restrict access to, the Platform and/or Service temporarily or permanently at any time without notice to you or liability to us.</li>
        </ol>
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
.content-privaci-policy{
float: left;
color: #ffffff;
padding: 10px;
margin:50px 30px 10px 0;
color: black;
text-align: justify;
}
.sidebar-right{
color: black;
margin: 65px 50px 0 0;
border:#d4d9da solid 1px;
padding: 20px;
}
.sidebar-left{
color: black;
margin: 65px 0 0 50px;
}
.menu-sidebar-left{
background-color: #F1F1F1;
padding: 5px;
margin: 5px;
cursor: pointer;
}
.menu-sidebar-left:hover{
background-color: #D9F7FA;
padding: 5px;
margin: 5px;
}
@media only screen and (max-width: 600px) {
.sidebar-right{
margin: 0 0 0 0;
  }
.sidebar-left{
margin: 0 0 0 0;
  }
}
</style>
