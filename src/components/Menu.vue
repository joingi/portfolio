<template>
   <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'home' }">LinkedIn</g-link>
        <g-link class="nav__link" :to="{ name: 'about' }">Instagram</g-link>
      </nav>
</template>

<style lang="scss" scoped>
.nav {
  position: relative;
  margin-right: 30px;
   .nav__link {
     color: $mainWhite;
   }
}

.nav__link {
  margin-left: 20px;
}
</style>
