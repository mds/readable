module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            dist:  {
                options: {
                    style: 'compressed'
                },
                files: {
                    'source/plugin/styles/readable.css': 'source/plugin/styles/screen.scss'
                }
            }
        },
        uglify: {
            blog: {
                files: {
                    'readable/readable-new.min.js': ['source/plugin/scripts/readable-new.js']
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['source/**/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            css: {
                files: ['source/**/*.scss'],
                tasks: ['sass'],
            }
        }
    });

    grunt.registerTask('default', ['watch']);
};