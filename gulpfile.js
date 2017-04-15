var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default', ['test'], function() {
    gulp.watch('**/*.js', ['test']);
});

gulp.task('test', function() {
    gulp.src('spec/**/*[sS]pec.js')
        .pipe(jasmine({ 'verbose': true, 'includeStackTrace': true }));
});