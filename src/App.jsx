import * as React from "react";
import "./App.css";
import {
  Typography,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/styles";
import MainButton from "./components/MainButton";
import AppBar from "./components/AppBar";
import DonateButton from "./components/DonateButton"
import { useState } from "react";




function App() {


  const [click, setClick] = useState("")
  const [lastClick, setLastClick] = useState("")
  var [intervals, setIntervals] = useState([]);


  function clickMonitor(event) {
    setLastClick(click)
    setClick(window.performance.now());
    let interval = click - lastClick;
    let bpm = (60000 / (click - lastClick))
    console.log("the bpm is: " + bpm + "the interval is: " + interval);

  }

 
  /*

  - pegar tempo do click atual em ms 

onClick={(e) => {console.log(e)}

  */
  





  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />

        <AppBar position="relative">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">CONTADOR DE BPM</Typography>
           <DonateButton>DONATE</DonateButton>
           
          
          </Toolbar>
        </AppBar>
        <div>

          
          <Grid
            container
            direction="column"
            justify="center"
            align="center"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <MainButton className="button1" onMouseDown={(e) => clickMonitor(e)}>BPM COUNTER</MainButton>
            </Grid>
            <Grid item>
              <Typography variant="h5">155 BPM</Typography>
            </Grid>
          </Grid>
        </div>S

        <Container
          justify="center"
          align="center"
          alignItems="center"
          justifyContent="center"
          marginTop="5rem"
        >
          <h1>BPM Counter by Weird Technologies</h1>
        </Container>
        <script>
          
        </script>
      </>
    </ThemeProvider>
    
  );
}

export default App;





