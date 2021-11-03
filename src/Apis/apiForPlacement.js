//getting API for showing all the data
import axios from 'axios';
//export const getPlacement = () => fetch("https://www.syntics.co/").then(res => res.json())
export const getPlacement = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createPlacements = (todo) => fetch("https://www.syntics.co/placements/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updatePlacement = (todo, id) => fetch(`https://www.syntics.co/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getPlacement = (id) => fetch(`https://www.syntics.co/${id}`).then(res => res.json())
export const getPlacement = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/${id}`)
		.then(res => res.data, )
)