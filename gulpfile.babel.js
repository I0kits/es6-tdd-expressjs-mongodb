import path from 'path';
import gulp from 'gulp';
import tar from 'gulp-tar';
import gzip from 'gulp-gzip';
import util from 'gulp-util';
import run from 'gulp-run-command';
import jfrog from 'gulp-artifactory-upload';

const jfrogServer = util.env.jfrog || 'https://peacock.jfrog.io/peacock/libs-release-local';
const jfrogPath = util.env.path || 'com/csg/ib/peacock';
/* eslint-disable */
const jfrogApiKey = util.env.apikey || 'AKCp5Z3WW9x1FYFCrmkYSaXc8iLc5LKuJXnPN9AZJnDUZuDWgYLEvcis2R3WaTeb9c4jByKUN';
/* eslint-enable */

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

gulp.task('package', ['build-client', 'build-server'], () =>{
  const serverSources = [
    'www/**/*',
    'server/.*',
    'server/**/*',
    '!server/node_modules',
    '!server/node_modules/**',
  ];

  return gulp.src(serverSources, {base: '.'})
    .pipe(tar(distName))
    .pipe(gzip({append: false}))
    .pipe(gulp.dest(distDir));
});

gulp.task('publish', ['package'], () =>{
  const request = {
    headers: {'X-JFrog-Art-Api': jfrogApiKey},
  };

  const url = `${jfrogServer}/${jfrogPath}/${pkgVersion}`;

  return gulp.src(path.join(distDir, distName))
    .pipe(jfrog({request, url}))
    .on('error', util.log);
});

gulp.task('default', ['publish']);
