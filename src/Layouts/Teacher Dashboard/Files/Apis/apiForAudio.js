//getting API for showing all the data
import axios from 'axios';
//export const getAudioFile = () => fetch("https://www.syntics.co/api/files").then(res => res.json())
export const getAudioFile = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/api/files`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createAudioFile = (todo) => fetch("https://www.syntics.co/api/files", {
  method: "POST",
  body: todo
})  

//getting API for updating specific data
export const updateRegistrations = (todo, id) => fetch(`https://www.syntics.co/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getRegisteration = (id) => fetch(`https://www.syntics.co/${id}`).then(res => res.json())
export const getRegisteration = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/${id}`)
		.then(res => res.data, )
)