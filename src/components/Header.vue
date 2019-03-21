<template>
    <header class="main-header">
       <div class="main-header__logo-box">
          <img src="../assets/images/joi_logo.png" alt="Johann Logo" class="main-header__logo">
       </div>

      <div class="main-header__intro-box">
         <h1 class="main-header__heading-primary">
          <span class="main-header__heading-primary-main">Welcome to johanningi.com</span>
          <span class="main-header__heading-primary-sub">My Personal Website</span>
       </h1>
      </div>
    </header>
</template>

<script>

export default {
   name: 'header'
}
</script>

<style lang="scss" scoped>
// #4B7F9C  #002E7F
.main-header {
   width: 100%;
   height: 95vh;
   background-image: linear-gradient(
      to right bottom,
      rgba(75, 128, 156, 0.705),
      rgba(0, 47, 127, 0.521)),
      url('../assets/images/esja_hero.svg');
   background-size: cover;
   background-position: bottom;
   clip-path: polygon(0 0 , 100% 0, 100% 85vh, 0 100%);

   &__logo-box {
      position: absolute;
      top: 4rem;
      left: 4rem;
   }

   &__logo {
      height: 3.5rem;
   }
}

.main-header__intro-box {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-40%, -50%);
}

.main-header__heading-primary {
   color: #fff;
   text-transform: uppercase;
   text-align: center;

   // For smooter animation
   backface-visibility: hidden;
}

.main-header__heading-primary-main {
   display: block;
   font-size: 2rem;
   font-weight: 400;
   letter-spacing: 1rem;

   // Animation
   animation-name: moveInLeft;
   animation-duration: 1.2s;
   animation-timing-function: ease-in-out;
}

.main-header__heading-primary-sub {
   display: block;
   font-size: 6rem;
   font-weight: 400;
   letter-spacing: .5rem;

   // Animation
   animation-name: moveInRight;
   animation-duration: 1s;
   animation-timing-function: ease-in;
}

@keyframes moveInLeft {
   0% {
      opacity: 0;
      transform: translateX(-100px);
   }
   80% {
      opacity: .7;
      transform: translateX(10px);
   }
   100%{
      opacity: 1;
      transform: translate(0);
   }
}

@keyframes moveInRight {
   0% {
      opacity: 0;
      transform: translateY(-70px);
   }
   80% {
      opacity: .7;
      transform: translateY(10px);
   }
   100%{
      opacity: 1;
      transform: translate(0);
   }
}

</style>
