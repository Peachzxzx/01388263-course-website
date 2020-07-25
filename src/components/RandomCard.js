import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
	title: {
		fontSize: 14,
	},
});

const RandomCard = ({ onEventHandler, onCheckboxHandler, useRandomORG }) => {
	const classes = useStyles();
	return (
		<Card className={classes.title}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					01388263
				</Typography>
				<Typography variant="h5" component="h2">
					RandomGenerator
				</Typography>
				<Typography variant="body2" component="p">
					Wish me luck!
				</Typography>
			</CardContent>
			<CardActions style={{ justifyContent: "center" }}>
				<FormGroup row>
					<FormControlLabel
						control={
							<Checkbox checked={useRandomORG} onChange={onCheckboxHandler} name="useRandomORG" />
						}
						label="สุ่มจาก random.org"
					/>
				</FormGroup>
				<Button variant="contained" color="primary" size="large" onClick={onEventHandler}>
					Random
				</Button>
			</CardActions>
		</Card>
	);
};

export default React.memo(RandomCard);
