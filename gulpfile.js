/*
install 
1. skapa mappar 
2. kÃ¶r bower init. fyll i allt optional
3. installera foundation: bower install foundation --save -dev
4. npm init
5. npm install --save-dev gulp gulp-sass gulp-autoprefixer gulp-rename gulp-clean-css gulp-sourcemaps webpack-stream
6. skapa gulpfile.js nedan med länkar till bower foundation
7. npm install --save-dev gulp-babel babel-preset-env
8. npm install -save-dev gulp-documentation gulp-uglify
*/

var gulp = require('gulp'),
    sass = require('gulp-sass'),	
    autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
    minifycss = require('gulp-clean-css'),			
    webpack = require('webpack-stream'),	
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    minify = require("gulp-babel-minify"),  
	path = require('path');


	/*
	sÃ¤tter sÃ¶kvÃ¤gar till mapptrÃ¤det
	*/
	var srcPath={		
		'scss': './_dev/devsass',	
		'publik': './public',
		'jsbundle': './_dev/jsbundle',
        'devjs':'./_dev/devjs'
	}
	
	
gulp.task('SassToCssSrc', function() {
    gulp.src(srcPath.scss +'/**/*.scss')  
        .pipe(sass({
            style: 'expanded',
            sourceComments: 'normal',
        }).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // pass the file through autoprefixer 
		.pipe(sourcemaps.write())
        .pipe(gulp.dest(srcPath.publik +'/css/'));
		
});

gulp.task('SassToCssSrcPub', function () {
    gulp.src(srcPath.scss +'/**/*.scss')
    .pipe(sass({
            style: 'compressed',
            sourceComments: 'false'
		}).on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // pass the file through autoprefixer 
	.pipe(rename({ suffix: '.min' }))
    .pipe(cleanCSS())
	.pipe(gulp.dest(srcPath.publik + '/css/'));
    
});

gulp.task('webpackjs', function() {
    return gulp.src(srcPath.scss +'/app.js')
    .pipe(webpack( require('./config/webpack.config.js') ))
    .pipe(gulp.dest(srcPath.publik +'/'));	
});

gulp.task('jsconcatfiles', ['webpackjs'], function () {
    return gulp.src(
            [                
                srcPath.jsbundle + '/jplist/jplist.min.js',
                srcPath.jsbundle + '/handelbars/handlebars.js',
                srcPath.jsbundle + '/draganddrop/dragdrop.js',
                srcPath.jsbundle + '/bb_aj_js/aj_bb_KrypinbundleWebpack.1.0.js',
            ]
        )
       .pipe(sourcemaps.init())
       .pipe(concat('aj_bb_krypinbundle.1.0.0.js'))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest(srcPath.publik + '/js/'));
});
	 
gulp.task('pub_jsconcatfiles', function () {
    return gulp.src(
            [
                srcPath.jsbundle + '/jplist/jplist.min.js',
                srcPath.jsbundle + '/handelbars/handlebars.js',
                srcPath.jsbundle + '/bb_aj_js/aj_bb_KrypinbundleWebpack.1.0.babel.js',
            ]
        )
       .pipe(sourcemaps.init())
       .pipe(concat('aj_bb_krypinbundle.1.0.0.js'))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest(srcPath.publik + '/js/'));
});

gulp.task('jsbabel', ['webpackjs'], function () {
    return gulp.src(
             srcPath.jsbundle + '/bb_aj_js/aj_bb_KrypinbundleWebpack.1.0.js'
        )
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(rename('aj_bb_KrypinbundleWebpack.1.0.babel.js'))
       .pipe(gulp.dest(srcPath.jsbundle + '/bb_aj_js/'));
});


//Watch task
gulp.task('default',function() {
    gulp.watch('_dev/devsass/**/*.scss', ['SassToCssSrc']); 
    gulp.watch('_dev/devjs/**/*.js', ['jsconcatfiles']);
   
});

gulp.task('csspub',function() {
    gulp.watch(srcPath.scss + '/**/*.scss', ['SassToCssSrcPub']);
});

gulp.task('jspub', ['jsbabel', 'pub_jsconcatfiles'], function () {
    return gulp.src(
            srcPath.publik + '/js/aj_bb_krypinbundle.1.0.0.js'
        )
        .pipe(minify({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(rename('aj_bb_krypinbundle.1.0.0.min.js'))
       .pipe(gulp.dest(srcPath.publik + '/js/'));
});