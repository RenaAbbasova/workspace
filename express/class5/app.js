const express = require("express" );
const students = require("./repositories/students.js" );
const app = express();
const port = 3000;
app.use(express.json());
app.get("/students" , (req, res) => {
 students. getAll().then((results) => res.json(results));
});
app.post("/students" , (req, res) => {
if (!(req.body.name && req.body.last_name &&
req.body.date_of_birth)) {
 res.status(422).send('All fields are required (name, last_name, date_of_birth)' );
 } else {
 students. insert(req.body).then(result => {
 res.json({ success: true, message: 'Student was saved successfully' });
 }).catch(err => {
 res.json({ success: false, message: err.detail });
 });
 }
});
app.listen(port, () => {
 console. log(`Example server listening on http://localhost: ${port}`);
});