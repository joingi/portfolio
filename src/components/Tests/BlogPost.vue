<template>
  <div class="BlogPost o-media">
    <div class="o-media__figure">
      <SkeletonLoad
        v-if="loading"
        width="100px"
        height="80px"
      />
      <slot
        v-else
        name="figure"
      />
    </div>
    <div class="o-media__body">
      <div class="o-vertical-spacing">
        <h3 class="BlogPost__headline">
          <!-- <slot name="headline"/> -->
          <SkeletonLoad
            v-if="loading"
            :min-width="50"
            :max-width="70"
            />
          <slot
          v-else
          name="headline"
          />
        </h3>
        <p>
          <!-- <slot/> -->
          <template v-if="loading">
            <SkeletonLoad/>
            <SkeletonLoad/>
            <SkeletonLoad/>
            <SkeletonLoad/>
          </template>
          <slot v-else />
        </p>
        <div class="BlogPost__meta">
          <!-- <slot name="meta"/> -->
          <SkeletonLoad
            v-if="loading"
            width=70px
            />
            <slot
              v-else
              name="meta"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonLoad from '@/components/Tests/SkeletonLoad.vue';
export default {
  name: 'BlogPost',
  components: {
    SkeletonLoad
  },
  props: {
    loading: {
      default: false,
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
.BlogPost {
  &__headline {
    font-size: 1.25em;
    font-weight: bold;
  }

  &__meta {
    font-size: 0.85em;
    color: #6b6b6b;
  }
}
</style>