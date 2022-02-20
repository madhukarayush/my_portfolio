import React, { Component } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-me", ...this.state }),
    })
      .then(() => {
        alert("Your message was successfully sent!");
        this.setState({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => alert(error));
    e.preventDefault();
  };

  handleChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section className="contact" id="contact">
        <h1 className="heading">Contact Me</h1>
        <div className="part1">
          <div className="contact-details">
            <p>
              If you have any questions or just want to get in touch, fill out
              the form or email me at <t></t>
              <a href="mailto:officialmdayush23@gmail.com">
                   officialmdayush23@gmail.com
              </a>
            </p>
            <div class="contactFormInput">
              <label for="contactName">Name</label> 
              <input
                type="text"
                id="contactName"
                name="contactName"
                placeholder="Name"
              ></input>
            </div>
            <div class="contactFormInput">
              <label for="contactEmail">Email</label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                placeholder="Email"
              ></input>
            </div>
            <div class="contactFormInput">
              <label for="contactMessage">Message</label>
              <textarea
                type="text"
                name="contactMessage"
                id="contactMessage"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="contactFormInput">
              <button class="btn">Send</button>
            </div>
          </div>
        </div>
        <div className="part2">
          <img
            width="100%"
            height="auto"
            src="https://manjotportfolio.herokuapp.com/static/media/email.992cf037d70381c02676.png"
          ></img>
        </div>
      </section>
    );
  }
}

export default Contact;
