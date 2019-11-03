<template>
  <div class="home">
    <Header />
    <div class="content">
      <b-row align-h="center">
        <div class="form-menu">
                <b-row align-h="center">
                    <b-col>
                        <p style="font-size:32px;color:#ffffff;">Merchant</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div class="form">
                            <b-row align-h="center">
                                <b-col>
                                    <p>Why work with us</p>
                                </b-col>
                            </b-row>
                            <b-row align-h="center">
                                <b-col>
                                    <b-row align-h="center">
                                        <b-col md="1">
                                            <img src="@/assets/image 39.png" alt="">
                                        </b-col>
                                        <b-col md="3">
                                            <p style="text-align:left;">Manage you services without hassle. All in one app</p>
                                        </b-col>
                                        <b-col md="1">
                                            <img src="@/assets/image 40.png" alt="">
                                        </b-col>
                                        <b-col md="3">
                                            <p style="text-align:left;">Direct access to supply and demand</p>
                                        </b-col>
                                   </b-row>
                                   <b-col>
                                     <mdb-container>
                                        <mdb-btn rounded color="default" @click.native="cascading = true">launch cascading register / login modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
                                        <mdb-modal :show="cascading" @close="cascading = false" cascade tabs>
                                          <mdb-tab tabs justify class="light-blue darken-3">
                                            <mdb-tab-item :active="tabs==1" @click.native.prevent="tabs = 1"><mdb-icon icon="user" class="mr-1"/>Login</mdb-tab-item>
                                            <mdb-tab-item :active="tabs==2" @click.native.prevent="tabs = 2"><mdb-icon icon="user-plus" class="mr-1"/>Register</mdb-tab-item>
                                          </mdb-tab>
                                          <mdb-modal-body class="mx-3" v-if="tabs==1">
                                            <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
                                            <mdb-input label="Your password" icon="lock" type="password"/>
                                            <div class="mt-2 text-center">
                                              <mdb-btn color="info">Log in <mdb-icon icon="sign-in-alt" class="ml-1"/></mdb-btn>
                                            </div>
                                          </mdb-modal-body>
                                          <mdb-modal-footer center v-if="tabs==1">
                                            <div class="options text-center text-md-right mt-1">
                                              <p>Not a member? <a href="#" @click="tabs=2">Sign Up</a></p>
                                              <p>Forgot <a href="#">Password?</a></p>
                                            </div>
                                            <mdb-btn outline="info" class="ml-auto" @click.native="cascading=false">Close</mdb-btn>
                                          </mdb-modal-footer>
                                          <mdb-modal-body class="mx-3" v-if="tabs==2">
                                            <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
                                            <mdb-input label="Your password" icon="lock" type="password" class="mb-5"/>
                                            <mdb-input label="Repeat password" icon="lock" type="password"/>
                                            <div class="mt-2 text-center">
                                              <mdb-btn color="info">Sign Up<mdb-icon icon="sign-in-alt" class="ml-1"/></mdb-btn>
                                            </div>
                                          </mdb-modal-body>
                                          <mdb-modal-footer center v-if="tabs==2">
                                            <div class="options text-center text-md-right mt-1">
                                              <p>Already have an account? <a href="#" @click="tabs=1">Log in</a></p>
                                            </div>
                                            <mdb-btn outline="info" class="ml-auto" @click.native="cascading=false">Close</mdb-btn>
                                          </mdb-modal-footer>
                                        </mdb-modal>
                                      </mdb-container>
                                   </b-col>
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>
                </b-row>
        </div>
      </b-row>
      <div class="image">
        <img src="@/assets/image 41.png" width="100%" />
      </div>
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
.content{
    height: 800px;
}
.form-menu{
    position: absolute;
    margin-top: 70px;
}
.form{
    background-color: #ffffff;
    color: black;
    margin-top: 50px;
    border:#d4d9da solid 1px;
    padding: 20px;
    border-radius: 5px;
}
@media only screen and (max-width: 600px) {
.form-menu{
    margin-top: 10px;
    text-align: center;
  }
.form-menu .p{
    text-align: center;
  }
}
</style>
