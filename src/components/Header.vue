<template>
    <header class="header">
       <Logo />
      <Menu />
    </header>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Logo from '@/components/Logo.vue';

export default {
   components: {
      Menu,
      Logo
   }
}
</script>

<style lang="scss" scoped>
.header {
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   min-height: 75px;
   width: 100%;
   background-color: $backBlack;
   box-shadow: 0px 1px 0px 0px rgba(255,255,255,0.09)
}

// .header {
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px;
// }

</style>
