<template>
      <section class="about-home">
          <div id="item1" class="text-box">
            <h1>I make websites</h1>
            <p>Design and development for community site,  branding site or webshops</p>
            <router-link :to="about">About me -></router-link>
          </div>

        <div id="item2" class="image-box"></div>

      </section>
</template>


<style lang="scss" scoped>
.about-home {
  position: relative;
  display: grid;
  grid-template-columns: 60% 40%;
  margin: 0 auto;
  padding-top: 3%;
  min-height: 440px;
  max-width: 1200px;

   @include phone {
     grid-template-columns: 1fr;
   }
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    background-color: $backGrey;

    @include phone {
      background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.9)), url('../assets//images/about_code_img.png');
      background-repeat: no-repeat;
      background-size: cover;
    }

    p {
      max-width: $maxBoxTextWidth;
      margin-top: 0px;
      margin-bottom: 36px;
    }

    a {
       color: $primaryColor;
    }
  }
  .image-box {
    background-image: url('../assets//images/about_code_img.png');
    background-repeat: no-repeat;
    background-size: cover;

    @include phone {
      display: none;
    }
  }
</style>

<script>
export default {
   data () {
    return {
      about: '/about'
    }
  }
}
</script>
