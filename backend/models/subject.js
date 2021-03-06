const mongoose = require('mongoose');
const {Schema} = mongoose;

const SubjectSchema = new Schema({
    name: { type: String, required: true },
    student:  [{type: mongoose.Schema.Types.ObjectId, ref: 'Student', unique: false }]
})

module.exports = mongoose.model('Subject', SubjectSchema);