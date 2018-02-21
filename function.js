const HYF = {
    studentClasses: [
        { name: "class 14", students: [], mentors: [] }
    ]
};
function addNewClass(objectClass) {

    HYF.studentClasses.push(objectClass);

}
addNewClass({ name: "class 15", students: [], mentors: [] });

console.log(HYF.studentClasses);


let studentsForEven = ['wael', 'Lilas', 'Isaac'];
let studentsForOdd = ['Nour', 'Aya', 'Rami'];

for (let i = 0; i < 4; i++) {
    addNewClass({ name: `Class ${ i + 1 }`, students: [], mentors: [] });
    console.log(HYF.studentClasses[HYF.studentClasses.length - 1]);
}




for (i = 0; i < HYF.studentClasses.length; i++) {
    let students = HYF.studentClasses[i].students;
    if (i % 2) {
        HYF.studentClasses[i].students.concat(studentsForEven)

    }
    else {
        HYF.studentClasses[i].students= studentsForOdd

    }
}

console.log(HYF.studentClasses[HYF.studentClasses.length - 1].students);
console.log(HYF.studentClasses[HYF.studentClasses.length - 2].students);
