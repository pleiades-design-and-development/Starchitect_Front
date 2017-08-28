import React from 'react';

export default class ProseExplorerTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.match.params.object,
    }
  }

  render() {
    return (
      <div>
        <Reveal animated='small fade'>
          <Reveal.Content visible>
            <Icon name='add circle' size='large' />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Form size='small' key='big' onSubmit={this.handleSubmit} id='prose_form' error={error}>
            <Form.TextArea label='About' placeholder=`Give us the facts, Explorer!  Tell us more about ${title}` />
              <Message
                success
                header='Form Completed'
                content="You are now enlisted in the Explorer Corps. Welcome Cadet!"
              />
              <Message
                error
                header='Action Forbidden'
                content={error_msg}
              />
              <Button type='submit'>Submit</Button>
              <Dimmer active={active}>
              <Loader active={active} size='huge'>Loading</Loader>
              </Dimmer>
            </Form>
          </Reveal.Content>
        </Reveal>
      </div>
    );
  }
}
