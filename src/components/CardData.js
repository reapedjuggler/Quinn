import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Rating } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";
import { pink, deepPurple } from "@material-ui/core/colors";

// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import lgCodes from "./PostData";

let lgCodes = new Map();
lgCodes.set("hair cut", "Cu");
lgCodes.set("hair color", "HC");
lgCodes.set("deep conditioning", "DC");
lgCodes.set("clarifying", "C");
lgCodes.set("protein treatment", "Pr");

const StyledRating = withStyles({
	iconFilled: {
		color: "lightblue",
	},
})(Rating);

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 0,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
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
	avatar: {
		backgroundColor: red[500],
	},

	image: {
		width: "10vw",
		height: "15vw",
	},

	cardStyle: {
		display: "grid",
		width: "15vw",
		transitionDuration: "0.3s",
		height: "20vw",
		// border: '1px solid #bbbbbb',
	},

	border: {
		border: "1px solid #bbbbbb",
		textAlign: "center",
		padding: "10px",
	},
	justifyCenter: {
		display: "flex",
		justifyContent: "center",
		// width: "80%",
		// gap: '1px',
		textAlign: "center",
	},
	lightpink: {
		color: theme.palette.getContrastText(pink[500]),
		backgroundColor: pink[500],
	},
	lightblue: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
}));

const CardData = ({ data }) => {
	const classes = useStyles();

	return (
		<Card className={classes.border}>
			<div className={classes.header}>
				<div >
					{parseInt(data.calendardatetime[8] + data.calendardatetime[9])}
				</div>
				{/* {   }}}  */}
				<StyledRating
					name="hover-feedback"
					value={data.rating}
					precision={1}
					// onChange={(event, newValue) => {
					// 	setValue(newValue);
					// }}
					// onChangeActive={(event, newHover) => {
					// 	setHover(newHover);
					// }}
				/>
				<div>
					<img className={classes.image} src={data.media[0].mediaurl}></img>
				</div>
				<div className={classes.justifyCenter}>
					{data.typeofday.map(item =>
						lgCodes.get(item) === "Cu" ||
						lgCodes.get(item) === "HC" ||
						lgCodes.get(item) === "C" ? (
							<Avatar
								key={item}
								style={{ height: "30px", width: "30px" }}
								className={classes.lightpink}
							>
								{lgCodes.get(item)}
							</Avatar>
						) : (
							// </div>
							// <div>
							<Avatar
								key={item}
								style={{ height: "30px", width: "30px" }}
								className={classes.lightblue}
							>
								{lgCodes.get(item)}
							</Avatar>
							// </div>
						)
					)}
				</div>
			</div>
		</Card>
	);
};

export default CardData;
