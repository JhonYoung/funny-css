module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          verbose: true,
          copy: false
        }
      },
      copy: {
        options: {
          targetDir: './www/lib',
          verbose: true,
          install: false
        }
      }
    },
 
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('init', ['bower:install', 'bower:copy']);
};