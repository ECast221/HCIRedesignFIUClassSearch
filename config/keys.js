
// backend stopped working for some reason,
// had to change connection string. 
// From stackoverflow:
// According to MongoDB, SRV is possibly not working due to Mongoose.
module.exports = {
    //mongoURI: 'mongodb+srv://dbUser:dbPassword@mern-list-lbp9w.mongodb.net/test?retryWrites=true&w=majority',
    mongoURI: 'mongodb+srv://dbUser:dbPassword@mern-list-lbp9w.mongodb.net/test?retryWrites=true&w=majority'
}