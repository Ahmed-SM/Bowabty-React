var gulp = require("gulp");
var rename = require("gulp-rename");
var replace = require('gulp-replace');
var inject = require('gulp-inject-string')

const languages = ['en', 'ar'];
const componentName = "new";
const RouteOptions = {
    basicRoute:`<Route exact component={${componentName}} path={"/${componentName}"}/>`,
    WithContainerRoute: `<ContainerComponentRoute exact component={${componentName}}  container={Page} path={"/${componentName}"}/>`
};
const LazyImport = `const ${componentName} = React.lazy(()=>import("./components/${componentName}"));`

gulp.task("_NewComponent", () => {
    return gulp.src('bowabty/src/components/Reusables/NewComponentCopyThis.jsx')
        .pipe(rename(`${componentName}.jsx`))
        .pipe(gulp.dest(`bowabty/src/components/${componentName}`));
});
gulp.task("_NewTrans", () => {
    languages.map(function(lang){
        return gulp.src('bowabty/public/locales/en/IncomingRequest.json')
        .pipe(rename(`${componentName}.json`))
        .pipe(gulp.dest('bowabty/public/locales/'+lang+'/'));
    })
});
gulp.task("_AddToRoute", () => {
    var ImportAnchor = '{/* Gulp Import Anchor */}';
    var RouteAnchor = '{/* Gulp Route Anchor*/}';
    return gulp.src('src/Routes.js')
        .pipe(inject.after(ImportAnchor, `\n${LazyImport}\n`))
        .pipe(inject.after(RouteAnchor, `\n\t\t\t\t\t\t\t\t${RouteOptions.WithContainerRoute}\n`))
        .pipe(gulp.dest('src/'));
});
// gulp.task('NewComponent', ['_NewComponent', '_NewTrans','_AddToRoute' ]);  
