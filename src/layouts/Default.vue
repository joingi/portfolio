<template>
  <div class="layout">
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle">
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon"></span>
      </label>

      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item"><a href="#" class="navigation__link">Navigation</a></li>
          <li class="navigation__item"><a href="#" class="navigation__link">Navigation</a></li>
          <li class="navigation__item"><a href="#" class="navigation__link">Navigation</a></li>
        </ul>
      </nav>
    </div>
    <slot/>

  <footer class="footer">
    <div class="footer__logo-box">
      <img src="../assets/images/joi_logo.png" alt="logo" class="footer__logo">
      <!-- <img v-bind:src="logoImg" alt="logo" class="footer__logo"> -->
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item"><a href="#" class="footer__link">About</a></li>
            <li class="footer__item"><a href="#" class="footer__link">About</a></li>
            <li class="footer__item"><a href="#" class="footer__link">About</a></li>
          </ul>
        </div>
      </div>
      <div class="col-1-of-2">
        <div class="footer__copyright">
          <p>Lorem ipsum build by <a href="#" class="footer__link">Johann Ingi</a> dolor sit amet consectetur adipisicing elit. Delectus deserunt autem quod quae velit nihil temporibus deleniti a quas libero odio labore, itaque ab adipisci nostrum minus cupiditate ex repellendus.</p>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoImg: "../assets/images/joi_logo.png"
    }
  }
}
</script>


<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
}
.layout {
  width: 100%;
  margin: 0 auto;
}
</style>
