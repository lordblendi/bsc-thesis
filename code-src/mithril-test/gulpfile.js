var gulp = require('gulp');
var drakov = require ('drakov');

gulp.task ( 'drakov-server', function () {

    var argv = {
        sourceFiles: './api-blueprint-test/*.md',
        serverPort: 3000
    };

    drakov.run(argv);

});

gulp.task('default', function () {
  return gulp.start('drakov-server');
});
