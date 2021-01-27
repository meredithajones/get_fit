//Create routes
//Set up dependencies
const router = require("express").Router();
const Workout = require("../models/workout.js");

//Use router.get to find workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
  .then(dbGetFit => {res.json(dbGetFit);
    })
});

//Use router.post to create Workout
router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
    .then(dbGetFit => { res.json(dbGetFit);
    })
    
});

//Use router.put to find workouts by their ids and push them onto the body
router.put("/api/workouts/:id", (req, res) => {
  const {body, params} = req;
  Workout.findByIdAndUpdate(params.id, {$push: { exercises: body }})
  .then(dbGetFit => {res.json(dbGetFit)
  })
})

//Use router.get to find range of workouts
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbGetFit => {res.json(dbGetFit);
  })
  
}); 

//export router
module.exports = router;