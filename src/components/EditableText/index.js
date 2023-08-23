import {Component} from 'react'

import {
  BgContainer,
  TextContainer,
  Input,
  Text,
  Heading,
  Button,
} from './styledComponents'

export default class EditableText extends Component {
  state = {t: '', isActive: false}

  onChangeText = event => {
    this.setState({t: event.target.value})
  }

  onSave = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {t, isActive} = this.state
    const buttonText = isActive ? 'Edit' : 'Save'

    return (
      <BgContainer>
        <Heading>Editable Text Input</Heading>
        <TextContainer>
          {isActive ? (
            <Text>{t}</Text>
          ) : (
            <Input type="text" onChange={this.onChangeText} value={t} />
          )}
          <Button type="button" onClick={this.onSave}>
            {buttonText}
          </Button>
        </TextContainer>
      </BgContainer>
    )
  }
}
