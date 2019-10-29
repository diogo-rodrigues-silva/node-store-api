const mongoose = require('mongoose');

const url = 'mongodb+srv://diogo:'+ process.env.DB_PASS +'@cluster-store-mongodb-ufii5.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});