// module.exports = function(grunt) {
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),
//     bower: {
//       install: {
//         options: {
//           verbose: true,
//           copy: false
//         }
//       },
//       copy: {
//         options: {
//           targetDir: './www/lib',
//           verbose: true,
//           install: false
//         }
//       }
//     },
    
//     less: {
//       spinkit: {
//         options: {
//           plugins: [
//             new (require('less-plugin-autoprefix'))()
//           ]
//         },
//         files: {
//           // './bower_components/semantic-ui/dist/semantic.css': './bower_components/semantic-ui/src/semantic.less'
//         }
//       }
//     }
//   });

//   grunt.loadNpmTasks('grunt-bower-task');
//   grunt.loadNpmTasks('grunt-contrib-copy');
//   grunt.loadNpmTasks('grunt-contrib-less');

//   grunt.registerTask('init', ['bower:install', 'less:spinkit',  'bower:copy']);
// };