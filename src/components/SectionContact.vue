<template>
   <section class="contact-home">
        <article class="contact-home-wrapper section-padding">
          <h1>Living and learning one day at the time</h1>
          <div class="blue-underline"></div>
          <p class="p-center">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time</p>
        </article>
      </section>
</template>

<script>
export default {
name: 'SectionContact'
}
</script>

<style lang="scss" scoped>

.contact-home {
   position: relative;
   display: block;
   min-height: 440px;

   h1 {
      text-align: center;
      max-width: 440px;
      font-size: 1.8rem;

      @include phone {
         padding-top: 4rem;
      }
   }

   p {
      padding: 1rem;
      margin-top:1.2rem;
      max-width: 760px;
   }
}

.blue-underline {
   width: 90px;
   height: 4px;
   background-color: $primaryColor;
}

.section-padding {
   padding-top: 4rem;
   padding-bottom: 4rem;
}

.p-center {
   text-align: center;
}

.contact-home-wrapper {
   display: flex;
   flex-direction: column;
   align-items: center

}

</style>
