const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

const { isEmail } = require('validator')

const userSchema = mongoose.Schema({
    groupID: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'group' },
    name: { type: String, minlength: 2 },
    image: {type: Buffer ,required: false},
    phone: { type: String, minlength: 7, maxlength: 10 },
    email: { type: String, unique: true, validate: [isEmail, 'please insert valid email'] },
    height: { type: Decimal128, minlength: 2, maxlength: 3 },
    weight: { type: [Decimal128], minlength: 2, maxlength: 3 }
}, { timestamps: true })

module.exports = mongoose.model('users', userSchema);

