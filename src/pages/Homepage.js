import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";

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

const Homepage = React.memo((props) => {
	const classes = useStyles();
    const { history } = props;
    const goTo = (url) => {
        history.push(url)
    }
	return (
		<Grid container item style={{ justifyContent: "center" }}>
			<Card className={classes.root} style={{ margin: "3vh", maxWidth: "600px", width: "80vw" }}>
				<CardContent style={{ paddingBottom: 0, marginBottom: "24px" }}>
					<Typography color="textSecondary" gutterBottom>
						01388263
					</Typography>
					<Typography variant="h5" component="h2">
                        {"Ethics & Life"}
					</Typography>
				</CardContent>
				<CardActions style={{ justifyContent: "center", flexDirection: "column" }}>
					<Button
						variant="contained"
						color="secondary"
                        size="large"
						href="#/randomGen"
						style={{ margin: "1vh" }}
					>
						Random Generator
					</Button>
					<Button
						variant="contained"
						color="secondary"
						size="large"
						href="#/studentList"
						style={{ margin: "1vh" }}
					>
						Student List
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
});
export default withRouter(Homepage);
