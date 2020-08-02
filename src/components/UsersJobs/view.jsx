import React, { useContext, useEffect, useState , useRef} from "react";

import styled from "styled-components";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation, Trans } from "react-i18next";
// Gulp Import Anchor
import LargeBox from "../Reusables/LargeBox";
import RichInput from "../Reusables/RichInput";
import { useLocation, Redirect } from "react-router-dom";
import { CustomInput, CustomSelect, CustomRadio } from "../Reusables/CustomInputs";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { CustomButton } from "../Reusables/CustomButton";
import BoxHeader from "../Reusables/BoxHeader";
import MediumBox from "../Reusables/MediumBox";
import {post} from "../../services/Api/base";
import GridRequests from "../../services/Api/gridRequests";
var session={data:[]};

const UsersJobsDetails = () => {
    const [testData,setTestData] = useState({ar:
        {
            currentJob: "test",
            currentJob_RepresentitiveJobs: "test",
            currentJob_ReqestsServices: "test",
            currentJob_OperationsServices:"test"
        },
    en :
        {
            currentJob:"test",
            currentJob_RepresentitiveJobs: "test",
            currentJob_ReqestsServices: "test",
            currentJob_OperationsServices: "test"
        }})
    const handelSubmit = () => {
alert("dhh");
    }
    const { setTitle } = useContext(TitleContext);
    const { t } = useTranslation();
    const location = useLocation();

   // getData(Users_Job_Id);
    useEffect(() => {
        setTitle(Title => ({ ...Title, Title: t('UsersJobsDetails:title'), SubTitle: t("userContent:lorem") }));
    }, [t, setTitle])
    
    useEffect(()=>{
    //    getData(setTestData)
      } , []);
      useEffect(()=>{

console.log(  "testData") 
console.log(  testData) 
if(testData){
    console.log(  testData.ar.currentJob_RepresentitiveJobs[0].Selected) 

}

console.log(  "testData") 


   } 
, [testData]);

    return (
        <>
            {location.state || location.pathname.split("/")[2] === "view" ?
                <StyledContainer green>
				<BoxHeader children={<Trans i18nKey={"UsersJobs:viewHeader"} t={t}></Trans>}/>
                 {  testData  ? 
                 
                    <Formik initialValues={{ Job_Name_AR11: testData.ar.currentJob.Job_Name_AR , Job_Name_EN11:testData.en.currentJob.Job_Name_EN , RepresentitiveJobs:["1"],RequestedServices:[],OperationsServices:[] }} validationSchema={null} onSubmit={null}>

                        <Form>
                        <RichInput>
            <CustomInput   width={"30%"} as={"input"} id="Job_Name_AR" name="Job_Name_AR11" type="text"  label={<Trans i18nKey={"UsersJobs:JobName_AR"} t={t}></Trans>} />
            <CustomInput  width={"30%"} as={"input"} id="Job_Name_EN" name="Job_Name_EN11" type="text"  label={<Trans i18nKey={"UsersJobs:JobName_EN"} t={t}></Trans>} />
				  </RichInput>
                    <hr></hr>
                    <hr></hr>

                            <StyledLargeInnerContainer primary>
                                <BoxHeader
                                    children={
                                        <Trans i18nKey={'UsersJobsDetails:representitiveJobs'}>الوظيفة التي ينوب عنها</Trans>
                                    }
                                />

                                <FlexContainer>
{// i18n.language === 'ar'?
}
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={"وظيفu;gshkdfgjhlsgsfghfuhdfjghة 1"} id="test" name="test" value={1} type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={t("وظيفة 2")} id="radio2" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={t("وظيفة 4")} id="radio2" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={t("وظيفة 5")} id="radio2" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={"وظيفة 1"} id="radio1" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>
                                    <Div50>
                                        <RichInput >
                                            <CustomRadio as={"input"} label={t("وظيفة 10end")} id="radio2" name="RepresentitiveJobs" type="checkBox"></CustomRadio>
                                        </RichInput>
                                    </Div50>

                                </FlexContainer>

                                <hr></hr>

                            </StyledLargeInnerContainer>

                            <hr></hr>
                            <hr></hr>
                            {/* // new  */}
                            <StyledflexDiv>
                                <StyledMediumInnerContainer primary>
                                    <BoxHeader
                                        children={
                                            <Trans i18nKey={'UsersJobsDetails:requestedServices'}>الخدمات التي يطلبها</Trans>
                                        }
                                    />

                                    {/* //customgrid here*/}
                                    <FlexContainer>

                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={"وظيفه1"} id="radio1" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 2")} id="radio2" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 4")} id="radio2" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 5")} id="radio2" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={"وظيفة 1"} id="radio1" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 10end")} id="radio2" name="RequestedServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>

                                    </FlexContainer>
                                    <hr></hr>

                                </StyledMediumInnerContainer>

                                <StyledMediumInnerContainer>
                                    <BoxHeader
                                        children={
                                            <Trans i18nKey={'UsersJobsDetails:operationsServices'} t={t}> الخدمات التي يقدمها</Trans>
                                        }
                                    />

                                    {/* //customgrid here*/}
                                    <FlexContainer>

                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={"وظيفة 1"} id="radio1" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 2")} id="radio2" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 4")} id="radio2" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 5")} id="radio2" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={"وظيفة 1"} id="radio1" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 3")} id="radio2" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>
                                        <Div50>
                                            <RichInput >
                                                <CustomRadio as={"input"} label={t("وظيفة 10end")} id="radio2" name="OperationsServices" type="checkBox"></CustomRadio>
                                            </RichInput>
                                        </Div50>

                                    </FlexContainer>
                                    <hr></hr>





                                </StyledMediumInnerContainer>
                            </StyledflexDiv>


                            <hr></hr>
                            <hr></hr>
                            <CustomButton green type="submit" onClick={handelSubmit} className="send-btn">{<Trans i18nKey={"UsersJobs:save"} t={t}></Trans>}</CustomButton>
						    {/* <CustomButton red type="reset" onClick={redirect} className="send-btn">{<Trans i18nKey={"UsersJobs:cancel"} t={t}></Trans>}</CustomButton> */}
						    <CustomButton red type="reset" className="send-btn">{<Trans i18nKey={"UsersJobs:cancel"} t={t}></Trans>}</CustomButton>
                        </Form>
                    </Formik>
  : <></>}   
              </StyledContainer> : <Redirect to={"/" + location.pathname.split("/")[1]} />}
        </>
    );
}
export default UsersJobsDetails;

