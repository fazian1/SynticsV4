//getting API for showing all the data
import axios from 'axios';

export const getRegistrations = (gender) => (
	console.log(gender),
	axios.post(`https://www.syntics.co/students/admin/${gender}`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createRegistrations = (todo) => fetch("https://www.syntics.co/students/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateRegistration = (todo, id) => fetch(`https://www.syntics.co/students/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getRegistration = (id) => fetch(`https://www.syntics.co/students/${id}`).then(res => res.json())
export const getRegisterationStudents = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/students/specific/${id}`)
		.then(res => res.data, )
		
)
export const getRegisterationStudentsById = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/students/specific/id/${id}`)
		.then(res => res.data, )
)