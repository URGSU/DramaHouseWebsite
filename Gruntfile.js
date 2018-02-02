module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 63342,
                    base: 'www-root'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}', '!build/**'],
                    dest: 'img/build'
                }]
            }
        },

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/agency.css": "less/agency.less" // destination file and source file
                }
            }
        },

        watch: {
            styles: {
                files: ['less/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true,
                    livereload: true
                }
            },
            images: {
                files: ['img/**/*.{png,jpg,gif}', '!**/build/**'], // which files to watch
                tasks: ['imagemin'],
                options: {
                    nospawn: true
                }
            }
        }

    });

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['less', 'watch', 'connect']);

};
