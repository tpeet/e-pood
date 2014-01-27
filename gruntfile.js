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
        }
    });
    grunt.initConfig({
      responsive_images: {
        options: {
          sizes: [{
            name: "small",
              width: 58
            },{
            name: "medium",
              width: 150
            },{
              name: "large",
              width: 400
            }]
        },
    dev: {
      files: [{
        expand: true,
        src: ['assets/img/products/*.{jpg,gif,png}']

      }]
    }
      },
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);

};