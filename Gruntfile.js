module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "sass/*.sass",
        tasks: ['sass']
      }
    },      
    // SASS task config      
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/main.css': 'sass/main.sass'
  			}
  		}
  	},
      
    browserSync: {
        bsFiles: {
            src : ['css/*.css', '*.html']
        },
        options: {
            server: {
                baseDir: "./"
            },
            options: {
                watchTask: true
            }
        }
    },

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif,jpeg}'],
  				dest: 'build/'
  			}]
  		}
  	}
    
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s)

  grunt.registerTask('default', ["sass", "imagemin", "browserSync", "watch"]);
};