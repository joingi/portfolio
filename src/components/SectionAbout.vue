<template>
      <section class="section-about">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">I make websites</h2>
        </div>

        <div class="row">
         <div class="col-1-of-2">
            <h3 class="heaading-tertiary u-margin-bottom-small">{{ this.$page.posts.edges[0].node.title }}</h3>
            <p class="paragraph" v-html="this.$page.posts.edges[0].node.content"> </p>
            <!-- Button to about -->
            <!-- <a href="#" class="btn-text">About me &rarr;</a> -->
         </div>
         <div class="col-1-of-2">
           <!-- <Composition /> -->
           <div class="section-about-featured-img">
             <img src="../assets/images/about_code_img.png" alt="" class="section-about-featured-img__photo">
           </div>
         </div>
      </div>
      </section>
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
import Composition from '~/components/Composition'

export default {
  components: {
    Composition
  },
   data () {
      return {
        about: '/about'
      }
  },
  mounted() {
    console.log(this.$page.posts.edges[0].node);
  },
}
</script>

<style lang="scss" scoped>
  .section-about-featured-img {
    position: relative;

    &__photo {
      width: 90%;
      box-shadow: 0 1.5rem 4rem rgba($color-black, .2);
    }
  }
</style>
