const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

require('./config/mongoose.config');
app.use(express.json(), express.urlencoded({ extended: true }));

const JokeRoutes = require('./routes/jokes.routes');
app.use('/api/jokes', JokeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
