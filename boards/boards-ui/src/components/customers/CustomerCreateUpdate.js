import React, { Component } from 'react';
import CustomersService from './CustomersService';

const customersService = new CustomersService();

class CustomerCreateUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          customersService.getCustomer(params.pk).then((c)=>{
            this.refs.username.value = c.username;
            this.refs.email.value = c.email;
          })
        }
      }

      handleCreate(){
        customersService.createCustomer(
          {
            "username": this.refs.username.value,
            "email": this.refs.email.value,
        }
        ).then((result)=>{
          alert("Customer created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(pk){
        customersService.updateCustomer(
          {
            "pk": pk,
            "username": this.refs.username.value,
            "email": this.refs.email.value,
        }
        ).then((result)=>{
          console.log(result);
          alert("Customer updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Username:</label>
              <input className="form-control" type="text" ref='firstName' />

            <label>
              Email:</label>
              <input className="form-control" type="text" ref='email' />

            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
      }
}

export default CustomerCreateUpdate;