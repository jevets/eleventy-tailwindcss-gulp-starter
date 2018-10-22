const gulp = require('gulp')
const postcss = require('gulp-postcss')
const watch = require('gulp-watch')

// Default task builds for production
gulp.task('default', () => {
  return gulp.src('./src/css/app.css')
    .pipe(postcss([
      require('tailwindcss')('./tailwind.js'),
      require('autoprefixer'),
    ]))
})

gulp.task('watch', () => {
  // TODO
})
