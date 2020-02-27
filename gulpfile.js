const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('build-script', function () {
    return gulp.src('./build/static/js/*.js')
        .pipe(concat('CSP_CollectionMenu.js'))
        .pipe(gulp.dest('./dist/SharePointCollectionNavigation_CollectionNavigation feature/Style Library/CollectionNavigation/js'))
        .pipe(gulp.dest('s:/Style Library/CollectionNavigation/js'))
});

gulp.task('build-css', function () {
    return gulp.src('./build/static/css/*.css')
        .pipe(concat('CSP_CollectionMenu.css'))
        .pipe(gulp.dest('./dist/SharePointCollectionNavigation_CollectionNavigation feature/Style Library/CollectionNavigation/css'))
        .pipe(gulp.dest('s:/Style Library/CollectionNavigation/css'))
});

gulp.task('default', gulp.parallel(['build-script', 'build-css']))