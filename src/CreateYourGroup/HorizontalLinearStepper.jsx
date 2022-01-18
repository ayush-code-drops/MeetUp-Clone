import React,{useState} from "react";
import { makeStyles } from "@material-ui/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import {Link} from "react-router-dom"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 14px;
`;
const LogoCont = styled.div``;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  }
  // button: {
  //   // marginRight: theme.spacing(1)
  // },
  // instructions: {
  //   marginTop: theme.spacing(1),
  //   marginBottom: theme.spacing(1)
  // }
}));

function getSteps() {
  return [
    "Set your Group’Location",
    "Your group’s name be?",
    "Almost done! Just take a minute to review our guidelines"
  ];
}



export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const {location,setLocation} = useContext(AppContext);
  const {name, setName} = useContext(AppContext);
  // const [name2,setName2] = useState("");
  console.log("hi",name,location)
     

  
const handleChange = (e) => {
  setLocation(e.target.value);
}


const handleChange1 = (e) => {
  setName(e.target.value);
}

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div style={{ width: "70%", margin: "auto",textAlign:"left" }}>
            <h1>First, set your group’s location.</h1>
            <p>
              Meetup groups meet locally, in person and online. We'll connect you
              with people in your area, and more can join you online.
            </p>
            <p>Getting back out there is exciting, but it’s understandable to feel a bit nervous. Here’s how you can make the transition easier. Three Ways to Make Coworker Friendships While Working From Home
            Work friendships don’t need to fade just because you’re working remotely. Here are three fun ways you can get to know your colleagues. Reduce stress, improve your mood, and connect with others by pursuing your new artistic hobby through Meetup.</p>
            <div style={{display: 'flex',gap:"3rem"}}>
            <p>Choose Your Location : </p>
            <TextField
              id="outlined-basic"
              label="Choose Group location"
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          </div>
        );
      case 1:
         return (
          <div style={{ width: "70%", margin: "auto",textAlign:"left" }}>
            <h1>What will your group’s name be?</h1>
            <p>
              Choose a name that will give people a clear idea of what the group
              is about. Feel free to get creative! You can edit this later if you
              change your mind.
            </p>
            <p>Getting back out there is exciting, but it’s understandable to feel a bit nervous. Here’s how you can make the transition easier. Three Ways to Make Coworker Friendships While Working From Home
            Work friendships don’t need to fade just because you’re working remotely. Here are three fun ways you can get to know your colleagues. Reduce stress, improve your mood, and connect with others by pursuing your new artistic hobby through Meetup.</p>
           
            <div style={{display: 'flex',gap:"3rem"}}>
            <p>Your Group Name : </p>
            <TextField
              id="outlined-basic"
              label="Your Group name?"
              variant="outlined"
              onChange={handleChange1}
            />
          </div>
            
          </div>
        );
      case 2:
        return (
          <div style={{ width: "70%", margin: "auto",textAlign:"left" }}>
            <h1>Almost done! Just take a minute to review our guidelines</h1>
            <p>
              Meetup is all about helping people live fuller, happier lives—with
              the help of strong communities. This means that all groups should:
            </p>
            <ul>
              <li>Provide growth opportunities for members</li>
              <li>Encourage real human interactions in person or online</li>
              <li>Have a host present at all events</li>
              <li>Be transparent about the group’s intentions</li>
            </ul>
            <p>
              You can read more about all of this in our{" "}
              <strong>community guidelines.</strong>
            </p>
            <p>
              Once you submit your group, a human at Meetup will review it based
              on these guidelines and make sure it gets promoted to the right
              people.
            </p>
          </div>
        );
      default:
        return "Unknown step";
    }
  }






  // const history = React.useHistory();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
// history.push('./home')
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Nav>
        <LogoCont>
          <img src="./logo.svg" alt="logo-img" />
        </LogoCont>
        <LogoCont style={{marginRight:"30px",backgroundColor:"tomato",borderRadius:"10px",padding:"10px",color:"white"}}>
          Save and exit
        </LogoCont>
      </Nav>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography
              style={{ textAlign: "center", marginTop: "30px" }}
              className={classes.instructions}
            >
              All steps completed - you&apos;re finished. The Group is created.
              Go back to Home Page <Link to="/home">Back to Home</Link>
            </Typography>
            {/* <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button> */}
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div style={{display:"flex",justifyContent: "right",marginRight:"100px"}}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                  color="primary"
                  
                onClick={handleNext}
                style={{ textAlign: "right" }}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}