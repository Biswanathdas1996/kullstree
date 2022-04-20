import React from "react";
import { Card, Grid } from "@mui/material";

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    var dataSet = [
      {
        question: "What is 8 x 1?",
        answers: ["1", "8", "16", "9"],
        correct: 1,
      },
      {
        question: "Who is Steve Jobs?",
        answers: [
          "CEO of Microsoft",
          "Barber in NY",
          "Movie Star",
          "CEO of Apple",
        ],
        correct: 3,
      },
      {
        question: "Metallica is a ____ band",
        answers: ["Blues", "Hard-Rock", "Jazz", "Metal"],
        correct: 3,
      },
      {
        question: "IS is a ____",
        answers: ["Word", "Band", "Terror Group", "Brand"],
        correct: 2,
      },
      {
        question: "Who was Einstein",
        answers: [
          "A Scientist",
          "A Dentist",
          "A Serial Killer",
          "None of the above",
        ],
        correct: 0,
      },
      {
        question: "JavaScript can be used in ____ development",
        answers: ["Back-End", "Front-End", "ReactJS", "All of the Above"],
        correct: 3,
      },
      {
        question: "Hitler was a",
        answers: ["Mass Murderer", "Dictator", "Jew", "All "],
        correct: 4,
      },
      {
        question: "Korn is a",
        answers: ["Nu-Metal band", "Religion", "Singer"],
        correct: 0,
      },
      {
        question: "Windows computers are",
        answers: ["Horrible", "Great", "Cheap", "Invented by Bill Gates"],
        correct: 3,
      },
      {
        question: "The BigBan stands in",
        answers: ["Egypt", "London", "Amsterdam", "NewYork"],
        correct: 1,
      },
    ];

    this.state = {
      current: 0,
      dataSet: dataSet,
      correct: 0,
      incorrect: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  } // end constructor

  handleClick(choice) {
    if (choice == this.state.dataSet[this.state.current].correct) {
      this.setState({ correct: this.state.correct + 1 });
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 });
    }

    if (this.state.current == 9) {
      this.setState({ current: 0 });
      this.setState({ incorrect: 0 });
      this.setState({ correct: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    }
  }

  render() {
    return (
      <center>
        <h2 style={{ margin: 20 }}>Assessment Test</h2>
        <Card style={{ margin: 20, padding: 20, width: "50%" }}>
          <ScoreArea
            correct={this.state.correct}
            incorrect={this.state.incorrect}
          />
          <QuizArea
            handleClick={this.handleClick}
            dataSet={this.state.dataSet[this.state.current]}
          />

          <button
            className="btn btn-default btn-secondary"
            style={{ margin: 10 }}
            onClick={() => window.location.replace("/profile")}
            type="button"
          >
            Submit Test
          </button>
        </Card>
      </center>
    );
  }
}

function Question(props) {
  var style = {
    color: "black",
    margin: "20",
  };
  return <h2 style={style}>{props.dataSet.question}</h2>;
}

function Answer(props) {
  return (
    <button
      className="btn btn-default btn-primary"
      style={{ margin: 10 }}
      onClick={() => props.handleClick(props.choice)}
    >
      {props.answer}
    </button>
  );
}

function AnswerList(props) {
  var answers = [];
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(
      <Answer
        choice={i}
        handleClick={props.handleClick}
        answer={props.dataSet.answers[i]}
      />
    );
  }
  return (
    <Grid item xs={12} sm={12} lg={12} md={12}>
      {answers}
    </Grid>
  );
}

function QuizArea(props) {
  return (
    <center>
      <Question dataSet={props.dataSet} />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ marginBottom: 20 }}
      >
        <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
      </Grid>
    </center>
  );
}

function TotalCorrect(props) {
  return (
    <h5 style={{ marginRight: 10, color: "green" }}>
      Correct: {props.correct}
    </h5>
  );
}

function TotalIncorrect(props) {
  return (
    <h5 style={{ marginRight: 10, color: "red" }}>
      Incorrect: {props.incorrect}
    </h5>
  );
}

function ScoreArea(props) {
  return (
    <center>
      <div style={{ display: "ruby", flex: 1, itemAlign: "center" }}>
        <TotalCorrect correct={props.correct} />
        <TotalIncorrect incorrect={props.incorrect} />
      </div>
    </center>
  );
}

export default Quiz;
