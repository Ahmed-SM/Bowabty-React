import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { TitleContext } from "../../contexts/TitleContext";
import { useTranslation, Trans } from "react-i18next";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CustomInput } from "../Reusables/CustomInputs";
import { CustomButton } from "../Reusables/CustomButton";
import RichInput from "../Reusables/RichInput";
import LargeBox from "../Reusables/LargeBox";
import BoxHeader from "../Reusables/BoxHeader";
import View from "../../containers/View";
import ServiceSlider from "../ServiceSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const AdministrativeServicesDeptOrders = () => {
  console.log("AdministrativeServicesDeptOrders rerendred")
  const {setTitle}  = useContext(TitleContext);
  const { t } = useTranslation();
  
  useEffect(() => {
    setTitle((Title) => ({
        ...Title,
        Title: t("AdministrativeServicesDeptOrders:title"),
        SubTitle:t("userContent:lorem"),
      }));
    }, [t, setTitle]);

  const validation = Yup.object().shape({
    hotelName: Yup.string().required(t('AdministrativeServicesDeptOrders:required')),
    reservationRegisterName: Yup.string().required(t('AdministrativeServicesDeptOrders:required')),
    peopleNumber: Yup.string().required(t('AdministrativeServicesDeptOrders:required')),
    roomsNumber: Yup.string().required(t('AdministrativeServicesDeptOrders:required')),
    personName: Yup.string().required(t('AdministrativeServicesDeptOrders:required')),
    fromDate: Yup.string().required(t('AdministrativeServicesDeptOrders:required')),
    toDate: Yup.string().required(t('AdministrativeServicesDeptOrders:required'))
  });
  const handleOnSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <React.Fragment>
        <ServiceSlider services={services}/>
      </React.Fragment>

      <View>
        <LargeBox green>
          <BoxHeader children={<Trans i18nKey={"AdministrativeServicesDeptOrders:hotelReservationOrder"} t={t}>طلب حجز فندق</Trans>} />
            <Formik
              initialValues={{ hotelName: "", reservationRegisterName: "", peopleNumber: "", roomsNumber: "", personName: "", fromDate: new Date().getDate(), toDate: new Date().getDate() }}
              validationSchema={validation}
              onSubmit={handleOnSubmit}>
              <Form>
                <RichInput>
                  <CustomInput placeholder={t("AdministrativeServicesDeptOrders:hotelName")} name="hotelName" width={"40rem"}></CustomInput>
                </RichInput>
                <RichInput>
                  <CustomInput placeholder={t("AdministrativeServicesDeptOrders:reservationRegisterName")} width={"40rem"} name="reservationRegisterName"></CustomInput>
                </RichInput>

                <RichInput>
                    <CustomInput placeholder={t("AdministrativeServicesDeptOrders:peopleNumber")} width={"19.405rem"} name="peopleNumber" ></CustomInput>
                    <CustomInput placeholder={t("AdministrativeServicesDeptOrders:roomsNumber")} width={"19.405rem"} name="roomsNumber"  ></CustomInput>
                </RichInput>

                <RichInput>
                  <CustomInput placeholder={t("AdministrativeServicesDeptOrders:personName")} width={"36rem"} name="personName"></CustomInput>
                  <StyledSendButton type="button" className="send-btn"> <FontAwesomeIcon size="1x" icon={faPlus}  /> </StyledSendButton>
                </RichInput>
                <RichInput>
                      <CustomInput type="date" placeholder={""} name="fromDate" width={"18.405rem"}></CustomInput>
                  {t("AdministrativeServicesDeptOrders:dateTo")}
                    <CustomInput type="date" placeholder={""} name="toDate" width={"18.405rem"}></CustomInput>
                </RichInput>
                <CustomButton green type="submit" className="send-btn"><Trans i18nKey={"AdministrativeServicesDeptOrders:submitBtn"} t={t}></Trans></CustomButton>
              </Form>
            </Formik>
        </LargeBox>
      </View>
    </>
  );
}
export default AdministrativeServicesDeptOrders;
const StyledSendButton = styled(CustomButton)`
    line-height: 0;
    background-color: #008000;
    padding:0;
    width:2.9rem;
    height:2.9rem;
    margin-bottom:0;
    .fa-1x {
        font-size: 0.9em !important;
    }
`;
const services = [
    {
      Title: "عنوان",
      Description: "وصف",
      //   Icon: paperTime,
    },
    {
      Title: "عنوان",
      Description: "وصف",
      //   Icon: paperTime,
    },
    {
      Title: "عنوان",
      Description: "وصف",
      //   Icon: paperTime,
    },
    {
      Title: "عنوان",
      Description: "وصف",
      //   Icon: paperTime,
    },
    {
      Title: "عنوان",
      Description: "وصف",
      //   Icon: paperTime,
    },
    {
      Title: "عنوان",
      Description: "وصف",
      //   Icon: paperTime,
    },
    {
      Title: "عنوان",
      Description: "وصف",
      //   Icon: paperTime,
    },
  ];
  