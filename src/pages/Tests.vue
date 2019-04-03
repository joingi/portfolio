<template>
<div class="main test-main">
   <FloatGrid />

   <section class="section-features">
      <div class="row">
         <div class="col-1-of-4">
            <div class="feature-box">
               <i class="feature-box__icon icon-basic-world"></i>
               <h3 class="heading-tertiary">Explore the World</h3>
               <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi quisquam esse similique excepturi
               </p>
            </div>
         </div>

         <div class="col-1-of-4">
            <div class="feature-box">
               <i class="feature-box__icon icon-basic-compass"></i>
               <h3 class="heading-tertiary">Meet Nature</h3>
               <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi quisquam esse similique excepturi
               </p>
            </div>
         </div>

         <div class="col-1-of-4">
            <div class="feature-box">
               <i class="feature-box__icon icon-basic-map"></i>
               <h3 class="heading-tertiary">Find your way</h3>
               <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi quisquam esse similique excepturi
               </p>
            </div>
         </div>

         <div class="col-1-of-4">
            <div class="feature-box">
               <i class="feature-box__icon icon-basic-heart"></i>
               <h3 class="heading-tertiary">Healtier life</h3>
               <p class="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi quisquam esse similique excepturi
               </p>
            </div>
         </div>
      </div>
   </section>

</div>
</template>

<script>
import FloatGrid from '~/components/Tests/FloatGrid';
export default {
   components: {
      FloatGrid
   }
}
</script>

<style lang="scss" scoped>
.section-features {
   padding: 20rem 0;
   background-image: linear-gradient(to right bottom,
      rgba($color-primary-dark, .8),
      rgba($color-primary-grey, .8)),
      url('../assets/images/about_code_img-3.jpg');
   background-size: cover;
   background-position: bottom;

   transform: skewY(-7deg);

   // margin-top: -10rem;

   // Selecft only the row
   & > * {
      transform: skewY(7deg);

   }
}

.feature-box {
   background-color: rgba($color-white, .8);
   font-size: 1.5rem;
   padding: 2.5rem;
   text-align: center;
   border-radius: 3px;
   box-shadow: 0 1.5rem 4rem rgba($color:$color-black, $alpha: .15);
   transition: transform .2s;

   &__icon {
      font-size: 6rem;
      margin-bottom: .5rem;
      display: inline-block;
      background-image: linear-gradient(to right, $color-primary-grey, $color-primary-dark);
      -webkit-background-clip: text;
      color: transparent;

   }

   &:hover {
      transform: translateY(-1.5rem) scale(1.03);
   }

   &__text {}
}
</style>
