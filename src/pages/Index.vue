<template>
  <Layout>
    <Header />
    <div class="main main-home">
      <SectionAbout id="sectionAbout"/>
      <SectionContact id="sectionContact"/>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
    posts: allWordPressPost
 {
      edges {
        node {
          id
          title
          content
          excerpt
        }
      }
    }
  }
</page-query>

<script>

import Header from '@/components/Header.vue';
import SectionAbout from '@/components/SectionAbout.vue';
import SectionContact from '@/components/SectionContact.vue';

export default {
  components: {
    Header,
    SectionAbout,
    SectionContact

  },
  mounted() {
    // console.log(this.$page);
  },
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  margin: 0 auto;
}
</style>