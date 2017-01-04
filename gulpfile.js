var less = require('gulp-less');
var gulp = require('gulp')
var path = require('path');
gulp.task('less', function () {
    return gulp.src('style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes')  ]
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('style.less', ['less']);
});
gulp.task('default', ['watch', 'less']);
