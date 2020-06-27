var gulp = require("gulp");
var rename = require("gulp-rename");
var replace = require('gulp-replace');
var inject = require('gulp-inject-string')

// New Components Configuration
var ImportsList = [];
var CodesList = [];
const Languages = ['en', 'ar'];
const componentName = "TestComponent";
const componentBase = "MediumBox";

const componentAvailableImports = {
    LargeBox: 'import LargeBox from "../Reusables/LargeBox";',
    BoxHeader: 'import BoxHeader from "../Reusables/BoxHeader";',
    MediumBox: 'import MediumBox from "../Reusables/MediumBox";',
}
const ContainerWithHeader = {
    NoHeader: '',
    BoxHeader: `<BoxHeader children={<Trans i18nKey={"${componentName}:header"} t={t}></Trans>}/>`
}
const ColorOptions = {
    primary: 'primary',
    green: 'green',
    lightgreen: 'lightgreen',
    purple: 'purple'
};
const RouteOptions = {
    BasicRoute: `<Route exact component={${componentName}} path={"/${componentName}"}/>`,
    WithContainerRoute: `<ContainerComponentRoute exact component={${componentName}}  container={Page} path={"/${componentName}"}/>`
};
const LazyImport = `const ${componentName} = React.lazy(()=>import("./components/${componentName}"));`


ImportsList.push(componentAvailableImports[componentBase])
ImportsList.push(componentAvailableImports.BoxHeader)
CodesList.push(ContainerWithHeader.BoxHeader)


// Available automated tasks
gulp.task("_NewComponent", () => {
    var ImportAnchor = '// Gulp Import Anchor';
    return gulp.src('GulpNewComponent.jsx')
        .pipe(rename(`index.jsx`))
        .pipe(replace('COMPONENT_NAME', `${componentName}`))
        .pipe(replace('COMPONENT_BASE', `${componentBase}`))
        .pipe(inject.after(ImportAnchor, `\n${ImportsList.join('\n')}`))
        .pipe(inject.after('<StyledContainer COLOR>', `\n\t\t\t\t${CodesList.join('\n')}`))
        .pipe(replace('COLOR', ColorOptions.green))
        .pipe(gulp.dest(`src/components/${componentName}`));
});
gulp.task("_NewTrans", (done) => {
    Languages.map(function (lang) {
        return gulp.src('public/locales/ar/translationTemp.json')
            .pipe(rename(`${componentName}.json`))
            .pipe(gulp.dest('public/locales/' + lang + '/'));
    })
    done();
});
gulp.task("_AddToI18n", () => {
    return gulp.src('src/i18n.js')
        .pipe(inject.after(`ns:[`, `'${componentName}',`))
        .pipe(gulp.dest('src/'));
});
gulp.task("_AddToRoute", () => {
    var ImportAnchor = '{/* Gulp Import Anchor */}';
    var RouteAnchor = '{/* Gulp Route Anchor*/}';
    return gulp.src('src/Routes.js')
        .pipe(inject.after(ImportAnchor, `\n${LazyImport}\n`))
        .pipe(inject.after(RouteAnchor, `\n\t\t\t\t\t\t\t\t${RouteOptions.WithContainerRoute}\n`))
        .pipe(gulp.dest('src/'));
});
gulp.task('NewComponent', gulp.series('_NewComponent', '_NewTrans', '_AddToI18n', '_AddToRoute'), function (done) {
    done();
});