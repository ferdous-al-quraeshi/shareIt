module.exports = function(grunt) {


  grunt.initConfig({
    'react': {
      files: {
        expand: true,
        cwd: 'client/js/',
        src: ['**/*.js'],
        dest: 'client/build/',
        ext: '.js'
      }
    },
    'http-server':{
      dev:{
        root:"",
        port:8080,
        host: "0.0.0.0",
      }
    }

})

  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.registerTask('default', ['react','http-server']);

};