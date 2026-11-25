const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 18,
        max: 60,
        required: true,
        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not an even number`
        }
    },
    email: {
        type: String,
        minlength: 10,
        maxlength: 30,
        required: true,
        lowercase: true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;