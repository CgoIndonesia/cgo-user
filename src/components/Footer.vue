<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color:#233E98;">
      <b-col md="6">
        <b-navbar-brand style="font-size:16px;">be the first to receive our update news!</b-navbar-brand>
      </b-col>
      <b-col md="6" style="align:right;">
        <b-form>
          <b-row>
            <b-col md="8">
              <b-form-input v-model="text" placeholder="your email address"></b-form-input>
            </b-col>
            <b-col md="2">
              <b-button variant="danger">subscribe</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-navbar>
    <div class="footer-bottom">
      <b-container fluid class="text-left" style="font-size:12px;">
        <b-row>
          <b-col md="2">
            <p style="font-weight:bold;color:#233E98;">Company</p>
            <b-link href="#">About</b-link>
            <br />
            <b-link href="#">Careers</b-link>
            <br />
            <b-link href="#">Marchant</b-link>
          </b-col>
          <b-col md="2">
            <p style="font-weight:bold;color:#233E98;">Customer Care</p>
            <b-link href="#">FAQ</b-link>
            <br />
            <b-link href="#">Term & Condition</b-link>
            <br />
            <b-link href="#">Privacy Policy</b-link>
            <br />
            <b-link href="#">Contact Us</b-link>
          </b-col>
          <b-col md="2">
            <p style="font-weight:bold;color:#233E98;">Connect with Us</p>
          </b-col>
          <b-col md="3" offset-md="3">
            <b-button variant="light" style="margin:5px;width:100px;">English</b-button>
            <b-button variant="light" style="margin:5px;width:100px;">USD</b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p style="font-weight:bold;color:#233E98;">&copy;2019 cGo. All rights reserved</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<style scoped>
template {
  color: #ffffff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.footer-bottom {
  background-color: #d9f7fa;
  padding: 30px;
}
</style>
