<template>
  <Layout>
    <h1>Front Title</h1>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <div v-if="edge.node.title == 'About'">
        <h2>{{ edge.node.title }}</h2>
        <div v-html="edge.node.fields.content" />
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
