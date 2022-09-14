import React, { Component } from 'react'

export class Contact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
  }

  render() {
    const { name, phone, email } = this.state
    return (
      <div className="contact">
        <div className="contact-item">
          <label for="name">Name</label>
          <input
            id='input-name'
            type="text"
            name="cheese"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="contact-item">
          <label for="phone">Phone</label>
          <input
            id='input-phone'
            type="text"
            name="phone"
            value={phone}
            onChange={e => this.setState({ phone: e.target.value })}
          />
        </div>

        <div className="contact-item">
          <label for="email">Email</label>
          <input
            id='input-email'
            type="text"
            name="email"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>

        <button className='btn-add' onClick={() => this.props.removeContact(this.props.contact.id)}>Remove Contact</button>
      </div>
    )
  }
}

export default Contact