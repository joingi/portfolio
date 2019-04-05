<template>
  <div class="App o-container o-container--s o-vertical-spacing o-vertical-spacing--xl">
    <h1>Skeleton Loading Animation with Vue.js</h1>

    <section class="App__example o-vertical-spacing o-vertical-spacing--l">
      <DataFrame>
        <div slot-scope="{ data: blogPosts, error, loading }">
          <p
            v-if="error"
            class="error"
          >
            There was an error! Please try again.
          </p>
          <ul
            v-else
            class="o-vertical-spacing"
          >
            <template v-if="loading">
              <li
                v-for="n in 3"
                :key="n"
              >
                <BlogPost loading/>
              </li>
            </template>
            <template v-else>
              <li
                v-for="blogPost in blogPosts"
                :key="blogPost.id"
              >
                <BlogPost>
                  <img
                    slot="figure"
                    :src="blogPost.image"
                    alt=""
                  >
                  <template slot="headline">
                    {{ blogPost.title }}
                  </template>
                  {{ blogPost.snippet }}
                  <span slot="meta">
                    {{ blogPost.date }}
                  </span>
                </BlogPost>
              </li>
            </template>
          </ul>
        </div>
      </DataFrame>
    </section>
  </div>
</template>

<script>
import BlogPost from '@/components/Tests/BlogPost.vue';
import DataFrame from '@/components/Tests/DataFrame.js';

export default {
  name: `App`,
  components: {
    BlogPost,
    DataFrame,
  },
};
</script>

<style>

</style>

