import React, { Component } from 'react';
import Home from './Home.js';
import axios from 'axios';
import {add} from '../actions';
import {connect} from 'react-redux';
import { arrayExpression, isTemplateElement } from '@babel/types';



class Create extends Component {
    constructor(props) {
        super(props);

  
        this.state = {
            name: '',
            price: '',
            quantity:"",
            list:[]
      
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeName(e) {
      this.setState({
        name: e.target.value
      });
    }
    onChangePrice(e) {
      this.setState({
        price: e.target.value
      })  
    }
    
  
    onSubmit(e) {
      e.preventDefault(); 
      const data={name:this.state.name,price:this.state.price}
      let list1=[]
      list1.push(data)
     console.log(list1)
     this.setState({
       list:list1
     })
     
      axios.post(`http://localhost:5000/users/create`,data)
      .then(res => {
        console.log(res);
        //console.log(res);
      })
      
      
      this.setState({
            name: '',
            price: ''
      })
    }
   
    render() {
      console.log(this.state.list)
     // console.log(this.state.arr);
        return (
            <div>
                   <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter Item_name:  </label>
                        <input type="text" className="form-control"  value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Enter Price:  </label>
                        <input type="text" className="form-control"  value={this.state.price} onChange={this.onChangePrice} />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit"  className="btn btn-primary ml-2"/>
                    </div>
                </form>
                {/* <span>
				 <label htmlFor = "amount"> Quantity: </label>
				<input type = "text" value = {this.state.quantity} onChange = {(e) => {
					this.setState({
						quantity : e.target.value
					});
				}} />  

				<button onClick = {() => this.props.add(this.state.name)}> Add </button>
				
			</span> */}
        <button onClick = {() => this.props.add(this.state.name)}>First Add history </button>       
            </div>
        )
    }
  }
  const actionCreators = {
    add
}
export default  connect(null, actionCreators)(Create)