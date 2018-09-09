const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const Issue = mongoose.model('Issue', IssueSchema);
module.exports ={Issue};

