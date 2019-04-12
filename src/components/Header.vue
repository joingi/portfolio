<template>
<header class="main-header">
   <div class="main-header__logo-box">
      <img src="../assets/images/joi_logo.png" alt="Johann Logo" class="main-header__logo">
       </div>

      <div class="main-header__intro-box">
         <h1 class="heading-primary">
            <span class="heading-primary--main">Welcome to johanningi.com</span>
            <span class="heading-primary--sub">My Personal Website</span>
         </h1>

         <a href="#" class="btn btn--white btn--animated">Enter</a>
      </div>
</header>
</template>

<script>
export default {
   name: 'header'
}
</script>

<style lang="scss" scoped>

.main-header {
   width: 100%;
   height: 95vh;
   background-image: linear-gradient(to right bottom,
      rgba($color-primary-grey, 0.705),
      rgba($color-primary-dark, 0.521)),
      url('../assets/images/esja_hero.svg');
   background-size: cover;
   background-position: bottom;
   clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);

   @include respond(phone) {
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 87vh, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 87vh, 0 100%);
   }

   &__logo-box {
      position: absolute;
      top: 7rem;
      left: 6.5rem;
   }

   &__logo {
      height: 3.5rem;
   }
}

.main-header__intro-box {
   @include centerVertHoriz;
   text-align: center;
}

</style>
