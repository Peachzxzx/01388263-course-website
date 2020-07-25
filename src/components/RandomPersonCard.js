import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid } from "@material-ui/core";

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
const Detail = React.memo(
	({ Person }) => {
		console.log("Re-render Detail");
		const classes = useStyles();
		return (
			<CardContent>
				<Typography>คณะ: {Person.facultyNameTh}</Typography>
				<Typography className={classes.pos} color="textSecondary">
					Faculty: {Person.facultyNameEn}
				</Typography>
				<Typography>ภาควิชา: {Person.deptNameTh}</Typography>
				<Typography className={classes.pos} color="textSecondary">
					Department: {Person.deptNameEn}
				</Typography>
				<Typography>สาขา: {Person.majorNameTh}</Typography>
				<Typography className={classes.pos} color="textSecondary">
					Major: {Person.majorNameEn}
				</Typography>
			</CardContent>
		);
	},
	(prev, next) => {
		return prev.studentCode === next.studentCode;
	}
);

const MainDetail = React.memo(
	({ Person }) => {
		console.log("Re-render MainDetail");
		const classes = useStyles();
		const theme = useTheme();
		return (
			<Grid item>
				<Typography variant="h3" component="h2">
					{Person.groupNumber + " - " + Person.numberInGroup}
				</Typography>

				{useMediaQuery(theme.breakpoints.up(480)) ? (
					<Typography variant="h5" component="h2">
						{Person.titleNameTh + Person.firstNameTh + " "}
						{Person.middleNameTh !== null && Person.middleNameTh + " "}
						{Person.lastNameTh}
					</Typography>
				) : (
					<div>
						<Typography variant="h5" component="h2">
							{Person.titleNameTh + Person.firstNameTh}
						</Typography>
						{Person.middleNameTh !== null && (
							<Typography variant="h5" component="h2">
								{Person.middleNameTh}
							</Typography>
						)}
						<Typography variant="h5" component="h2">
							{Person.lastNameTh}
						</Typography>
					</div>
				)}

				<Typography className={classes.pos} color="textSecondary">
					{Person.titleNameEn + " " + Person.firstNameEn + " "}
					{Person.middleNameEn !== null && Person.middleNameEn + " "} {Person.lastNameEn}
					<br />
					{Person.studentCode}
				</Typography>
			</Grid>
		);
	},
	(prev, next) => {
		return prev.studentCode === next.studentCode;
	}
);

const IconExpandedPart = ({ handleExpandClick, expanded }) => {
	const classes = useStyles();
	return (
		<Grid item>
			<CardActions disableSpacing className={classes.expandIcon}>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
					style={{ padding: 0 }}
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
		</Grid>
	);
};

const ExpandedPart = ({ Person, expanded }) => {
	return (
		<Collapse in={expanded} timeout="auto" unmountOnExit>
			<Detail Person={Person} />
		</Collapse>
	);
};
const PersonCard = React.memo(
	({ Person }) => {
		const classes = useStyles();
		const [expanded, setExpanded] = useState(false);
		const handleExpandClick = () => {
			setExpanded(!expanded);
		};
		console.log("Re-render SimpleCard");
		// function st() {
		// 	if (expanded === true) return { paddingBottom: 0, marginBottom: "0px" };
		// 	return { paddingBottom: 0, marginBottom: "24px" };
		// }
		return (
			<Card className={classes.root}>
				<CardContent style={{ paddingBottom: 0, marginBottom: "24px" }}>
					<Grid container direction="row" justify="space-between">
						<MainDetail Person={Person} />
						<IconExpandedPart handleExpandClick={handleExpandClick} expanded={expanded} />
					</Grid>
				</CardContent>
				<ExpandedPart Person={Person} expanded={expanded} />
			</Card>
		);
	},
	(prev, next) => {
		return prev.studentCode === next.studentCode;
	}
);
export default PersonCard;
