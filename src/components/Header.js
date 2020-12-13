import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class Header extends Component {
	render() {
		return (
			<AppBar position="static" style={{ backgroundColor: "grey" }}>
				<Toolbar style={{ justifyContent: "space-between" }}>
					<Typography variant="h6" component="h3" display="inline">
						เทคนิคการรักตัวเอง
					</Typography>
					<Typography variant="h6" component="h3" display="inline">
						19-06 พีรวิชญ์ พฤทธเมธวิสุทธิ์
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
