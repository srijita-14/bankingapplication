import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';


export default class FormEq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            balance= null,
            account_no=null,
            name= null,
            address:null,
            contact:null,
            submitted: false
        }
    }
    idChangeHandler = (event) => {
        this.setState({id: event.target.value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.get('http://localhost:8081/user/details'+this.state.id)
        .then(response => {
            console.log(response);
            this.setState({submitted: true, balance: response.data.balance, account_no: response.data.account_no, name: response.data.name, address:response.data.address,contact:response.data.contact});
            alert("Details fetched!")
        });
      }

      render() {
        return (<div>
            <form onSubmit={this.submitHandler}>
              <h1><marquee bgcolor="A4D3EE">|| Welcome to Our Enquiry  ||</marquee></h1>
              <center>
              <p>Enter User ID:</p>
              <input
                type="text"
                onChange={this.idChangeHandler}
              />
               <p>
              <input type='submit'/>
              </p>
              </center>
            </form>
            {this.state.submitted && <UserInfo value = {this.state}/>}
            </div>
          );
          
    }
   function UserInfo(props) {
    console.log('User Details: '+props);
    return (
    <div>
    <table>
     <tr>
     <th>BALANCE</th>
       <th>ACCOUNT NO</th>
       <th>NAME</th>
       <th>ADDRESS</th>
       <th>CONTACT</th>
     </tr>
         <tr> 
           <td> {props.value.balance}</td>
          <td> {props.value.account_no}</td>
          <td> {props.value.name}</td>
          <td> {props.value.address}</td>
          <td> {props.value.contact}</td>

          </tr>
          </table>
         </div>
          )
      }