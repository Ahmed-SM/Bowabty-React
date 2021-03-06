var gulp = require("gulp");
var rename = require("gulp-rename");
var replace = require('gulp-replace');
var inject = require('gulp-inject-string')

// New Components Configuration
var ImportsList = [];
var CodesList = [];
const Languages = ['en', 'ar'];
const componentName = "TestComponent";
const componentBase = "LargeBox";
const WithHeader = "Yes";

const ComponentAvailableImports = {
    LargeBox: 'import LargeBox from "../Reusables/LargeBox";',
    BoxHeader: 'import BoxHeader from "../Reusables/BoxHeader";',
    MediumBox: 'import MediumBox from "../Reusables/MediumBox";',
    formImports: [
        'import RichInput from "../Reusables/RichInput";',
        'import { CustomInput, CustomSelect, CustomRadio } from "../Reusables/CustomInputs";',
        'import * as Yup from "yup";',
        'import { Formik, Form } from "formik";',
        'import { CustomButton } from "../Reusables/CustomButton";',
    ]
}
const ContainerWithHeader = {
    No: '',
    Yes: `<BoxHeader children={<Trans i18nKey={"${componentName}:header"} t={t}></Trans>}/>`
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
const InputOptions = {
    CustomInput: {
        textarea: `<CustomInput as={"textarea"} label={t("${componentName}:textarea")} id="name" name="name" type="text" placeholder={t("${componentName}:textarea")} rows="15" cols="70" wrap="off" width={"100%"}/>`,
        input: `<CustomInput width={"30%"} as={"input"} id="name" name="name" type="text" placeholder={t("${componentName}:input")}/>`
    },
    CustomSelect: `<CustomSelect id="name" name="name" width={"100%"}><option value={t("${componentName}:type")}>{t("${componentName}:type")}</option></CustomSelect>`
}
//Change this
const InputField = `<RichInput>\n\t\t\t\t\t${InputOptions.CustomInput.textarea}\n\t\t\t\t</RichInput>\n\t\t\t\t\t\t`;
const CustomButton = ` <CustomButton ${ColorOptions.green} type="submit" className="send-btn"><Trans i18nKey={"myService:sendBtn"} t={t}></Trans></CustomButton>\n\t\t\t\t\t`;
const formik = `<Formik initialValues={{ name: "", }} validationSchema={null} onSubmit={null}>\n\t\t\t\t\t<Form>\n\t\t\t\t\t\t${InputField}${CustomButton}</Form>\n\t\t\t\t\t</Formik>`;

ImportsList.push(ComponentAvailableImports[componentBase])
ImportsList.push(ComponentAvailableImports.formImports.join('\n'))
if (WithHeader === "Yes") {
    ImportsList.push(ComponentAvailableImports.BoxHeader)
}
CodesList.push(ContainerWithHeader[WithHeader]);
CodesList.push(formik);

// Available automated tasks
gulp.task("_NewComponent", () => {
    var ImportAnchor = '// Gulp Import Anchor';
    return gulp.src('GulpNewComponent.jsx')
        .pipe(rename(`index.jsx`))
        .pipe(replace('COMPONENT_NAME', `${componentName}`))
        .pipe(replace('COMPONENT_BASE', `${componentBase}`))
        .pipe(inject.after(ImportAnchor, `\n${ImportsList.join('\n')}`))
        .pipe(inject.after('<StyledContainer COLOR>', `\n\t\t\t\t${CodesList.join('\n\t\t\t\t')}`))
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