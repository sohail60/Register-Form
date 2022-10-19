const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://admin-sohail:sohail05star@cluster0.qqtkl7c.mongodb.net/?retryWrites=true&w=majority/Register-Form',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection Successful');
}).catch((e) => {
    console.log('No Connection');
    console.log(e);
})