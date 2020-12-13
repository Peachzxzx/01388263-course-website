import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 250,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	expandIcon: { [theme.breakpoints.down(480)]: { paddingRight: 200 }, padding: 0 },
	grid: { paddingBottom: 0 },
}));

const PageNotFound = React.memo(() => {
	const classes = useStyles();
	return (
		<Card className={classes.root} style={{margin: "3vh"}}>
			<CardContent style={{ paddingBottom: 0, marginBottom: "24px" }}>
				<Typography variant="h5" component="h2">
					Error 404 - Page Not Found
				</Typography>
			</CardContent>
		</Card>
	);
});
export default PageNotFound;
