<template>
  <div id="home-container">
    <Header/>
    <Presentation/>
    <Advertisement/>
    <About/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Presentation from "@/components/home/Presentation";
import Advertisement from "@/components/home/Advertisement";
import About from "@/components/home/About";
import Footer from "@/components/home/Footer";
import Contact from "@/components/home/Contact";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {Contact, Footer, About, Advertisement, Presentation, Header }
}
</script>

<style>
  #home-container {
    margin: 0;
  }


</style>