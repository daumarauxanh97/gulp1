var gulp =require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function(){
    return gulp.src('app/scss/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('html', function(){
    return gulp.src('app/index.html')
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('watch', ['browserSync', 'sass'],function(){
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('app/index.html', browserSync.reload);
    gulp.watch('app/css/*.css', browserSync.reload);
    // Other watchers
})
var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})
var imagemin = require('gulp-imagemin');
gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});