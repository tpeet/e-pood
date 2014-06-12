module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    'build/assets/css/styles.css': 'build/assets/css/styles.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['build/assets/css/styles.css'],
                tasks: ['autoprefixer']
            }
        },
        cmq: {
          options: {
            log: true
          },
          your_target: {
            files: {
              'output': ['build/assets/css/styles.css']
            }
          }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-combine-media-queries');
    grunt.registerTask('default', 'cmq');
};