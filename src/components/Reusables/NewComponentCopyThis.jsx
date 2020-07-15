// Always imported
import React, {useContext, useEffect}  from "react";
import styled from "styled-components";
import {TitleContext} from "../../contexts/TitleContext";
import {useTranslation, Trans} from "react-i18next";
// Optional boxes based on your task 
import LargeBox from "../Reusables/LargeBox";
import BoxHeader from "../Reusables/BoxHeader";
// Form related Components 
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {CustomInput} from "../Reusables/CustomInputs";
import {CustomButton} from "../Reusables/CustomButton";

const COMPONENT_NAME = () => {
    // This is the Title Context sets the title that appears in the UserSection component 
    const {Title, setTitle}  = useContext(TitleContext);
    //This is the i18n trnaslation hook, you can't use you translation file without it  
    const {t} = useTranslation();  
    // Set your form validation 
    const validation = Yup.object({
            textarea: Yup.string().min(3, t('login:min')).max(8, t('login:max')).required(t('login:required')),
        });
        // Form Submission Handler: it's attached to on Sunmit inside the Formik tag SEE lINE 38 
        const handleOnSubmit = (values)=> {
        };
    // Title Changing: just change the t('')    
    useEffect(() => {
            setTitle(Title =>({...Title, Title: t("LegalAffairs:title"), SubTitle: t("userContent:lorem")}));
    },[t, setTitle]);

      return (
            // if you are extending one of the reusables you can set the color green primary purple greenlight 
        <StyledContainer green>
            {/* This the header just change the Trans Object  */}
            <BoxHeader children={<Trans i18nKey={"LegalAffairs:followUp"} t={t}></Trans>}/>
            <Formik initialValues={{textarea: ""}} // you should change this or you will get an error {A component is changing an uncontrolled input of type text to be controlled}
                    validationSchema={validation} // match the intialValues with name property of the tag 
                    onSubmit={handleOnSubmit}> 
                <Form>
                <StyledInputGroup>  
                    <StyledColumn>
                    {/* now you can use "as={INPUT_TYPE}" to choose between textarea or input */}
                    {/* also pass the id property as the name property  ex: name="textarea" id="textarea" */}
                        <CustomInput as={"textarea"} label={t("LegalAffairs:textarea")} name="textarea" id="textarea" type="text" placeholder={t("LegalAffairs:textarea")}  rows="15" cols="70" /> 
                    </StyledColumn>
                </StyledInputGroup> 
              {/* Make Sure the you add the button inside the form */}
                <CustomButton green type="submit" className="send-btn"><Trans i18nKey={"myService:sendBtn"} t={t}>ارسال</Trans></CustomButton>
                </Form>
            </Formik>
        </StyledContainer>
      );
    }
  export default COMPONENT_NAME;

  //IF you want to extend another component 
  const StyledContainer =  styled(LargeBox)`
  
  `;
  //IF your own styled component 
  const Styled_COMPONENT_NAME = styled.div`

`;
     // Steps:
    // 1: Copy the below comments free code 
    // 2: Change both of the component name and the export name COMPONENT_NAME
    // 3: Check the resuables folder for what you need.
    // 4: After you finish make the associated local files Arabic and English. You can find the locals in ./bowabty/public/
    // 5: then to have the local files imported go to the  ./bowabty/src/i18n.js and add it to the ns array
    // 6: Lastly Lazy import your component to the ./bowabty/src/router.js like =>
    // const COMPONENT_NAME = React.lazy(()=>import("./components/COMPONENT_NAME"));
    // and choose the right container or define yours if none worked well for you 
    // you can also use either: 
    // <Route exact component={UserSection} path={"/*"}/> without container if you like 
    // or if you want to use a container
    // <ContainerComponentRoute  exact component={MyOrders}  container={Page} path={"/myorders"}/>
    // A Comparison between the view and page container, and when you should use one of them.. once they are 100% fisnished
// **************************Ctrl + K + U to uncomment *****************************
// import React, {useContext, useEffect}  from "react";
// import styled from "styled-components";
// import {TitleContext} from "../../contexts/TitleContext";
// import {useTranslation, Trans} from "react-i18next";

// import LargeBox from "../Reusables/LargeBox";
// import BoxHeader from "../Reusables/BoxHeader";

// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import {CustomInput} from "../Reusables/CustomInputs";
// import {CustomButton} from "../Reusables/CustomButton";

// const COMPONENT_NAME = () => {
//     const {Title, setTitle}  = useContext(TitleContext);
//     const {t} = useTranslation();  
//     const validation = Yup.object({
//             textarea: Yup.string().min(3, t('login:min')).max(8, t('login:max')).required(t('login:required')),
//         });
//         const handleOnSubmit = (values)=> {
//         };
//     useEffect(() => {
//             setTitle(Title =>({...Title, Title: t("LegalAffairs:title"), SubTitle: t("userContent:lorem")}));
//     },[t, setTitle]);

//       return (
//         <StyledMdContainer green>
//             <BoxHeader children={<Trans i18nKey={"LegalAffairs:followUp"} t={t}></Trans>}/>
//             <Formik initialValues={{textarea: "", file:""}}
//                     validationSchema={validation} 
//                     onSubmit={handleOnSubmit}> 
//                 <Form>
//                 <StyledInputGroup>  
//                     <StyledColumn>
//                         <CustomInput as={"textarea"} label={t("LegalAffairs:textarea")} name="textarea" id="textarea" type="text" placeholder={t("LegalAffairs:textarea")}  rows="15" cols="70" /> 
//                     </StyledColumn>
//                 </StyledInputGroup> 
//                 <CustomButton green type="submit" className="send-btn"><Trans i18nKey={"myService:sendBtn"} t={t}>ارسال</Trans></CustomButton>
//                 </Form>
//             </Formik>
//         </StyledMdContainer>
//       );
//     }
//   export default COMPONENT_NAME;

//   const StyledContainer =  styled(LargeBox)`
  
//   `;
//   const Styled_COMPONENT_NAME = styled.div`

// `;
