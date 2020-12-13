import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	title: {
		fontSize: 14,
	},
});

const MyRes = () => {
	const classes = useStyles();
	return (
		<Card className={classes.title}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					01388263
				</Typography>
				<Typography variant="h5" component="h2">
					Student List
				</Typography>
				<Typography variant="body2" component="p">
					Where am I?!
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MyRes;
