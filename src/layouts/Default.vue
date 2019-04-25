<template>
  <div class="layout">
    <Navigation />
    <slot/>
    <Footer />

  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      logoImg: "../assets/images/joi_logo.png"
    }
  }
}
</script>


<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
}
.layout {
  width: 100%;
  margin: 0 auto;
}
</style>
