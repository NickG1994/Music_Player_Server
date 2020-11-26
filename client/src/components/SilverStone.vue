<template>
  <b-container class="main-wrapper" fluid>

    <!-- Header Section -->
    <b-container class="header-container" fluid>

      <b-row class="contents">
        
        <b-row class="margin-left" >
          <b-col> <img class="logo-img" src="../assets/Logo.png" alt=""> </b-col>
          <b-col> <h3 class="item company-name">ilverStone</h3> </b-col>
        </b-row>

        <b-col class="margin-center"> <h4 class="item number">Call (956)345-5496</h4> </b-col>

        <b-nav class="menu">
          <b-nav-item class="item menu-item"><a href="#" class="link home-link">Home</a></b-nav-item>
          <b-nav-item class="item menu-item"><a href="#" class="link service-link">Home Services</a></b-nav-item>
          <b-nav-item class="item menu-item"><a href="#" class="link gallery-link">Gallery</a></b-nav-item>
          <b-nav-item class="item menu-item"><a href="#" class="link about-link">About Us</a></b-nav-item>
          <b-nav-item class="item menu-item"><a href="#" class="link contact-link">Contact Us</a></b-nav-item>
        </b-nav>

      </b-row>

    </b-container>
    <!-- End Header Section -->

    <!-- Hero Section -->
    <b-container class="hero bottom-border" fluid>

      <b-row class="left">
        <b-col class="background-image"></b-col>
      </b-row>

      <b-row class="right">
       <b-col class="content-wrapper">
          <h2 class="content welcome">Welcome to Silverstone Builder, LLC</h2>
          <h3 class="content trust">Trust your dream home to us</h3>
          <b-button class="content btn contact">Contact us</b-button>
        </b-col>
      </b-row>


    </b-container>
    <!-- End Hero Section -->

    <!-- Home Services Section -->
      <b-container class="services" fluid>
        <b-col class="service-left-container">
          <b-row class="service-left"><h1 class="service-content header-service"> Home Service </h1></b-row>
          <b-row class="service-left"><p class="service-content paragraph">Turn to us for home remodeling services in Mission, TX</p></b-row>
          <b-row class="service-left"><p class="service-content paragraph-2"><br> Whether you're starting your home from scratch or want to revamp 
                                      your house, turn to the affordable general contractors of Silverstone
                                      Builders, LLC. We specialize in new construction and home remodeling services in 
                                      Mission, TX. Every service we do is tailored to the wants and needs 
                                      of each client. You'll work one-on-one with us throughout your 
                                      entire project. You can expect nothing but high-quality results from us. 
                                      Contact us now to get a free estimate on new constructior home remodeling services.</p></b-row>
        </b-col>
        
        <b-col class="service-Right">
          <b-card img-src="https://picsum.photos/900/250/?image=3" class="design-ser"><b-card-text class="card-text">Home Services</b-card-text></b-card>
          <b-card class="new-con"><b-card-text class="card-text">New Construction</b-card-text></b-card>
          <b-card class="home-rem"><b-card-text class="card-text">Home Remodeling</b-card-text></b-card>
          <b-card class="home-add"><b-card-text class="card-text">Home Add</b-card-text></b-card>
        </b-col>
      </b-container>
    <!-- End Home Services Section -->

  </b-container>
</template>

<script>
export default {
  name: 'SilverStone',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/style.css" scoped></style>
