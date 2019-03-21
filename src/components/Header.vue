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
   text-align: center;
}

.heading-primary {
   color: #fff;
   text-transform: uppercase;
   margin-bottom: 3rem;

   // For smooter animation
   backface-visibility: hidden;
}

.heading-primary--main {
   display: block;
   font-size: 2rem;
   font-weight: 400;
   letter-spacing: 1rem;

   // Animation
   animation-name: moveInLeft;
   animation-duration: 1.2s;
   animation-timing-function: ease-in-out;
}

.heading-primary--sub {
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

@keyframes moveInBottom {
   0% {
      opacity: 0;
      transform: translateY(50px);
   }

   100%{
      opacity: 1;
      transform: translateY(0);
   }
}

// Button
.btn:link,
.btn:visited {
   position: relative;
   text-transform: uppercase;
   text-decoration: none;
   padding: 1.5rem 4rem;
   display: inline-block;
   border-radius: 10rem;
   transition: all .2s;

   &:hover {
      transform: translateY(-.3rem);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
   }

   &:active {
      transform: translateY(-.1rem);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
   }
}

.btn--white {
   background-color: #fff;
   color: #777;
}

// animate fake btn behind the button
.btn::after {
   content: "";
   display: inline-block;
   height: 100%;
   width: 100%;
   border-radius: 100px;
   position: absolute;
   top: 0;
   left: 0;
   z-index: -1;
   transition: all .4s;
}

.btn--white::after {
   background-color: #fff;
}

.btn:hover::after {
   transform: scaleX(2) scaleY(1.5);
   opacity: 0;
}

.btn--animated {
   animation: moveInBottom .4s ease-out .75s;
   animation-fill-mode: backwards;
}

</style>
