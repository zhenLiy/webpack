var gulp = require('gulp');
var webpack =require('webpack');
var del=require("del");
var gUtil = require('gulp-util');
var wpConfig=require('./webpack.config');
gulp.task("del",function(){
	return del("build/*.*");
})
gulp.task('webpack', function (cb) {
    webpack(wpConfig, function (err, stats) {
    	if (err) throw new gutil.PluginError('webpack', err);
        gUtil.log('[webpack]', stats.toString({
            // output options
        }));
        cb();
    });
});
