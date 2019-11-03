<template>
  <b-navbar toggleable="lg" type="dark" style="background-color:#233E98;">
    <b-navbar-brand href="#">
      <img src="@/assets/cgo-logo.png" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Salling</b-nav-item>
        <b-nav-item href="#">Tour</b-nav-item>
        <b-nav-item href="#">Transportation</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-form>
       <mdb-form-inline>
      <mdbIcon icon="search" />
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
    </mdb-form-inline>
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Register</b-nav-item>
        <b-nav-item href="#">Login</b-nav-item>
        <b-nav-item href="#">
          <b-badge variant="danger">For Marchant</b-badge>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<style scoped>
template {
  color: #ffffff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
