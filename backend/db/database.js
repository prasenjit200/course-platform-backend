const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
db_url = process.env.DB_URL;
console.log(db_url);

mongoose.connect(db_url);

// user schema -->

const UserSchema = mongoose.Schema({

    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = mongoose.Schema ({
    title : String,
    description : String,
    price : Number

});
const User = mongoose.model('users',CourseSchema);
const Course = mongoose.model('courses',CourseSchema);


module.exports = {
    User,
    Course
}