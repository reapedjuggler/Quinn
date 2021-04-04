import React, { useState, useEffect } from "react";
import CardData from "../CardData";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { pink, deepPurple } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";

const Month = ({ monthName, days, postData, monthNumber }) => {
	const [month, setMonth] = useState([]);
	const [givenDates, setGivenDates] = useState([]);

	console.log(postData, " Iam data to ensure in Month\n\n");

	const useStyles = makeStyles(theme => ({
		container: {
			display: "grid",
			gridTemplateColumns: "auto auto auto auto auto auto auto auto",
			gridTemplateRows: "auto auto auto auto",
		},

		root: {
			maxWidth: 345,
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
			backgroundColor: pink[500],
		},

		cardStyle: {
			display: "grid",
			width: "15vw",
			height: "20vw",
			border: "2px solid #bbbbbb",
			textAlign: "center"
		},

		image: {
			width: "10vw",
			height: "10vw",
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

	useEffect(() => {
		for (let i = 1; i <= 31; i++) {
			let s = "";

			if (i < 10) {
				s =
					"2020-" +
					(monthNumber < 10 ? "0" + monthNumber : monthNumber) +
					"-0" +
					i;
			} else {
				s =
					"2020-" +
					(monthNumber < 10 ? "0" + monthNumber : monthNumber) +
					"-" +
					i;
			}

			month.push(s);

		}
    
		postData.map((item) => {

			setGivenDates([...givenDates, ]);

		});

		// console.log(month, "Iam months array");
	});

	const handleClick = () => {
		console.log("Iam clicked\n");
	};

	const classes = useStyles();

	return (
		<div className={classes.container}>
			{/* If this date and month belongs to this month then a card with details otherwise a empty card */}

			{
				/*  month.map((item) => (


					monthData.map((item) => {

						item.calendardatetime.includes(item)

					})

                    )) */

				postData.map(item =>
					month.includes(item.calendardatetime.slice(0, 10)) ? (
						<div
							key={postData.id}
							onClick={handleClick}
							className={classes.cardStyle}
						>
							<CardData onClick={handleClick} key={postData.id} data={item} />
						</div>
					) : (
						// <button>
						// 	<div className={classes.cardStyle}>
						// 		<div className={classes.header}>
						// 			<div className={classes.title}>
						// 				{parseInt(
						// 					item.calendardatetime[8] + item.calendardatetime[9]
						// 				)}
						// 			</div>
						// 		</div>
						// 	</div>
						// </button>
						<div key={postData.id} className={classes.cardStyle}>
							<Card className={classes.border}>
								<div className={classes.header}>
									<div className={classes.title}>
										{parseInt(
											0
											// postData.calendardatetime[8] + postData.calendardatetime[9]
										)}
									</div>
								</div>
							</Card>
						</div>
					)
				)
			}
		</div>
	);
};

export default Month;
