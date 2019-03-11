<template>
  <Layout>

    <Hero />
    <!-- <PostList /> -->
  </Layout>
</template>


<script>

import PostList from '@/components/PostList.vue'
import Hero from '@/components/Hero.vue'

export default {
  components: {
    Hero,
  }
}
</script>