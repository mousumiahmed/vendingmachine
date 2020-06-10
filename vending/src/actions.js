// TODO define string constants for all the action types
const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";

//Do not modify this function!
export const add = (value, value1)=>{
	return{
		type : ADD,
		value
		
	}
}

// TODO complete the subtract, multiply and divide functions
// The type of each should be the same as the function name but in UPPERCASE
// export const subtract = value =>{
// 	return{
// 		type : SUBTRACT,
// 		value
// 	}
// }
// export const multiply = value =>{
// 	return{
// 		type : MULTIPLY,
// 		value
// 	}
// }
// export const divide = value =>{
// 	return{
// 		type : DIVIDE,
// 		value
// 	}
// }