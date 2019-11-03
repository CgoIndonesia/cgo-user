<template>
  <div class="home">
    <Header />
    <div class="portofolio">
      <b-row align-h="center" class="mb-12">
            <b-col md="6">
              <p style="font-weight:bold;font-size:20px;color:#233E98">About</p>
            </b-col>
            <b-col md="6">
              <P style="font-weight:bold;font-size:20px;color:#233E98">#exploretheblue</P>
            </b-col>
      </b-row>
        <b-row align-h="center">
          <div class="vision-mision">
            <b-col md="3">
              <div class="portofolio1">
                <p>VISION</p>
                <p>
                  To preserve the beauty in order to
                  enhance the quality of Indonesia sea
                  travel industry
                </p>
              </div>
              </b-col>
              <b-col md="3">
              <div class="portofolio2">
                <p>MISION</p>
                <p>
                  Make Indonesian sea travel
                  easy to access
                </p>
              </div>
          </b-col>
         </div>
      </b-row>
    </div>
    <div class="content">
      <div class="image">
        <img src="@/assets/image-home.png" width="100%" />
      </div>
    </div>
    <div class="content-text" style="padding:10% 20% 10% 20%;font-size:18px;">
      <p>cGO exist to provider access for everyone to Explore, Experience and Enjoy the Indonesia.archipelago through trusted paltform in an affordable,safety and comfortable manner.Starting with personal experience,we commited to create a</p>
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
.portofolio {
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: 50%;
  margin: 20% auto auto auto;
  position: absolute;
  color: #ffffff;
}
.portofolio1 {
  width: 300px;
  height: 150px;
  float: left;
  padding: 10px 0 10px 0;
  background-color: #233e98;
  border-radius: 5px;
  box-shadow: 0 0 3px 0;
}
.portofolio2 {
  width: 300px;
  height: 150px;
  float: right;
  background-color: #52b1ed;
  border-radius: 5px;
  padding: 10px 0 10px 0;
  box-shadow: 0 0 3px 0;
}
@media only screen and (max-width: 600px) {
.portofolio {
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: 20% auto auto auto;
  position: relative;
  color: #ffffff;
}
}
</style>
