<template>
      <!-- <div class="hero" :style="{backgroundImage: 'url(' +heroImage+ ')'}" ></div> -->
      <div class="home-hero-wrapper">
            <div class="home-hero"></div>
      </div>
</template>

<script>
// export default {
//       data () {
//             return {
//                   heroImage: '@/assets/images/esja.svg'
//             }
//       }
// }
</script>

<style lang="scss" scoped>

.home-hero-wrapper {
      position: relative;
      width: 100%;
      height: 95vh;
}

      .home-hero {
            position: absolute;
            background-image: url('../assets/images/esja.svg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 60% 60%;
            height: 120%;
            width: 100%;

            @include phone {
                  background-image: url('../assets/images/esja_mobile.png');
                  height: 350px;
                  background-position: center;
                  margin-top: -20px;
            }

            @include tablet-up {


            }
      }
</style>
