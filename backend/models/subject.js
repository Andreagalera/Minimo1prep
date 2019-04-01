const mongoose = require('mongoose');
const {Schema} = mongoose;

const SubjectSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    students:  [{type: mongoose.Schema.Types.ObjectId}]
})

module.exports = mongoose.model('Subject', SubjectSchema);