import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RandomPersons from "../components/RandomPersons";
import SearchBar from "../components/SearchBar";
import persons from "../com.json";
import Alertbar from "../components/Alertbar";
import MyRes from "../components/MyRes";

const useStyle = makeStyles((theme) => ({
	aa: {
		[theme.breakpoints.down(480)]: { paddingLeft: 10, paddingRight: 10 },
		paddingLeft: 20,
		paddingRight: 20,
	},
}));
let alertMessage = "";
let alertType = "";

const StudentList = () => {
	const [filterText, setFilterText] = useState("");
	const [open, setOpen] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	const aaaa = useStyle();
	return (
		<div>
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
								<MyRes />
							</Grid>
							<Grid item key={"SearchBar"}>
								<SearchBar onEventHandler={setFilterText} />
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={8}>
						<RandomPersons persons={persons} filter={filterText} />
					</Grid>
				</Grid>
			</Grid>
			<Alertbar open={open} handleClose={handleClose} message={alertMessage} type={alertType} />
		</div>
	);
};

export default StudentList;
