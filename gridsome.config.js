const path = require('path')

// Global Preprocessor Config #1
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
				path.resolve(__dirname, './src/assets/*.scss'),
				// you can also use a glob if you'd prefer
				// path.resolve(__dirname, './src/assets/sass/*.sass'),
      ],
    })
}

module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://johann-api.000webhostapp.com/', // required
        apiBase: 'wp-json',
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100, // How many posts to load from server per request (Optional)
        concurrent: 10, // How many requests to run simultaneously (Optional)
        routes: {
          post: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
          post_tag: '/tag/:slug' // adds route for "post_tag" post type (Optional)
        }
      }
    }
  ],
  // Global Preprocessor Config #2
  chainWebpack: config => {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
	}
}