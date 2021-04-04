import React from "react";
import Month from "./Month";
import { yearData } from "../PostData";
import { monthData } from "../PostData";

const Year = ({ postData }) => {
	const temp = new Date("April 2, 2021");

	// console.log(temp.getDay(), " Iam the day");

	return (
		<div>
			{monthData.map(item => (
				<Month
					name={item[0]}
					monthNumber={item[1]}
					days={item[2]}
					postData={postData}
				/>
			))}
			{/* <Month name = {'Jan'} monthNumber = {11} days = {31} postData = {postData} /> */}
		</div>
	);
};

export default Year;
