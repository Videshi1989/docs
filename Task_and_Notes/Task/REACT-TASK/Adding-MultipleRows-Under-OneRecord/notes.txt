import React, { useState } from 'react';
//import axios from 'axios';

const Test = () => {
    const [projectName, setProjectName] = useState("");
    const [tasks, setTasks] = useState([{ title: "", description: "" }]);

    // Handle input changes for project name
    const handleProjectNameChange = (e) => {
        setProjectName(e.target.value);
    };

    // Handle input changes for individual tasks
    const handleTaskChange = (index, event) => {
        const updatedTasks = tasks.map((task, idx) => 
            idx === index ? { ...task, [event.target.name]: event.target.value } : task
        );
        setTasks(updatedTasks);
    };

    // Add a new empty task row
    const addTaskRow = () => {
        setTasks([...tasks, { title: "", description: "" }]);
    };

    // Remove a specific task row
    const removeTaskRow = (index) => {
        setTasks(tasks.filter((_, idx) => idx !== index));
    };

    // Submit the form data
    const handleSubmit = async (e) => {
        e.preventDefault();
        const projectData = { projectName, tasks };
        
        try {
            //await axios.post("http://localhost:5000/api/projects", projectData);
            alert("Project and tasks added successfully!");
        } catch (error) {
            console.error("Error saving project", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Project</h2>
            <label>
                Project Name:
                <input type="text" value={projectName} onChange={handleProjectNameChange} required />
            </label>
            <h3>Tasks</h3>
            {tasks.map((task, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                    <label>
                        Task Title:
                        <input
                            type="text"
                            name="title"
                            value={task.title}
                            onChange={(e) => handleTaskChange(index, e)}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            value={task.description}
                            onChange={(e) => handleTaskChange(index, e)}
                        />
                    </label>
                    <button type="button" onClick={() => removeTaskRow(index)}>
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" onClick={addTaskRow}>Add Task</button>
            <button type="submit">Submit Project</button>
        </form>
    );
};

export default Test;


/*

// routes/projects.js
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.post('/', async (req, res) => {
    try {
        const { projectName, tasks } = req.body;
        const project = new Project({ projectName, tasks });
        await project.save();
        res.status(201).json({ message: "Project created successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error creating project", error });
    }
});

module.exports = router;

*/

/*

// models/Project.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String }
});

const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    tasks: [taskSchema]
});

module.exports = mongoose.model("Project", projectSchema);


*/