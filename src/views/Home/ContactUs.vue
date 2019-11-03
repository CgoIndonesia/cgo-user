<template>
  <div>
    <Header />
        <div class="container" style="margin-top:100px;">
            <b-row>
                <b-col>
                    <p style="font-size:30px;color:#233E98;font-weight:bold;">Contact Us</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <p style="font-size:12px;">For an immediate response, send us your request or inquiry through this form.</p>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col md="8">
                    <div class="form-contact">
                         <b-form>
                            <b-form-group label="Subject" style=" text-align:left;font-weight:bold">
                                <b-form-input name="subject" id="subject"></b-form-input>
                            </b-form-group>
                            <b-form-group label="Message" style=" text-align:left;font-weight:bold">
                                <b-form-textarea id="message"  rows="4"></b-form-textarea>
                            </b-form-group>
                            <b-button type="reset" variant="danger">Subscribe</b-button>
                            </b-form>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
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
    .form-contact{
        color: black;
        border:#d4d9da solid 1px;
        padding: 20px;
        margin: 10px 0 150px 0
    }
</style>
