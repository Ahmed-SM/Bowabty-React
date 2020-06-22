import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import NewsFeed from "./NewsFeed";
import NewsFeedSection from "./NewsFeedSection";
import { useTranslation, Trans } from "react-i18next";
import { TitleContext } from "../../contexts/TitleContext";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CustomInput, CustomSelect, CustomFile } from "../Reusables/CustomInputs";
import {faPaperclip} from '@fortawesome/free-solid-svg-icons';
import RichInput from "../Reusables/RichInput";
import MediumBox from "../Reusables/MediumBox";
import BoxHeader from "../Reusables/BoxHeader";

const MemoizedNewsFeed = React.memo(() => {
  return <NewsFeed list={Newslist} />;
});

const MyService = () => {
  const { t } = useTranslation();
  const [Title, setTitle] = useContext(TitleContext);
  const validation = Yup.object({
    suggestion: Yup.string()
      .min(3, t("login:min"))
      .max(15, t("login:max"))
      .required(t("login:required")),
    suggestionOrigin: Yup.string()
      .min(3, t("login:min"))
      .max(8, t("login:max"))
      .required(t("login:required")),
    file: Yup.object().required(t("login:required")),
  });
  const handleOnSubmit = (values) => {};

  useEffect(() => {
    console.log("MyService rerendred use effect");
    setTitle((Title) => ({
      ...Title,
      Title: t("myService:title"),
      SubTitle: t("userContent:lorem"),
    }));
  }, [t, setTitle]);
  console.log("MyService rerendred");
  return (
    <React.Fragment>
      <MediumBox primary>
        <BoxHeader
          children={
            <Trans i18nKey={"myService:decision"}>قرارات داخلية جديدة</Trans>
          }
        />
        <NewsFeedSection>
          <MemoizedNewsFeed />
        </NewsFeedSection>
      </MediumBox>
      <MediumBox>
        <BoxHeader
          children={
            <Trans i18nKey={"myService:suggestion"} t={t}>
              تقديم مقترح
            </Trans>
          }
        />
        <StyledGroup>
          <Formik
            initialValues={{ suggestion: "", suggestionOrigin: "", file: "" }}
            validationSchema={validation}
            onSubmit={handleOnSubmit}
          >
            <Form>
              <RichInput height={"65px"}>
                <CustomInput
                  as={"input"}
                  label={t("myService:suggestedTitle")}
                  id="suggestion"
                  name="suggestion"
                  type="text"
                  placeholder={t("myService:suggestedTitle")}
                  width={"100%"}
                />
              </RichInput>
              <RichInput height={"65px"}>
                <CustomSelect
                  label={t("myService:suggestionOrigin")}
                  id="suggestionOrigin"
                  name="suggestionOrigin"
                  width={"100%"}
                >
                  <option value={t("myService:suggestionOriginOption1")}>
                    {t("myService:suggestionOriginOption1")}
                  </option>
                </CustomSelect>
                <CustomFile
                label={t("myService:attachemnt")}
                name="file"
                id="file"
                type="file"
                placeholder={t("myService:attachemnt")}
                icon={faPaperclip}
                width={"100%"}/>
              </RichInput>
              <RichInput height={"65px"}>
                <StyledSendButton type="submit" className="send-btn">
                  <Trans i18nKey={"myService:sendBtn"} t={t}>
                    ارسال
                  </Trans>
                </StyledSendButton>
              </RichInput>
            </Form>
          </Formik>
        </StyledGroup>
      </MediumBox>
    </React.Fragment>
  );
};
export default MyService;

const StyledSendButton = styled.button`
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 3px 32px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  color: #fff;
  background-color: #3c4652;
  outline: 0;
  margin-left: 5.3px;
  margin-right: 5.3px;
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    background: rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;
const StyledGroup = styled.div`
  display: block;
  padding: 0px 0px;
`;
const StyledFile = styled.div`
  height: 30px;
  min-height: 30px;
  border-radius: 5px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  align-items: center;
  white-space: pre;
  rtl-ordering: logical;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(169, 169, 169);
  display: flex;
  flex-direction: row-reverse;
  background-color: transparent;
  & input[type="file"] {
    font-size: calc(1px + 0.65vw);
    padding-left: 10px;
    opacity: 0;
  }
`;
const StyledFileLabel = styled.label`
  color: #757575;
  margin: -25px 0px 0 0;
  padding: 0 15px;
  text-indent: 10px;
`;

const StyledSVG = styled.svg`
  position: absolute;
  text-indent: 10px;
  width: 15px;
  margin: 1px -5px 0 -5px;
  z-index: -1;
`;

const Newslist = [
  {
    header: "1اليوم العالمي للعدالة الاجتماعية",
    Paragraph:
      " لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكلوليس المحتوى) ويُستخدم " +
      "في صناعات المطابع ودور النشر.",
    PostDate: "الأربعاء 20 , فبراير 2019",
  },
  {
    header: "2اليوم العالمي للعدالة الاجتماعية",
    Paragraph:
      " لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكلوليس المحتوى) ويُستخدم " +
      "في صناعات المطابع ودور النشر.",
    PostDate: "الأربعاء 20 , فبراير 2019",
  },
  {
    header: "3اليوم العالمي للعدالة الاجتماعية",
    Paragraph:
      " لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكلوليس المحتوى) ويُستخدم " +
      "في صناعات المطابع ودور النشر.",
    PostDate: "الأربعاء 20 , فبراير 2019",
  },
  {
    header: "4اليوم العالمي للعدالة الاجتماعية",
    Paragraph:
      " لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكلوليس المحتوى) ويُستخدم " +
      "في صناعات المطابع ودور النشر.",
    PostDate: "الأربعاء 20 , فبراير 2019",
  },
  {
    header: "5اليوم العالمي للعدالة الاجتماعية",
    Paragraph:
      " لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكلوليس المحتوى) ويُستخدم " +
      "في صناعات المطابع ودور النشر.",
    PostDate: "الأربعاء 20 , فبراير 2019",
  },
];
