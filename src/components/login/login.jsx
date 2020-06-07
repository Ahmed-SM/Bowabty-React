import React from "react";
import styled from "styled-components";

const StyledLogin = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    background-color: #F6F4F5;
    direction: rtl;
    width: 100%;
    min-height: 80vh;
`;
const StyledContainer = styled.div `
    width: 50rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    min-width: 45rem;
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.09);
    background-color: white;
    border-radius: 15px;
    border-bottom: 6px solid #323130;
`;
const StyledInput = styled.input `
    height: 2.875rem;
    margin-bottom: 0.1rem;
    border-color: black;
    width: 100%;
    color: #29333f;
    font-size: 1.3rem;
    outline: 0;
    transition: all 0.30s ease-in-out;
    height: 30px;
    border-radius: 5px;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 15px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(169, 169, 169)
`;
const StyledDivider = styled.hr`
    margin-top: 10px;
    width:90%;
    margin-bottom: 10px;
`;
const StyledHeader = styled.div`
    padding: 0px 10px 0px 10px;
    -webkit-text-stroke: 0.4px black;
    -webkit-text-fill-color: black;

    & > * {
      margin: 2px 0;      
    }
`;
const StyledGroup = styled.div`
    display: block;
    width:100%;
    padding: 0px 40px;
`;
const StyledInputGroup = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
`;
const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const StyledButton= styled.button`
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
    background-color: #3C4652;
    outline: none;
`;

const Login = () => {
    return (
        <StyledLogin>
                <StyledContainer>
                        <StyledHeader>
                            <h3>
                                تسجيل دخول
                            </h3>
                        </StyledHeader>
                            <StyledDivider/>
                        <StyledGroup dir="auto">
                            <form novalidate>
                                <StyledInputGroup >
                                    <StyledColumn >
                                        <label data-translate="username" for="">
                                            اسم المستخدم
                                        </label>
                                        <StyledInput
                                            id="username"
                                            class="input-border "
                                            type="text"
                                            minlength="5"
                                            pattern="
                        ^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$"
                                            required/>
                                        <span class="error" aria-live="polite"/>
                                    </StyledColumn>
                                </StyledInputGroup>
                                <StyledInputGroup class="input-group-a">
                                    <StyledColumn class="column">
                                        <label data-translate="password" for="">
                                            كلمة المرور
                                        </label>
                                        <StyledInput
                                            id="password"
                                            class="input-border "
                                            type="password"
                                            minlength="5"
                                            pattern="^([a-zA-Z0-9@*#]{5,15})$"
                                            required/>
                                        <span class="error" aria-live="polite"/>
                                    </StyledColumn>
                                </StyledInputGroup>
                                <div class="button-section">
                                    <StyledButton type="submit" id="submit-btn" data-translate="button" class="send-btn">
                                        دخول
                                    </StyledButton>
                                </div>
                            </form>
                        </StyledGroup>
                </StyledContainer>
        </StyledLogin>
    )
}
export default Login;