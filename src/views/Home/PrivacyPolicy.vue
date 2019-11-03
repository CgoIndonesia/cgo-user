<template>
  <div>
    <Header />
    <div class="content-center">
      <b-row>
        <b-col md="9">
        <div class="content-privaci-policy">
        <p style="font-weight:bold;font-size:16px;color:#233E98">Privacy Policy</p>
        <p style="font-size:12px;">
          The following Privacy Policy describes how We collect, store, use, transfer, disclose and protect Your personal information which can be identified and obtained through our Application (as defined below). Please read this Privacy Policy thoroughly to ensure that You understand how We apply this Privacy Policy.
        </p>
        <p style="font-size:12px;">
            We collect certain Personal Information from You to enable the Application to perform its function whether for the use of Service (if You are a Custumer) or Service provision management (if You are a Merchant) or other functions necessary to support the Service ecosystem. You can provide Personal Information directly (for example, when You register as an Application user) or collected automatically when You use the Application.
        </p>
        <p style="font-size:12px;">
            When You visit the Website, a Website administrator will process technical data such as Your internet protocol address, web pages You have visited, internet browser that You use, web pages You previously/subsequently visited and the duration of every visit/session which enable Us to send Website functions. In addition, in some cases, browser may advise You to activate Your geo-location system to enable Us give You a better experience in using the internet and/or Application. With this technical data, the Website administrators can manage the Website, for example by resolving technical difficulties and improving the accessibility of certain parts of the Website. Using this method, We can ensure that You can (always) find information on the Website in quick and simple manners.
        </p>
         <p style="font-weight:bold;font-size:12px;">
          Information that You provide directly
          </p>
           <p style="font-size:12px;">
             When registering to the Webiste and Application , You will provide to Us certain Personal Information pursuant to Terms of Use required by each type and function of the Application.
          </p>
         <p style="font-weight:bold;font-size:12px;">
          Information which We collect when You use the Application
          </p>
           <p style="font-size:12px;">
            When You use the Application through Your mobile device, We will track and collect the geo-location information in real-time and other relevant information to support the performance efficiency and the functions of the Application.
          </p>
         <p style="font-weight:bold;font-size:12px;">
            Use of a Cookie
          </p>
           <p style="font-size:12px;">
           Cookie is a small data file placed in Your browser on Your internet device. With cookie, the feature of application and/or website that You access can save information or remember Your actions and preferences from time to time.
          </p>
           <p style="font-size:12px;">
          We use Your e-mail address, name, phone number and/or account password to verify Your ownership over an account in our Application, to communicate with You in connection with the use or management of the Service and to give You information regarding the Application. We may also use Your name, email address and phone number to send message, general update of the Application, special offers or promotions. We will also send email to You asking You to subscribe to Our mailing list. You may at any time choose not to accept the information regarding this update.
          </p>
           <p style="font-size:12px;">
           We use Your Personal Information entirely to analyze the Application’s pattern of use. You hereby agree that Your data will be used by Our internal data processing system to ensure the delivery of the best function of the Application to You.
          </p>
          <p style="font-weight:bold;font-size:12px;">
           Security
          </p>
           <p style="font-size:12px;">
           Confidentiality of Your data and personal information is the most important matter for Us. We will conduct the best effort and steps to protect and secure Your data and Personal Information. However, We cannot fully guarantee that Our system is totally impenetrable by virus, malware, disruption or extraordinary occurrence including unauthorized access by a third party. You may not disclose Your account password to anyone and must always maintain the security of the device You use.
          </p>
           <p style="font-weight:bold;font-size:12px;">
          Changes to this Privacy Policy
          </p>
           <p style="font-size:12px;">
         We may change in this Privacy Policy to reflect the changes in Our activity. If We change this Privacy Policy, We will notify You through e-mail or through announcement in the Website 1 (one) day prior to the changes become effective. We advise You to visit this page periodically to obtain the latest information regarding how We enforce this Privacy Policy.
          </p>
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
