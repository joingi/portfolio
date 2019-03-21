<template>
  <Layout>
    <Header />
    <div class="main home">
      <h2>Main Home</h2>
      <!-- <SectionAbout />
      <SectionContact /> -->
    </div>
  </Layout>
</template>


<script>

import Header from '@/components/Header.vue';
// import SectionAbout from '@/components/SectionAbout.vue';
// import SectionContact from '@/components/SectionContact.vue';

export default {
  components: {
    Header,

  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  margin: 0 auto;
}

</style>