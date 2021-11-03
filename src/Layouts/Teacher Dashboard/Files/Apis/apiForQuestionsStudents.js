//getting API for showing all the data
import axios from 'axios';
//export const getQuestionsStudents = () => fetch("https://www.syntics.co/questions").then(res => res.json())
export const getQuestionsStudents = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/questions`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createQuestionsStudents = (todo) => fetch("https://www.syntics.co/questions/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateQuestionsStudents = (todo, id) => fetch(`https://www.syntics.co/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getQuestionStudent = (id) => fetch(`https://www.syntics.co/questions${id}`).then(res => res.json())
export const getQuestionStudent = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/questions${id}`)
		.then(res => res.data, )
)