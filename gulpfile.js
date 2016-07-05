
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminJpegRecompress = require('imagemin-jpeg-recompress')

const imageminOpt = {
  verbose: true
}

const jpegRecompressOpt = {
  accurate: true,
  quality: 'low', // low, medium, high, veryhigh
  method: 'smallfry' // mpe, ssim, ms-ssim, smallfry
}

const plugins = [
  imagemin.gifsicle(),
  // imagemin.jpegtran(), // lossless
  imageminJpegRecompress(jpegRecompressOpt), // lossy
  imagemin.optipng(),
  imagemin.svgo()
]

// method:
// https://github.com/danielgtaylor/jpeg-archive#demo
gulp.task('default', function () {
  return gulp.src('images/**/*')
    .pipe(imagemin(plugins, imageminOpt))
    .pipe(gulp.dest('images-dist'))
})
