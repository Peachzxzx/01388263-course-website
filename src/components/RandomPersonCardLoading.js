import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, TextareaAutosize } from "@material-ui/core";
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

const LoadingCard = () => {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<Card className={classes.root}>
			<CardContent style={{ paddingBottom: 0, marginBottom: "24px" }}>
				<Grid container direction="row" justify="space-between">
					<Grid item>
						<Typography variant="h3" component="h2">
							00 - 00
						</Typography>

						{useMediaQuery(theme.breakpoints.up(480)) ? (
							<Typography variant="h5" component="h2">
								Loading...
							</Typography>
						) : (
							<div>
								<Typography variant="h5" component="h2">
									Loading...
								</Typography>
								<Typography variant="h5" component="h2">
									Loading...
								</Typography>
							</div>
						)}
						<Typography className={classes.pos} color="textSecondary">
							Loading...
							<br />
							Loading...
						</Typography>
					</Grid>
					<Grid item>
						<CardActions disableSpacing className={classes.expandIcon}>
							<IconButton aria-label="show more" style={{ padding: 0 }}>
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};
export default React.memo(LoadingCard);
