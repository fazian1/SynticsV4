import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { getPlacementTestQuestions } from '../../Apis/apiForPlacementTestQuestions';

function ViewContentListForAdmin() {
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchItems = async function() {
        const contents = await getPlacementTestQuestions()
        setItems(contents)
      }
      fetchItems()
    }, []);

    const history = useHistory()
    const handleOnClickEdit = (data) => {
      if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Text")){
        history.push({
          pathname:"/view-question-type-qa-edit",
          state: data
        })
      }
      else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Multiple Choice")){
        history.push({
          pathname:"/view-question-answer-type-mcq-edit",
          state: data
        })
      }
      else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Fill in the Blanks")){
        history.push({
          pathname:"/view-question-answer-type-blanks-edit",
          state: data
        })
      } else if ((data.coursetype == "Adult Training") && (data.questiontype === "Text") && (data.answertype === "Pronunciation")){
        history.push({
          pathname:"/view-question-answer-type-pronunciation-edit",
          state: data
        })
      }
      else if ((data.coursetype == "Adult Training") && (data.questiontype === "File Upload")){
        history.push({
          pathname:"/course-content-file-upload",
          state: data
        })
      }
      //history.push('/placement-question-details')
    }
    const handleOnClickDelete = (data) => {
      axios.delete('https://www.syntics.co/placementQuestions/delete/' + data._id)
            .then((res) => {
                console.log('Student successfully deleted!')
                window.location.reload(false)
            }).catch((error) => {
                console.log(error)
            })
      
    }
    const handleOnClickView = (data) => {
      history.push({
        pathname : "/view-current-content",
        state: data
      })
    }
    const handleOnClickAnswers = (data) => {
      if ( data.answertype == "Multiple Choice"){
        history.push("/view-answers-mcq")
      } else if ( data.answertype == "Fill in the Blanks"){
        history.push("/view-answers-blanks")
      } else if ( data.answertype == "Simple Text"){
        history.push("/view-answers-qa")
      } else if ( data.answertype == "Pronunciation"){
        history.push("/view-answers-pronunciation")
      } 
    }
    
    return (
        <>
        <div>
          <Row>
            <Col md="12">
              <Card className="card-plain  text-center ">
                <CardHeader>
                  <h2>Placement Content</h2></CardHeader>
                <CardBody>
                  <div className="container-fluid">
                      <div>
                          <div>
                          <h4 className="mb-3">List of Placement Test Questions</h4>
                          </div>
                          <table className="table table-striped mt-3">
                          <thead>
                              <tr>
                              <th>Question Title</th>
                              <th>Activity Type</th>
                              <th>Question Type</th>
                              <th>Answer Type</th>
                              <th>Marks of Question</th>
                              <th colSpan="2">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              items.map(contents => (
                                  <tr key={contents._id}>
                                  <td>
                                      {contents.questiontitle}
                                  </td>
                                  <td>
                                      {contents.activitytype}
                                  </td>
                                  <td>
                                      {contents.questiontype}
                                  </td>
                                  <td>
                                      {contents.answertype}
                                  </td>
                                  <td>
                                      {contents.totalmarks}
                                  </td>
                                  <td>
                                      <button className="btn btn-success" onClick={() => handleOnClickAnswers(contents)}>View Student Answers</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-dark" onClick={() => handleOnClickView(contents)}>View Content</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-light" onClick={() => handleOnClickEdit(contents)}>Edit Content</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-danger" onClick={() => handleOnClickDelete(contents)}>Delete Content</button>
                                  </td>
                                  </tr>
                              ))
                              }
                          </tbody>
                          </table>
                      </div>
                  </div>
                  <div>

                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    )
}

export default ViewContentListForAdmin
