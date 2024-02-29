  const mongoose = require('mongoose');


  const projectSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
      required: true,
    },
  });

  const Project = mongoose.model('Project', projectSchema);

  module.exports = Project;
