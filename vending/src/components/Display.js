import React from 'react';
import {connect} from 'react-redux';

class Display extends React.Component{
	render(){
        console.log(this.props.result)
		return(
            <div>
			{/* <p> Result : {this.props.result} </p> */}
            <p> History : {this.props.resultArray} </p>
            </div>
		);
	}
}

const mapStateToProps = state =>{
	return {
        result : state.result,
        resultArray : state.resultArray+" "
	}
}


export default connect(mapStateToProps)(Display);