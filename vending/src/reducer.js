const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";

const initialState = {
	result : 0,
	resultArray : []
}


const reduce = (state = initialState, action) =>{
	switch(action.type){
		case ADD:
			return {
				result : state.result  + action.value+action.value1,
				resultArray:[...state.resultArray, action.value,action.value1]
				
			}
		// case SUBTRACT:
		// 	return {
		// 		result : state.result - action.value,
		// 		resultArray:[...state.resultArray,state.result - action.value]
		// 	}
		// case MULTIPLY:
		// 	return{
		// 		result : state.result * action.value,
		// 		resultArray:[...state.resultArray,state.result * action.value]
		// 	}
		// case DIVIDE:
		// 	return{
		// 		result:state.result / action.value,
		// 		resultArray:[...state.resultArray,state.result / action.value]


		// 	} 
		default : 
			return state
	}
}


export default reduce;