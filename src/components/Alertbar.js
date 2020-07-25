import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Alertbar = ({ open, handleClose }) => {
	console.log("Re-render Alert");
	return (
		<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
			<Alert onClose={handleClose} severity="info">
				{"ยังไม่ได้รับผลการสุ่มรอบก่อนหน้า"}
			</Alert>
		</Snackbar>
	);
};

export default React.memo(Alertbar, (prev, next) => {
	return prev.open === next.open;
});
