<template>
  <Layout>
    <Header />
    <div class="main main-home">
      <SectionAbout />
      <SectionContact />
    </div>
  </Layout>
</template>


<script>

import Header from '@/components/Header.vue';
import SectionAbout from '@/components/SectionAbout.vue';
import SectionContact from '@/components/SectionContact.vue';

export default {
  components: {
    Header,
    SectionAbout,
    SectionContact

  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  margin: 0 auto;
}
</style>