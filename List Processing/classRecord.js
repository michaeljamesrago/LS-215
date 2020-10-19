"use strict"

const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;
const LETTER_GRADES = Object.freeze({
  A: { max: 100, min: 93 },
  B: { max: 92, min: 85 },
  C: { max: 84, min: 77 },
  D: { max: 76, min: 69 },
  E: { max: 68, min: 60 },
  F: { max: 59, min: 0 },
});
const NUMBER_OF_EXAMS = 4;

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let allStudentScores = extractScores(scores);
  let allNumberGrades = allStudentScores.map( (studentScore) => studentFinal(studentScore));
  let studentGrades =  allNumberGrades.map(grade => `${grade} (${letterGrade(grade)})`);

  let allExamData = extractExamData(scores);
  let exams = allExamData.map( (examData) => analyze(examData) );

  return { studentGrades, exams };
}

function extractScores(scores) {
  return Object.keys(scores).map( function(student) {
    return scores[student].scores;
  });
}

function extractExamData(scores) {
  let allExamData = [];
  let allStudentScores = extractScores(scores);

  for (let examNumber = 0; examNumber < NUMBER_OF_EXAMS; examNumber += 1) {
    allExamData.push(
      allStudentScores.map( (studentScore) => studentScore.exams[examNumber] )
    );
  }

  return allExamData;
}

function studentFinal(scores) {
  let finalExamScore = examAverage(scores.exams);
  let finalExerciseScore = exerciseTotal(scores.exercises);
  return finalScore(finalExamScore, finalExerciseScore);
}

function examAverage(examScores) {
  return examScores.reduce(((sum, score) => sum + score), 0) / examScores.length;
}

function exerciseTotal(exerciseScores) {
  return exerciseScores.reduce(((sum, score) => sum + score), 0);
}

function finalScore(examScore, exerciseScore) {
  let final = (examScore * EXAM_WEIGHT) + (exerciseScore * EXERCISE_WEIGHT);
  return Math.round(final);
}

function letterGrade(score) {
  let letters = Object.keys(LETTER_GRADES);
  for (let index = 0; index < letters.length; index += 1) {
    let letter = letters[index];
    if (score >= LETTER_GRADES[letter].min) return letter;
  }
}

function analyze(examData) {
  return {
    average: examAverage(examData),
    minimum: examData.reduce(((min, score) => (score < min) ? score : min ), Infinity),
    maximum: examData.reduce(((max, score) => (score > max) ? score : max ), -Infinity),
  };
}


console.log(generateClassRecordSummary(studentScores));

// returns:
({
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
})
