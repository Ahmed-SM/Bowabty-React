import styled from "styled-components";
export const CustomButton = styled.button`
    display: inline-block;
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
    background-color: ${(props) => (props.primary ? "#3497DB" : props.green ? "#008B38" : props.lightgreen ? "#1BBC9B" : props.purple ? "#902577" : "#000000")};
    outline: 0;
    margin-left: 5.3px;
    margin-right: 5.30px;
    margin-bottom: 10px;
    &:hover{
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      background: rgba(81, 203, 238, 1);
      border: 1px solid rgba(81, 203, 238, 1);
    }
`;
