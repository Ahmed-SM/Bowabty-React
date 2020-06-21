import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation, Trans } from "react-i18next";
import MediumBox from "../Reusables/MediumBox";
import BoxHeader from "../Reusables/BoxHeader";
import { CustomButton } from "../Reusables/CustomButton";
import { CustomInput, CustomSelect, CustomRadio } from "../Reusables/CustomInputs";
import RichInput from "../Reusables/RichInput";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const MyDesk = () => {
  console.log("IncomingRequest rerendred");
  const [Title, setTitle] = useContext(TitleContext);
  const { t } = useTranslation();
  const validation = Yup.object({
    suggestion: Yup.string()
      .min(3, t("login:min"))
      .max(15, t("login:max"))
      .required(t("login:required")),
    suggestionOrigin: Yup.string()
      .min(3, t("login:min"))
      .max(8, t("login:max"))
      .required(t("login:required")),
  });
  const handleOnSubmit = (values) => {};
  useEffect(() => {
    console.log("MyService rerendred use effect");
    setTitle(Title =>({...Title, Title: t("myDesk:title"),  SubTitle: t("userContent:lorem")}));
  }, [t, setTitle]);

  return (
    <React.Fragment>
      <StyledMdContainer green>
        <BoxHeader
          children={<Trans i18nKey={"myDesk:stationeryRequired"} t={t}></Trans>}
        />
        <Formik
          initialValues={{ suggestion: "", suggestionOrigin: "", file: "" }}
          validationSchema={validation}
          onSubmit={handleOnSubmit}
        >
          <Form>
          <StyledUnifiedGroup>
            <RichInput>
                <CustomSelect id="suggestionOrigin" name="suggestionOrigin" width={"100%"}>
                  <option value={t("myDesk:unit")}>
                    {t("myDesk:unit")}
                  </option>
                </CustomSelect>

                <CustomSelect id="suggestionOrigin" name="suggestionOrigin" width={"100%"}>
                  <option value={t("myDesk:item")}>
                    {t("myDesk:item")}
                  </option>
                </CustomSelect>


                <CustomInput
                  width={"30%"}
                  as={"input"}
                  id="suggestion"
                  name="suggestion"
                  type="text"
                  placeholder={t("myDesk:quamtity")}
                />
            </RichInput>

            <RichInput>
                <CustomSelect id="suggestionOrigin" name="suggestionOrigin" width={"100%"}>
                  <option value={t("myDesk:type")}>
                    {t("myDesk:type")}
                  </option>
                </CustomSelect>

                <CustomSelect id="suggestionOrigin" name="suggestionOrigin" width={"100%"}>
                  <option value={t("myDesk:category")}>
                    {t("myDesk:category")}
                  </option>
                </CustomSelect>

                <CustomInput
                  width={"30%"}
                  as={"input"}
                  id="suggestion"
                  name="suggestion"
                  type="text"
                  placeholder={t("myDesk:add")}
                />
            </RichInput>

            <RichInput>
                <CustomInput
                  width={"100%"}
                  as={"textarea"}
                  label={t("LegalAffairs:textarea")}
                  name="textarea"
                  type="text"
                  placeholder={t("LegalAffairs:textarea")}
                  rows="2"
                  wrap="off"
                />
            </RichInput>

            <CustomButton green type="submit" className="send-btn">
              <Trans i18nKey={"myDesk:submit"} t={t}>
                ارسال
              </Trans>
            </CustomButton>
            </StyledUnifiedGroup>
          </Form>
        </Formik>
      </StyledMdContainer>
      <StyledMdContainer primary>
        <BoxHeader
          children={<Trans i18nKey={"myDesk:officeEquipment"} t={t}></Trans>}
        />
        <Formik
          initialValues={{ suggestion: "", suggestionOrigin: "", file: "" }}
          validationSchema={validation}
          onSubmit={handleOnSubmit}
        >
          <Form>
          <StyledUnifiedGroup>
          <RichInput height={" 3.5rem"}>
            <StyledRow>مركبة</StyledRow>
            <StyledRow className="__center __border">A123123</StyledRow>
            <CustomRadio as={"input"} label={t("myDesk:maintenance")} id="radio1" name="radio" type="radio"></CustomRadio> 
            <CustomRadio as={"input"} label={t("myDesk:move")} id="radio2" name="radio" type="radio"></CustomRadio> 
            </RichInput>
            <RichInput height={" 3.5rem"}>
            <StyledRow>مركبة</StyledRow>
            <StyledRow className="__center __border">A123123</StyledRow>
            <CustomRadio as={"input"} label={t("myDesk:maintenance")} id="radio1" name="radio" type="radio"></CustomRadio> 
            <CustomRadio as={"input"} label={t("myDesk:move")} id="radio2" name="radio" type="radio"></CustomRadio> 
            </RichInput>
            <RichInput height={" 3.5rem"}>
            <StyledRow>مركبة</StyledRow>
            <StyledRow className="__center __border">A123123</StyledRow>
            <CustomRadio as={"input"} label={t("myDesk:maintenance")} id="radio1" name="radio" type="radio"></CustomRadio> 
            <CustomRadio as={"input"} label={t("myDesk:move")} id="radio2" name="radio" type="radio"></CustomRadio> 
            </RichInput>
            <RichInput height={" 3.5rem"}>
            <StyledRow>مركبة</StyledRow>
            <StyledRow className="__center __border">A123123</StyledRow>
            <CustomRadio as={"input"} label={t("myDesk:maintenance")} id="radio1" name="radio" type="radio"></CustomRadio> 
            <CustomRadio as={"input"} label={t("myDesk:move")} id="radio2" name="radio" type="radio"></CustomRadio> 
            </RichInput>
            </StyledUnifiedGroup>
        <CustomButton primary type="submit" className="send-btn">
          <Trans i18nKey={"myDesk:submit"} t={t}>
            ارسال
          </Trans>
        </CustomButton>
        </Form>
        </Formik>
      </StyledMdContainer>

      <StyledMdContainer lightgreen>
        <BoxHeader
          children={<Trans i18nKey={"myDesk:typeOfMaintenance"} t={t}></Trans>}
        />
        <Formik
          initialValues={{ suggestion: "", suggestionOrigin: "" }}
          validationSchema={validation}
          onSubmit={handleOnSubmit}
        >
          <Form>
          <StyledUnifiedGroup>
        <RichInput>
          <StyledColumn>
          <CustomSelect id="suggestionOrigin" name="suggestionOrigin" width={"100%"}>
                  <option value={t("myDesk:typeOfMaintenance")}>
                    {t("myDesk:typeOfMaintenance")}
                  </option>
                </CustomSelect>
          </StyledColumn>
        
        </RichInput>
        <RichInput>
              <StyledColumn>
                <CustomInput
                  width={"100%"}
                  as={"textarea"}
                  label={t("LegalAffairs:textarea")}
                  name="textarea"
                  type="text"
                  placeholder={t("LegalAffairs:textarea")}
                  rows="5"
                  wrap="off"
                />
              </StyledColumn>
            </RichInput>
            </StyledUnifiedGroup>
            <CustomButton lightgreen type="submit" className="send-btn">
          <Trans i18nKey={"myDesk:submit"} t={t}>
            ارسال
          </Trans>
        </CustomButton>
        </Form>
          </Formik>
      </StyledMdContainer>

      <StyledMdContainer purple>
        <BoxHeader
          children={<Trans i18nKey={"myDesk:other"} t={t}></Trans>}
        />
        <Formik
          initialValues={{ suggestion: "", suggestionOrigin: "", file: "" }}
          validationSchema={validation}
          onSubmit={handleOnSubmit}
        >
          <Form>      
        <StyledUnifiedGroup>
        <RichInput height={" 3.5rem"}>
        <StyledRow>مركبة</StyledRow>
        <StyledRow className="__center __border">A123123</StyledRow>
        <CustomRadio as={"input"} label={t("myDesk:maintenance")} id="radio1" name="radio" type="radio"></CustomRadio> 
        </RichInput>
        <RichInput height={" 3.5rem"}>
        <StyledRow>مركبة</StyledRow>
        <StyledRow className="__center __border">A123123</StyledRow>
        <CustomRadio as={"input"} label={t("myDesk:issuance")} id="radio1" name="radio" type="radio"></CustomRadio> 
        <CustomRadio as={"input"} label={t("myDesk:cancellation")} id="radio2" name="radio" type="radio"></CustomRadio> 
        <CustomRadio as={"input"} label={t("myDesk:replacementOfLost")} id="radio2" name="radio" type="radio"></CustomRadio> 
        </RichInput>
        <RichInput height={" 3.5rem"}>
        <StyledRow>مركبة</StyledRow>
        <StyledRow className="__center __border">A123123</StyledRow>
        <CustomRadio as={"input"} label={t("myDesk:issuance")} id="radio1" name="radio" type="radio"></CustomRadio> 
        <CustomRadio as={"input"} label={t("myDesk:cancellation")} id="radio2" name="radio" type="radio"></CustomRadio> 
        <CustomRadio as={"input"} label={t("myDesk:replacementOfLost")} id="radio2" name="radio" type="radio"></CustomRadio> 
        </RichInput>
        </StyledUnifiedGroup>
        <CustomButton purple type="submit" className="send-btn">
          <Trans i18nKey={"myDesk:submit"} t={t}>
            ارسال
          </Trans>
        </CustomButton>
        </Form>
        </Formik>
      </StyledMdContainer>
    </React.Fragment>
  );
};
export default MyDesk;
const StyledMdContainer = styled(MediumBox)`
    
`;
const StyledUnifiedGroup = styled.div`
    height:195px;
`;

const StyledColumn = styled.div`
  display: flex;
  margin-left: 6.3px;
  margin-right: 6.3px;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  .__multi {
    width: 19rem;
  }

  & > label {
    width: fit-content;
    padding: 0 5px;
  }
`;
const StyledInputGroup = styled.div`
  width: 100%;
  margin-bottom: 13px;
  display: flex;
  flex-wrap: nowrap;
`;
const StyledRow = styled.div`
  width: 20%;
  background:#F6F4F5;
  padding:6px 0;
  border-radius:0px 4px 4px 0px;
  text-indent: 10px;
  font-weight:900;
  color:black;
  -webkit-text-stroke: 0.2px black;
  -webkit-font-smoothing: antialiased;
  
  &.__center{
    text-align:center;
    width: 24%;
  };
  &.__border{
    border-right: 1px solid #ddd;
    border-radius:4px 0px 0px 4px;
  };
`;

