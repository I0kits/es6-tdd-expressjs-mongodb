import path from 'path';
import gulp from 'gulp';
import tar from 'gulp-tar';
import gzip from 'gulp-gzip';
import util from 'gulp-util';
import run from 'gulp-run-command';

const pkgName = util.env.pkgName || 'pkgName';
const pkgVersion = util.env.pkgVersion || 'pkgVersion';

const distDir = path.join(__dirname, 'dist');
const distName = `${pkgName}-${pkgVersion}.tar.gz`;

const clientSrcDir = path.join(__dirname, 'client');
const serverSrcDir = path.join(__dirname, 'server');

gulp.task('clean', run([
  'rm -rf www/',
  `rm -rf ${distDir}`,
]));

gulp.task('build-client', run([
  'yarn install',
  'yarn run build',
], {cwd: clientSrcDir}));

gulp.task('build-server', run([
  'yarn install',
  'yarn run build',
], {cwd: serverSrcDir}));

gulp.task('package', ['build-client', 'build-server'], ()=> {
  const serverSources = [
    'www/**/*',
    'server/.*',
    'server/**/*',
    '!server/node_modules',
    '!server/node_modules/**',
  ];

  return gulp.src(serverSources, {base: '.'})
    .pipe(tar(distName))
    .pipe(gzip())
    .pipe(gulp.dest(distDir));
});

gulp.task('default', ['zip']);
