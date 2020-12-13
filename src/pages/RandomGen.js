import React, { useState, useCallback } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RandomPersons from "../components/RandomPersons";
import RandomCard from "../components/RandomCard";
import datas from "../com.json";
import axios from "axios";
import Alertbar from "../components/Alertbar";

const useStyle = makeStyles((theme) => ({
	aa: {
		[theme.breakpoints.down(480)]: { paddingLeft: 10, paddingRight: 10 },
		paddingLeft: 20,
		paddingRight: 20,
	},
}));
let alertMessage = "";
let alertType = "";
const App = () => {
	const [persons, setPersons] = useState([]);
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

	const handleAlertBar = (message, type) => {
		alertMessage = message;
		alertType = type;
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
				handleAlertBar("ยังไม่ได้รับผลการสุ่มรอบก่อนหน้า", "warning");
				return;
			}
		}
		handleSetPersons(ranran);
		if (useRandomORG) {
			axios
				.get(
					"https://www.random.org/integers/?num=1&min=0&max=" +
						(datas.length - 1) +
						"&col=1&base=10&format=plain&rnd=new"
				)
				.then((response) => {
					handleRemoveAndSetPersonFirstIndex(datas[response.data]);
					handleAlertBar("การสุ่มเสร็จสิ้น", "success");
				})
				.catch((error) => {
					setPersons((persons) => persons.slice(1, persons.length));
					handleAlertBar("การเชื่อมต่อกับ random.org ล้มเหลว", "error");
					console.error(error);
				});
		} else {
			handleRemoveAndSetPersonFirstIndex(datas[Math.floor(Math.random() * datas.length)]);
		}
		return;
	}
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
								<RandomCard
									onEventHandler={RandomAPI}
									onCheckboxHandler={handleSetUseRandomORG}
									useRandomORG={useRandomORG}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={12} md={8}>
						<RandomPersons persons={persons} filter={""} />
					</Grid>
				</Grid>
			</Grid>
			<Alertbar open={open} handleClose={handleClose} message={alertMessage} type={alertType} />
		</div>
	);
};

export default App;
