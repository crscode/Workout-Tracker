let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 50,
        weight: 30,
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "Resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 45,
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "Resistance",
        name: "Push Press",
        duration: 30,
        weight: 220,
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 45,
        distance: 5
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 220,
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [
      {
        type: "Resistance",
        name: "Bench Press",
        duration: 20,
        weight: 240,
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-4),
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 10,
        weight: 45,
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-3),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-2),
    exercises: [
      {
        type: "Resistance",
        name: "Military Press",
        duration: 20,
        weight: 150,
        reps: 10,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-1),
    exercises: [
      {
        type: "Resistance",
        name: "Bench",
        duration: 30,
        distance: 2
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
