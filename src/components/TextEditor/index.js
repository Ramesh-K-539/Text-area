import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  Div,
  ImgContainer,
  Heading,
  Img,
  TextContainer,
  Header,
  ListItem,
  Button,
  Hr,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false, textInput: ''}

  onClickBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {bold, italic, underline, textInput} = this.state

    return (
      <AppContainer>
        <Div>
          <ImgContainer>
            <Heading>Text Editor</Heading>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImgContainer>
          <TextContainer>
            <Header>
              <ListItem key="bold">
                <Button
                  color={bold ? '#faff00' : '#f1f5f9'}
                  data-testid="bold"
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </Button>
              </ListItem>
              <ListItem key="italic">
                <Button
                  data-testid="italic"
                  color={italic ? '#faff00' : '#f1f5f9'}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </ListItem>
              <ListItem key="underline">
                <Button
                  data-testid="underline"
                  color={underline ? '#faff00' : '#f1f5f9'}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ListItem>
            </Header>
            <Hr />
            <TextArea
              value={textInput}
              onChange={this.onChangeText}
              bold={bold ? 'bold' : 'normal'}
              style={{fontStyle: italic ? 'italic' : 'normal'}}
              textUl={underline ? 'underline' : 'normal'}
            />
          </TextContainer>
        </Div>
      </AppContainer>
    )
  }
}

export default TextEditor
