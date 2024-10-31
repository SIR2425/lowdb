import { JSONFilePreset } from 'lowdb/node';

import express from 'express';
const app = express();


app.use(express.static('public/'));


const defaultData = { students: [{id:1,name:"marília", age : 30, study: "LEI"}] }
const db = await JSONFilePreset('students.json', defaultData)


app.get('/students', async (req, res) => {
    await db.read();
    res.json(db.data.students);
});

app.get('/students/:id', async (req, res) => {
    await db.read();
    const student = db.data.students.find((student) => student.id === parseInt(req.params.id));
    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});

function newId(db) {
    return db.data.students.length + 1;
}
const newStudent = {id:newId(db),name:"abelardo", age : 23, study: "Turismo"};

db.data.students.push(newStudent);

console.log(db.data);
await db.write();




app.listen(3000);