const getData =(setTestData , id) => {
    alert(id);
   var obj = { Users_Job_Id: id}
    let jobId = JSON.stringify(obj);
    post("ADMIN/USERS_JOBS/GET_USERSJOB_DETAILS" ,jobId )
        .then((response) => {
            let temp = Object.values(response.data.Data);
            console.log("hi test");
            console.log(temp);
            var testdata = {ar:{} , en:{}};

            var _currentJob = {
                ar: {
                    Job_Id: temp[0].Job_Id,
                    Job_Name_AR: temp[0].Job_Name_AR,
                    Job_Name_EN: temp[0].Job_Name_EN,
                },
                en: {
                    Job_Id: temp[0].Job_Id,
                    Job_Name_AR: temp[0].Job_Name_AR,
                    Job_Name_EN: temp[0].Job_Name_EN,
                }
            };


            var _currentJob_RepresentitiveJobs = {ar:[] , en:[]};
            var repreJobs = temp[3];
            console.log(repreJobs);

            for (let i = 0; i < repreJobs.length; i++) 
            {
                _currentJob_RepresentitiveJobs.ar.push({
                    Selected: repreJobs[i].Selected,
                    Representative_Job_Name_AR: repreJobs[i].Representative_Job_Name_AR,
                    Representative_Job_Id: repreJobs[i].Representative_Job_Id,
                });
                _currentJob_RepresentitiveJobs.en.push({
                    Selected: repreJobs[i].Selected,
                    Representative_Job_Name_EN: repreJobs[i].Representative_Job_Name_EN,
                    Representative_Job_Id: repreJobs[i].Representative_Job_Id,
                });
            }
            console.log(_currentJob_RepresentitiveJobs.ar);
            console.log(_currentJob_RepresentitiveJobs.en);


            var _currentJob_ReqestsServices = {ar:[] , en:[]};
            var reqServices = temp[1];
            for (let i = 0; i < reqServices.length; i++) 
            {
                _currentJob_ReqestsServices.ar.push({
                    Selected: reqServices[i].Selected,
                    Service_Name_AR: reqServices[i].Service_Name_AR,
                    Service_Id: reqServices[i].Service_Id,
                });
                _currentJob_ReqestsServices.en.push({
                    Selected: reqServices[i].Selected,
                    Service_Name_EN: reqServices[i].Service_Name_EN,
                    Service_Id: reqServices[i].Service_Id,
                });
            }

            var _currentJob_OperationsServices = {ar:[] , en:[]};
            var operServices = temp[2];
            for (let i = 0; i < reqServices.length; i++) 
            {
                _currentJob_OperationsServices.ar.push({
                    Selected: operServices[i].Selected,
                    Service_Name_AR: operServices[i].Service_Name_AR,
                    Service_Id: operServices[i].Service_Id,
                });
                _currentJob_OperationsServices.en.push({
                    Selected: operServices[i].Selected,
                    Service_Name_EN: operServices[i].Service_Name_EN,
                    Service_Id: operServices[i].Service_Id,
                });
            }
                testdata.ar =
                    {
                        currentJob: _currentJob.ar,
                        currentJob_RepresentitiveJobs: _currentJob_RepresentitiveJobs.ar,
                        currentJob_ReqestsServices: _currentJob_ReqestsServices.ar,
                        currentJob_OperationsServices: _currentJob_OperationsServices.ar
                    }
                   
                testdata.en =
                    {
                        currentJob: _currentJob.en,
                        currentJob_RepresentitiveJobs: _currentJob_RepresentitiveJobs.en,
                        currentJob_ReqestsServices: _currentJob_ReqestsServices.en,
                        currentJob_OperationsServices: _currentJob_OperationsServices.en
                    }
            setTestData(testdata);
            console.log("hi test 2");
            console.log(testdata.en);

        });
}

const StyledContainer = styled(LargeBox)`
  width:70%;
  margin : 0 auto;
  `;
  const StyledCenterDiv = styled.div`
  width:70%;
  margin : 0 auto;
  `;
const StyledLargeInnerContainer = styled(LargeBox)`
  width:80%;
  height:450px;
  margin : 0 auto;
 
  `;
const StyledMediumInnerContainer = styled(MediumBox)`
  height:450px;
  margin : 0 auto;
 
  `;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 330px;
  overflow-y: scroll;
  `;
const Div50 = styled.div`
 width :50% !important;
 flex-grow: 1;
 `;

const StyledRow = styled.div`
  width: 100%;
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
const StyledflexDiv = styled.div`
display : flex;
justify-content: space-around;
`
const StyledMediumBox = styled(LargeBox)`
margin : 0px ;
`

