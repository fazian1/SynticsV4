//getting API for showing all the data
import axios from 'axios';

export const getCoursePlannings = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/${id}`)
		.then(res => res.data, )
)
export const getAssignmentPlannings = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/assignmentPlannings/teacherSpecific/${id}`)
		.then(res => res.data, )
)
export const getCoursePlanningsForGrade1 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/Grade-1/${id}`)
		.then(res => res.data, )
)


export const getCoursePlanningsForGrade2 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/Grade-2/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade3 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/Grade-3/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade4 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/Grade-4/${id}`)
		.then(res => res.data, )
)


export const getCoursePlanningsForGrade5 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/Grade-5/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade6 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/Grade-6/${id}`)
		.then(res => res.data, )
)


export const getCoursePlanningsForGrade7 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/Grade-7/${id}`)
		.then(res => res.data, )
)


export const getCoursePlanningsForGrade8 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/Grade-8/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade9 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/Grade-9/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade10 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/Grade-10/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade11 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/Grade-11/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningsForGrade12 = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/Grade-12/${id}`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createCoursePlannings = (todo) => fetch("https://www.syntics.co/coursePlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
export const createAssignmentPlannings = (todo) => fetch("https://www.syntics.co/assignmentPlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
//getting API for updating specific data
export const updateCoursePlannings = (todo, id) => fetch(`https://www.syntics.co/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})
export const updateAssignmentPlannings = (todo, id) => fetch(`https://www.syntics.co/assignmentPlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})    
//getting API for deleting specific data
export const deleteCoursePlannings = (todo, id) => fetch(`https://www.syntics.co/coursePlannings/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data

export const getCoursePlanning = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningAdmin = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/admin/${id}`)
		.then(res => res.data, )
)

export const getCoursePlanningTeacherSpecific = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/coursePlannings/teacherSpecific/${id}`)
		.then(res => res.data, )
)
