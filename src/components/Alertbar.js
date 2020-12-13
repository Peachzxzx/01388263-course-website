import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Alertbar = ({ open, handleClose, message, type }) => {
	return (
		<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
			<Alert onClose={handleClose} severity={type}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default React.memo(Alertbar, (prev, next) => {
	return prev.open === next.open;
});
