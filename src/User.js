import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           balance :null,
          account_no :null,
          name: null,
          address:null,
          contact:null
        }
    }

    balanceChangeHandler = (event) => {
        this.setState({balance: event.target.value});
      }

    account_noChangeHandler = (event) => {
        this.setState({account_no: event.target.value});
      }

    nameChangeHandler = (event) => {
        this.setState({name: event.target.value});
      }

    addressChangeHandler = (event) =>{
        this.setState({address: event.target.value});
    }

    contactChangeHandler = (event) =>{
        this.setState({contact: event.target.value})
    }

   user_idChangeHandler = (event) =>{
        this.setState({user_id: event.target.value})
    }
    

      submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/user/create', {
            balance: this.state.balance,
            acoount_no: this.state.account_no,
            name: this.state.name,
            address:  this.state.address,
            contact: this.state.contact
        })
        .then(response => alert("welcome user"));
      }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
               <h1><marquee bgcolor="A4D3EE"> || User Details ||</marquee></h1>
               <center>
               <table>
                 <tr>
                 <td>
                    <p>Enter the desired balance:</p></td>
              <td><input
                type="text"
                onChange={this.balanceChangeHandler}
              /></td>
               </tr>
               <tr>
              <td><p>Enter your account_no:</p></td>
              <td><input
                type="text"
                onChange={this.account_noChangeHandler}
              /></td>
              </tr>
              <tr>
              <td>
              <p>Enter your name:</p></td>
              <input
                type="text"
                onChange={this.nameChangeHandler}
              />
                  </tr>
                  <tr>
                  <td><p> Enter address: </p></td>
              <input
                type="text"
                onChange={this.addressChangeHandler}
                />
                  </tr>
                  <tr>
                  <td>
               <p> Enter contact number: </p></td>
               <td><input
                type="text"
                onChange={this.contactChangeHandler}
               /></td>
               </tr>
               </table>
               <p><input type='submit'/></p>
              </center>
            </form>
        );
}
}