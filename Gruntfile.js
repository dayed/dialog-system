module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
    ,uglify: {
      options: {
        banner: '/*! <%= pkg.name %> by ZHAO Xudong, html5beta.com <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        ,report: ['min', 'gzip']
        ,mangle: {
          except: ['exports', 'module', 'require']
        }
      }
      ,dist: {
        files: {'./ds.min.js': ['ds.js']}
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-newer')
  grunt.registerTask('nu', ['newer:uglify'])
  grunt.registerTask('default', ['newer:uglify'])

}