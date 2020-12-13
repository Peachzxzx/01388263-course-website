import React, { useCallback } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade("#FFFFFF", 0.2),
		"&:hover": {
			backgroundColor: fade("#FFFFFF", 0.3),
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));
let timeout = "";
const SearchBar = ({ onEventHandler }) => {
	const classes = useStyles();
	const handleChange = useCallback(
		(value) => {
			onEventHandler(value);
		},
		[onEventHandler]
	);
	return (
		<div className={classes.search}>
			<InputBase
				startAdornment={
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
				}
				placeholder="ค้นหา"
				classes={{
					input: classes.inputInput,
				}}
				style={{ width: "100%" }}
				inputProps={{ "aria-label": "search" }}
				onChange={function (event) {
                    let text = event.target.value;
                    clearTimeout(timeout);
					timeout = setTimeout(() => handleChange(text), 500);
				}}
			/>
		</div>
	);
};

export default React.memo(SearchBar);
