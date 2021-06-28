const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 80 },
    email: { type: String, required: true, minlength: 3, maxlength: 100 },
    password: { type: String, required: true, minlength: 6, maxlength: 120 },
    admin: { type: Boolean, default: false},
    createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);