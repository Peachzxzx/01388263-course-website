// TODO
// - Adjust useRandomOrg checkbox location
// - Add card page indicator
//
import React from "react";
import RandomGen from "./pages/RandomGen";
import Homepage from "./pages/Homepage";
import StudentList from "./pages/StudentList";
import PageNotFound from "./pages/PageNotFound";
import MyCalendar from "./pages/MyCalendar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
// import Ngan from "./pages/Ngan";
const Theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: "#9ccc65",
    },
    background: {
      paper: "#F8FBFE",
    },
  },
});
const App = () => {
  return (
    <MuiThemeProvider theme={Theme}>
      <Router basename="~b6110500241/01388263">
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route path="/randomGen" render={() => <RandomGen />} />
          <Route path="/studentList" render={() => <StudentList />} />
          <Route path="/calendar" render={() => <MyCalendar />} />
          <Route
            path="/video19"
            render={() => (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/pJfekK-caPU"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  allowfullscreen="allowfullscreen"
                  style={{
                    marginTop: "3%",
                    width: "95%",
                    height: "80%",
                  }}
                ></iframe>
              </div>
            )}
          />
          {/* <Route path="/ngan" render={() => <Ngan />} /> */}
          <Route component={() => <PageNotFound />} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};
export default App;
