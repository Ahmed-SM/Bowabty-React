import React from 'react';
import styled from "styled-components";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      })

    }
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <ErrorMessage>
            <ErrorHeader>عذراً حدث خطأ</ErrorHeader>
            <ErrorHeader style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
            </ErrorHeader>
          </ErrorMessage>
        );
      }

      return this.props.children;
    }  
  }

export default ErrorBoundary;

const ErrorMessage = styled.div`
 width:100%;
 background-color: #F6F4F5;
`;
const ErrorHeader = styled.h3`
 background-color: #F6F4F5;
 display: inline-flex;
justify-content: space-around;
align-items: center;
padding: 20px 10px;
width: 100%;
margin: 0px;
min-height:20vh;
`;