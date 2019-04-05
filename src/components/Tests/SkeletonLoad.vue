<template>
<span
   :style="{ height, width: computedWidth }"
   class="SkeletonBox"
   />
</template>

<script>
export default {
   name: 'SkeletonLoad',
   props: {
      maxWidth: {
         // The default maxiumum width is 100%.
         default: 100,
         type: Number
      },
      minWidth: {
         // Lines have min-width of 80%
         default: 80,
         type: Number
      },
      height: {
         default: '1em',
         type: String
      },
      width: {
         default: null,
         type: String
      }
   },
   computed: {
      computedWidth() {
      // Either use the given fixed width or
      // a random width between the given min
      // and max values.
      return this.width || `${Math.floor(Math.random() * (this.maxWidth - this.minWidth) + this.minWidth)}%`;
      }
   },

}
</script>

<style lang="scss">
.SkeletonBox {
   display: inline-block;
   position: relative;
   overflow: hidden;
   vertical-align: middle;
   background-color: #DDDBDD;

   &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(
         90deg,
         rgba(#fff, 0) 0,
         rgba(#fff, .2) 20%,
         rgba(#fff, .5) 60%,
         rgba(#fff, 0),
      );
      animation: shimmer 5s infinite;
   }

   @keyframes shimmer {
      100% {
         transform: translateX(100%);
      }
   }
}
</style>
