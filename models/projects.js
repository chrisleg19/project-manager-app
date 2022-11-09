const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const deliverable = new Schema({
    deliverableName: {type: String},
    deliverableBody: {type: String},
    estimatedCost: {type: Number},
    actualCost: {type: Number},
    estimatedTime: {type: Number},
    actualTime: {type: Number}
})

const constraint = new Schema ({
    constraintName:{type: String},
    constraintBody: {type: String},
    affectedDeliverable: {type:String},
    showStopper: {type: Boolean, default: false}
})


const projectSchema = new Schema({
    title: {type: String, required: true, unique: true},
    client: {type: String, required: true},
    budget: {type: Number, required: true},
    targetDate: {type: Date, required: true},
    deliverables: [deliverable],
    constraints: [constraint]
    
    // deliverables: [{type: String}],
    // constraints: [{type: String}]
    // deliverables: [{
    //     name: {type: String},
    //     body: {type: String},
    //     estimatedCost: {type: Number},
    //     actualCost: {type: Number},
    //     estimatedTime: {type: Number},
    //     actualTime: {type: Number}
    // }],
    // constraints: [{
    //     name:{type: String},
    //     body: {type: String},
    //     affectedDeliverable: {type:String},
    //     showStopper: {type: Boolean, default: false}
    // }],
})

module.exports = mongoose.model("Project", projectSchema)

