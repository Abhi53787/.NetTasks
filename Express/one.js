const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); 

const users = [
    { id: 1, name: 'John', email: 'John@google.com', gender: 'male' },
    { id: 2, name: 'Bob', email: 'bob@google.com', gender: 'male' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', gender: 'female' }
];
 
app.get('/users', (req, res) => {
    res.json(users);
});
 
app.post('/users', (req, res) => {
    const { name, email, gender } = req.body;

    if (!name || !email || !gender) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const newUser = {
        id: users.length + 1,  
        name,
        email,
        gender
    };

    users.push(newUser);
    res.status(201).json(newUser);
});
 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
