var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['css'], function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("./css/**/*.css", ['css']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Auto-inject CSS into browsers
gulp.task('css', function() {
    return gulp.src("./css/**/*.css")
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);