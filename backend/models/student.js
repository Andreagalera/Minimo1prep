const mongoose = require('mongoose');
const {Schema} = mongoose;

const StudentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: [{ home: Number, work: Number}]

})

module.exports = mongoose.model('Student', StudentSchema);