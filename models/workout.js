//Setting Mongoose as a dependency
const mongoose = require("mongoose");
//Setting up Mongoose schema 
const Schema = mongoose.Schema;

//Creating the workout schema
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Enter exercise type"
          },
          name: {
            type: String,
            trim: true,
            required: "Enter exercise name"
          },
          duration: {
            type: Number,
            required: "Enter the duration of time"
          },
          distance: {
            type: Number,
            required: [false, "Enter distance of exercise"]
          },
          weight: {
            type: Number,
            required: [false, "Enter weight"]
          },
          reps: {
            type: Number,
            required: [false, "Enter number of reps"]
          },
          sets: {
            type: Number,
            required: [false, "Enter number of sets"]
          }
        }
      ]
    },
      {
        toJSON: {
          virtuals: true
        }
      }
    );

    //Add virtual property to schema called workoutDuration
    workoutSchema
      .virtual("workoutDuration")
      .get(function () {
        let workoutDuration = 0
        for (let i = 0; i < this.exercises.length; i++) {
          workoutDuration += this.exercises[i].duration
        }
        return workoutDuration;
      });