// Object de-structure
const course = {
    courseName : "JavaScript",
    price : "999Rs.",
    courseInstructor : "Roshni",
    // name:"sagar",
    // name2:"rani",
    // name3:"Pinku"
}
// let courseInstructor = course.courseInstructor  

/*
    alias (Meaning : rename, reference name or short name)
    eg : suppose employee has (name, id, dob, salary) then 
    In dbms we use select empolyee as e (shortname or alias) then ->
    we can access it by shortname (alias) = e.name, e.id , e. dob ,e.salary
    means we give it a short name so that we don't have to write full name everytime
*/

let name = course.courseName;
const {courseInstructor} = course
console.log(courseInstructor);





console.log(course.name3)
console.log(course.name2)
console.log(course.name)

const name1 = course.name2


