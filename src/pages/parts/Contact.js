import React from 'react';
import axios from 'axios';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
    this.Alerts = this.Alerts.bind(this);
    this.ContactForm = this.ContactForm.bind(this);
    this.ThankYou = this.ThankYou.bind(this);
    this.addAlert = this.addAlert.bind(this);
    this.state = {
      formSubmitted: false,
      formDisabled: false,
      formData: {},
      alerts: []
    };
  }

  handleError(error){
    this.addAlert({content: error.message, color: error})
  }

  addAlert({color = 'info', content=''}) { const alerts = this.state.alerts;
    if (content) {
      alerts.push({color, content});
      this.setState({alerts});
    }
  }


  dismissAlert(i){

  }
  
  async submitForm(event) { try {
    this.setState({formDisabled: true});
    this.forceUpdate();
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      comments: data.get('comments'),
    };
    const response = await axios({
      url : 'https://hooks.zapier.com/hooks/catch/2516557/8m2iei/',
      method: 'POST',
      data: formData,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    }).then(response => {
      this.setState({formSubmitted: true});
      this.forceUpdate();
      return response;
    });

    return response;
  } catch(error) { this.handleError(error) }}

  Alerts() {              
    return this.state.alerts.map(({color='info', content=''}, idx)=>
      <div key={idx} className={`alert-${color}`}>
        {content}
      </div>
    )
  }
  

  ContactForm() {
    return (
      <div className="col-lg-6 col-md-8 col-sm-10 mx-auto text-center">
        <h2>Contact Me</h2>
        <hr className="small" />
        <form className="mx-auto text-center" onSubmit={this.submitForm}>
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-5">
              <p>
                <input type="text" name="name" placeholder="Name" required/>
              </p><p>
                <input type="email" name="email" placeholder="Email" required/>
              </p><p>
                <input type="phone" name="phone" placeholder="Phone (optional)"/>
              </p>
            </div>
            <div className="col-12 col-lg-6 col-xl-7">
              <textarea name="comments" cols="30" rows="5" placeholder="What's on your mind?" required></textarea>
            </div>
            <div className="clearfix"></div>
            <div className="col-10 col-lg-12 text-right mt-2">
              <input type="submit" value="Submit" disabled={this.formDisabled} />
            </div>
          </div>
        </form>
      </div>
    );
  }

  ThankYou() {
    return (
      <div className="col-lg-6 col-md-8 col-sm-10 mx-auto text-center">
        <h2>Thank You!</h2>
        <hr className="small" />
        <p>
          Your message has been sent!
        </p>
      </div>
    );
  }

  render() {
    const { formSubmitted = false } = this.state;
    return (
      <ScrollableAnchor id="contact">
        <section className="contact">
          <div className="container">
            <div className="row">
              <this.Alerts />
              {!formSubmitted
                ? <this.ContactForm />
                : <this.ThankYou />
              }
              
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}