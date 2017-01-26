import './AddItem.scss';
import React from 'react';

class AddItem extends React.Component {
  constructor() {
    super();
    this.state = { name: '', text: '' };
  }

  change(e) {
    this.setState({[e.target.name]: e.target.value });
  }

  validate(e) {
    this.setState({ isValid: e.target.checkValidity() });
  }

  submit(e) {
    e.preventDefault();
    this.props.onAdd({
      name: this.state.name,
      text: this.state.text
    });
  }

  render() {
    return (
      <div className="note-editor">
        <form onSubmit={this.submit.bind(this)} onChange={this.validate.bind(this)} noValidate>
          <input placeholder="Title" name="name" value={this.state.name} onChange={this.change.bind(this)} autoComplete="off" type="text" required></input>
          <textarea value={this.state.text} onChange={this.change.bind(this)} cols="30" rows="10" name="text" required></textarea>
          <input disabled={!this.state.isValid} type="submit"></input>
        </form>
      </div>
    );
  }
}

AddItem.propTypes = {
  onAdd: React.PropTypes.func.isRequired
};

export default AddItem;