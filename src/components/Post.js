import React, { useEffect, useState } from "react";
import { data } from "./PostData";
import { makeStyles } from "@material-ui/core/styles";
import { intialReq } from "./PostData";
import {yearData} from './PostData';
import {monthData} from './PostData';
import axios from "axios";
import CardData from "./CardData";
import Year from './Date/Year';
import Month from "./Date/Month";

const Post = () => {
	const [postData, setPostData] = useState([]);

	console.log(postData, yearData, monthData,"\n----------iam data\n");

	// console.log(intialReq, "\n----------iam intialReq\n");

	const useStyles = makeStyles(theme => ({

		container: {
			 display: "grid",
  			 gridTemplateColumns: "auto auto auto auto auto auto auto auto",
 			 gridTemplateRows: "auto auto auto auto"
		}

	}));

	const handleClick = () => {
		console.log("Clicked\n\n");
	};

	useEffect(async () => {
		const url = "http://devapi.quinn.care/graph";

		console.log("\nInside Call\n\n");

		const resp = await axios.post(url, intialReq);

		try {
			// console.log(
			// 	"\n\n",
			// 	resp?.data?.responseobjects[0].posts,
			// 	"\n----------iam Ressppppp\n\n"
			// );

			// console.log(postData, "\n----------iam data\n");
		} catch (err) {
			console.log(err.message, "\n---------------------\nI'm error\n\n");
		}

		setPostData(resp?.data?.responseobjects[0].posts);
	}, []);

	const classes = useStyles();

	return (
		<div className = {classes.container}>
			
			<Year postData = {postData} />
			
		</div>
	);
};

export default Post;

/* {postData.map(data => (
				<button key = {data} onClick={handleClick}>
				<CardData key={data.id} data={data} />
				</button>
			))} */

