const mongoose = require('mongoose');
const {Schema} = mongoose;

const SubjectSchema = new Schema({
   // _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    students:  [{type: mongoose.Schema.Types.ObjectId, ref: 'Student', unique: false }]
})

module.exports = mongoose.model('Subject', SubjectSchema);