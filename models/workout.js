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
            required: "Enter the type of exercise you are doing"
          },
          name: {
            type: String,
            trim: true,
            required: "Enter exercise name"
          },
          duration: {
            type: Number,
            required: "Enter the duration of time you spent exercising"
          },
          distance: {
            type: Number,
            required: [false, "Enter distance of exercise"]
          },
          weight: {
            type: Number,
            required: [false, "Enter weight being lifted"]
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
      ]},

      {
        toJSON: {
          virtuals: true
        }
      }
    );

    //Add virtual property to schema called totalDuration
    workoutSchema
      .virtual("totalDuration")
      .get(function () {
        let totalDuration = 0
        for (let i = 0; i < this.exercises.length; i++) {
          totalDuration += this.exercises[i].duration
        }
        return totalDuration;
      });

      //Creating "Workout model to export"
      const Workout = mongoose.model("Workout", workoutSchema);
//Export the model
      module.exports = Workout;