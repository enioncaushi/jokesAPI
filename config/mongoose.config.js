const mongoose = require('mongoose');
const DB_NAME = process.env.DB_NAME || 'jokesDB';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(`Successfully connected to ${DB_NAME}`))
.catch(err => console.error("Connection error", err));
