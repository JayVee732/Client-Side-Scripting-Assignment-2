module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            html: {
                files: '**/*.html',
                tasks: ['html'],
                options: {
                    livereload: true,
                },
            },
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
};