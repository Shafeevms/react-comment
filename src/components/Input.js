import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      text: '',
    }
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(e) {
    const {name, text} = this.state;
    const dateNow = new Date();
    const date = `${dateNow.getDate()}-${dateNow.getMonth() + 1}-${dateNow.getFullYear()} ${dateNow.getHours()}:${dateNow.getMinutes()}`
    e.preventDefault();
    this.props.action(name, text, date);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
   }

  render() {
    return (
      <form className='form'>
        <input name={'name'} onChange={this.onChange} className='name'/>
        <textarea name={'text'} onChange={this.onChange} className='text'/>
        <button onClick={this.onClick} className='btn__send'>
          Add comment
        </button>
      </form>
    )
  }
}

export default Input;