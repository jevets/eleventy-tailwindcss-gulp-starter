const gulp = require('gulp')
const postcss = require('gulp-postcss')

// Default task builds for production
gulp.task('default', () => {
  return gulp.src('./src/css/app.css')
    .pipe(postcss([
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer'),
    ]))
})
