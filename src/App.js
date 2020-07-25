// TODO
// * Add more card info
// - Adjust useRandomOrg checkbox location
// - Add card page indicator
//
import React, { useState, useCallback } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import RandomPersons from "./components/RandomPersons";
import RandomCard from "./components/RandomCard";
import SearchBar from "./components/SearchBar";
import { red, green } from "@material-ui/core/colors";
import datas from "./com.json";
import axios from "axios";
import Alertbar from "./components/Alertbar";

const Theme = createMuiTheme({
	palette: {
		primary: red,
		secondary: green,
		background: {
			paper: "#F8FBFE",
		},
	},
});
const useStyle = makeStyles((theme) => ({
	aa: { [theme.breakpoints.down(480)]: { paddingLeft: 10, paddingRight: 10 }, paddingLeft: 20, paddingRight: 20 },
}));
var data = datas;
const App = () => {
    console.log("Re-render App.js")
	const [persons, setPersons] = useState(data);
	const [filterText, setFilterText] = useState("");
	const [useRandomORG, setUseRandomORG] = useState(true);
	const handleSetUseRandomORG = useCallback(() => {
		setUseRandomORG(!useRandomORG);
	}, [useRandomORG]);
	const handleSetPersons = useCallback(
		(randomPersonData) => setPersons((persons) => [randomPersonData, ...persons]),
		[]
	);
	const handleRemoveAndSetPersonFirstIndex = useCallback(
		(randomPersonData) =>
			setPersons((persons) => [randomPersonData, ...persons.slice(1, persons.length)]),
		[]
	);

	const [open, setOpen] = useState(false);
	const ranran = { random: true };
	const handleClick = () => {
		setOpen(true);
	};
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	function RandomAPI() {
		if (persons.length > 0) {
			if (persons[0].random === true) {
				// Warning notification
				handleClick();
				return;
			}
		}
		handleSetPersons(ranran);
		if (useRandomORG) {
			axios
				.get(
					"https://www.random.org/integers/?num=1&min=0&max=" +
						(data.length - 1) +
						"&col=1&base=10&format=plain&rnd=new"
				)
				.then((response) => handleRemoveAndSetPersonFirstIndex(data[response.data]))
				.catch((error) => {
					console.error(error);
				});
		} else {
			handleRemoveAndSetPersonFirstIndex(data[Math.floor(Math.random() * data.length)]);
		}
		return;
	}
	const aaaa = useStyle();
	return (
		<MuiThemeProvider theme={Theme}>
			<Grid container direction="column">
				<Grid
					container
					direction="row-reverse"
					spacing={4}
					alignItems="flex-start"
					style={{
						marginTop: 20,

						width: "calc(100%)",
						margin: 0,
					}}
					className={aaaa.aa}
				>
					<Grid item xs={12} sm={12} md={4}>
						<Grid container direction="column" spacing={2}>
							<Grid item key={"RandomCard"}>
								<RandomCard
									onEventHandler={RandomAPI}
									onCheckboxHandler={handleSetUseRandomORG}
									useRandomORG={useRandomORG}
								/>
							</Grid>
							{/* <Grid item key={"SearchBar"}>
								<SearchBar onEventHandler={setFilterText} />
							</Grid> */}
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={8}>
						<RandomPersons persons={persons} filter={filterText} />
					</Grid>
				</Grid>
			</Grid>
			<Alertbar open={open} handleClose={handleClose} />
		</MuiThemeProvider>
	);
};

export default App;
