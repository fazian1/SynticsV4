//Taking the router for express to use the GET, POST, HTTP methods.

const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Importing the employee schema

var { Student } = require('../../../models/student')
var { SectionsBusinessGroupMonth } = require('../../../models/Courses/Business/GroupMonth')


 //Now to use router.ger to use properties of the schema like find collection, get collection, etc

 //To use this get requeest we need to type https://www.syntics.co/employees/, this is coming from index.js 
 //Where its mentioned /employees is the router

 
 router.post('/business-group-month-create-sections', (req, res) => {
    Student.find({"courses" : "Business / Group / Month" },(err, doc) => {
        if (!err) {
            var count = 0
            console.log(doc[0]._id)
            var sectionArray = []
            doc.forEach(element => {
              sectionArray.push({
                  id: doc[count]._id,
                  name: doc[count].name
              })
              count=count+1
             });
             var countForSection = 0
             sectionArray.forEach(element => {
                var student = "student" + countForSection
                var emp = new SectionsBusinessGroupMonth({
                    student1:sectionArray[countForSection],
                    student2:sectionArray[countForSection++],
                    student3:sectionArray[countForSection++],
                    student4:sectionArray[countForSection++],
                    student5:sectionArray[countForSection++],
                    student6:sectionArray[countForSection++],
                    student7:sectionArray[countForSection++],
                    student8:sectionArray[countForSection++],
                    student9:sectionArray[countForSection++],
                    student10:sectionArray[countForSection++],
                 });
                 //Calling save function from mongoose, it will call back a function which will return a mongoDB object with above fields and properties
                 //There will be another property called _id which will be used to fetch a particular data by mongoDB
                 emp.save((err, doc) => {
                     //Checking for error
                     //if (!err) { res.send(doc);}
                     //else {console.log('Error in Student Save :' + JSON.stringify(err, undefined, 2)); }
                 });
             });
             //res.send(doc);
             }
        else { console.log('Error in Retrieving Blog :' + JSON.stringify(err, undifines, 2)); }
    })//.limit(2);

});
router.post('/business-group-month-deletefields', (req, res) => {
    SectionsSchoolsTrainingAdultMale.deleteMany({ "student1": null },(err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Blog :' + JSON.stringify(err, undifines, 2)); }
    });

});
router.post('/business-group-month', (req, res) => {
    SectionsSchoolsTrainingAdultMale.find((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Blog :' + JSON.stringify(err, undifines, 2)); }
    });

});
module.exports = router;


 //We have to configure these routes in the root file which is index.js


