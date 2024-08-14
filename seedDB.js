const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Task = require('../models/taskModel');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

// Sample tasks to be added to the database
const tasks = [
  { name: 'Complete project documentation', completed: false },
  { name: 'Attend team meeting', completed: true },
  { name: 'Review pull requests', completed: false },
  { name: 'Update the task manager UI', completed: true },
  { name: 'Fix login bug', completed: false },
];

// Function to seed the database
const seedDB = async () => {
  try {
    await Task.deleteMany(); // Clear the existing tasks
    await Task.insertMany(tasks); // Insert the sample tasks
    console.log('Database seeded with sample tasks');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close(); // Close the connection when done
  }
};

// Run the seed function
seedDB();
