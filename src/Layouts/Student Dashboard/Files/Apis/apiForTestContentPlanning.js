//getting API for showing all the data
import axios from 'axios';


export const getTestPlannings = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/`)
		.then(res => res.data, )
)

export const getTestPlanningsForGrade1 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/Students-Grade-1/${id}`)
		.then(res => res.data, )
)


export const getTestPlanningsForGrade2 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/Students-Grade-2/${id}`)
		.then(res => res.data, )
)

export const getTestPlanningsForGrade3 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/Students-Grade-3/${id}`)
		.then(res => res.data, )
)

export const getTestPlanningsForGrade4 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/Students-Grade-4/${id}`)
		.then(res => res.data, )
)


export const getTestPlanningsForGrade5 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/Students-Grade-5/${id}`)
		.then(res => res.data, )
)

export const getTestPlanningsForGrade6 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/Students-Grade-6/${id}`)
		.then(res => res.data, )
)


export const getTestPlanningsForGrade7 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/Students-Grade-7/${id}`)
		.then(res => res.data, )
)


export const getTestPlanningsForGrade8 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/Students-Grade-8/${id}`)
		.then(res => res.data, )
)

export const getTestPlanningsForGrade9 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/Students-Grade-9/${id}`)
		.then(res => res.data, )
)

export const getTestPlanningsForGrade10 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/Students-Grade-10/${id}`)
		.then(res => res.data, )
)

export const getTestPlanningsForGrade11 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/Students-Grade-11/${id}`)
		.then(res => res.data, )
)

export const getTestPlanningsForGrade12 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/Students-Grade-12/${id}`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createTestPlannings = (todo) => fetch("https://www.syntics.co/testPlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTestPlannings = (todo, id) => fetch(`https://www.syntics.co/testPlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for deleting specific data
export const deleteTestPlannings = (todo, id) => fetch(`https://www.syntics.co/testPlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data

export const getTestPlanning = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/testPlannings/${id}`)
		.then(res => res.data, )
)