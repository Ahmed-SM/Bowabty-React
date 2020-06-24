import React  from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {CustomFileView, CustomFileContent} from "./CustomFileView";

export default class Upload extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: [],
    };
  }
  onChange(e) {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    this.setState({ files: [...this.state.files, ...filesArr] });
    this.props.form.setFieldValue("file", [...this.state.files]);
    
  }

  removeFile(f) {
    this.setState({ files: this.state.files.filter((x) => x !== f) });
    this.inputRef.current.value = '';

  }

  render() {
    return (
      <div>
        <StyledColumn width={this.props.width}>
        <label htmlFor={this.props.id || this.props.name}>{this.props.label}</label>
          <label className="__custom-file-upload" htmlFor={this.props.id || this.props.name}>
          {this.state.files.length > 0 ? this.state.files.length + " مرفق ": this.props.label}<span>{<FontAwesomeIcon size="1x" icon={this.props.icon} />}</span>
          </label>
          <StyledFile
            id={this.props.id}
            name={this.props.name}
            type={this.props.type}
            multiple
            onChange={this.onChange}
            ref={this.inputRef}
          />
        </StyledColumn>
        <CustomFileView acceptedFileslength={this.state.files.length}>
          {this.state.files.map((acceptedFile, index) => (
              <CustomFileContent  key={index} icon={faTimes} file={acceptedFile} color={"#F05261"} callBack={this.removeFile.bind(this, acceptedFile)}/>
          ))}
        </CustomFileView>
      </div>
    );
  }
}
const StyledColumn = styled.div`
  display: flex;
  margin-left: 6.3px;
  margin-right: 6.3px;
  flex-direction: column;
  flex-wrap: nowrap;
  width: ${(props) => props.width};
  min-width: 8rem;
  outline: none;

  & > label {
    justify-content: space-between;
    padding: 0 5px;
    width: fit-content;
  }
  & > label > span {
    margin-top: 5px;
    color: black;
  }
  .__custom-file-upload {
    border: 1px solid rgb(169, 169, 169);
    width: 100%;
    display: flex;
    cursor: pointer;
    min-height: 3rem;
    align-items: center;
    text-indent: 5px;
    color: #757575;
    font-size: 1.3rem;
    outline: none;
    text-indent: 15px;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-shadow: none;
    text-align: start;
    border-radius: 5px;
  }
`;

const StyledFile = styled.input`
display: none !important;
`;
