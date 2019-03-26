<template>
      <section class="section-about">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">I make websites</h2>
        </div>

        <div class="row">
         <div class="col-1-of-2">
            <h3 class="heaading-tertiary u-margin-bottom-small">Living and learning one day at a time</h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi quisquam esse similique excepturi voluptatem harum repellendus et provident ut, fugiat corporis soluta nihil, iusto eligendi veritatis quidem id error.
            </p>

            <h3 class="heaading-tertiary u-margin-bottom-small">Living and learning one day at a time</h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi quisquam esse similique excepturi voluptatem harum repellendus et provident ut.
            </p>

            <a href="#" class="btn-text">About me &rarr;</a>
         </div>
         <div class="col-1-of-2">
           <Composition />
         </div>
      </div>
      </section>
</template>


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
  }
}
</script>
