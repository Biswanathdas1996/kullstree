import React from "react";
import { Card, Grid } from "@mui/material";

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    var dataSet = [
      {
        question: "We should keep our savings with banks because",
        answers: [
          "It is safe",
          "Earns interest",
          "withdrawn anytime",
          "All of above",
        ],
        correct: 1,
      },
      {
        question: "Bank does not give loan against",
        answers: ["Gold Ornaments", "LIC policy", "Lottery ticket", "Apple"],
        correct: 3,
      },
      {
        question: "Bank having maximum number of branches in India",
        answers: ["RBI", "SBI", "PNB", "BOB"],
        correct: 3,
      },
      {
        question: "100/- Rupee note is signed by",
        answers: ["Prime Minister", "Finance Minister", "RBI Governor", "None"],
        correct: 2,
      },
      {
        question: "ATM password should be kept in",
        answers: [
          "Personal diary",
          "Office diary",
          "A Serial KillerMemory",
          "None",
        ],
        correct: 0,
      },
      {
        question: "Nomination can be done in",
        answers: ["Savings account", "Fixed account", "No account", "All"],
        correct: 3,
      },
      {
        question: "Minimum age required to open SB account in the bank",
        answers: ["8 years", "9 years", "18 years", "All "],
        correct: 4,
      },
      {
        question: "Highest denomination of currency notes issued by RBI is",
        answers: ["2000", "20000", "500", "1000"],
        correct: 0,
      },
      {
        question: "General Insurance relates to insurance against",
        answers: ["Fire", "Theft", "Burglary", "All"],
        correct: 3,
      },
      {
        question: "Bank provides loans for",
        answers: ["Home", "Car", "Education", "All"],
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
    if (choice === this.state.dataSet[this.state.current].correct) {
      this.setState({ correct: this.state.correct + 1 });
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 });
    }

    if (this.state.current === 9) {
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
