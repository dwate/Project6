const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, 
        validate: {
        validator: function (value) {
          return /^[\w\.]{3,}@\w{3,}\.\w{2,3}$/.test(value);
        },
        message: (props) => `${props.value} is not a valid email address`,
      }, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);