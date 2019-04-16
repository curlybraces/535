<template>
<ul id="menu">
  <li data-menuanchor="intro" class="active"><a href="#intro">Home</a></li>
  <li data-menuanchor="about"><a href="#about">About</a></li>
  <li data-menuanchor="services"><a href="#services">Services</a></li>
  <li data-menuanchor="portfolio"><a href="#portfolio">Portfolio</a></li>
  <li data-menuanchor="client"><a href="#client">Clients</a></li>
  <li data-menuanchor="blog"><a href="#blog">Blog</a></li>
  <li data-menuanchor="faq"><a href="#faq">FAQ</a></li>
  <li data-menuanchor="career"><a href="#career">Career</a></li>
  <li data-menuanchor="contact"><a href="#contact">Contact</a></li>
</ul>
</template>

<script>
export default {
  data() {
    return {
      miniVariant: false,
      right: true,
      rightDrawer: null,
    }
  }
}
</script>

<style>
ul#menu {
  margin: 20px 20px 0 20px;
  padding: 0;
}

ul#menu li {
  list-style-type: none;
  padding: 3px 0 5px;
}

ul#menu li a {
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Exo 2', sans-serif;
  color: #333;
}

ul#menu li a:hover {
  color: #000;
}
</style>
