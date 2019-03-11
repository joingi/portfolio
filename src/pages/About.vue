<template>
  <Layout>
    <h1>About us</h1>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <div v-if="edge.node.title == 'Om os'">
        <h2>{{ edge.node.title }}</h2>
        <div> {{ edge.node.fields.content }} </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Posts {
    posts: allWordPressPost
 {
      edges {
        node {
          id
          title
          fields {
            content
          }
        }
      }
    }
  }
</page-query>

<script>
export default {}
</script>
