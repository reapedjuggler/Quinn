let data = [];
let yearData = [];

let monthData = [

	["January", 1, 31],
	["February", 2, 28],
	["March", 3, 31],
	["April", 4, 30],
	["May", 5, 31],
	["June", 6, 30],
	["July", 7, 31],
	["August", 8, 31],
	["September", 9, 30],
	["October", 10, 31],
	["November", 11, 30],
	["December", 12, 31],
];

let intialReq = {
	requestobjects: [
		{
			posts: {
				operationtype: "read",
				id: {
					return: true,
				},
				userid: {
					searchvalues: ["41329663-5834-11eb-8e6e-3ca82abc3dd4"],
					return: true,
				},
				iscalendarentry: {
					searchvalues: ["true"],
					return: true,
				},
				media: {
					return: true, //contains image url
				},
				rating: {
					return: true,
				},
				text: {
					return: true,
				},
				privacy: {
					searchvalues: [18],
					return: true,
				},
				typeofday: {
					return: true,
				},

				// Don't change anything above ^^
				//editable variables start below //

				calendardatetime: {
					// Date Time of a particular post
					return: true, // please note: there can be multiple posts on a single day
					sort: "ascending", // you can sort fetched dates by ascending/descending.
				},
				maxitemcount: "50", //you can ask between 1 to 50 posts (max) at a time.
				continuationtoken: null, //replace with the continuation token from response to get the next set
			},
		},
	],
};

for (let i = 0; i < 28; i++) {
	data.push({ date: i + 1, name: "Hello" });
}

for (let i = 2021 - 20; i <= 2021 + 20; i++) {
	yearData.push(i);
}

module.exports = {
	data,
	intialReq,
	monthData,
	yearData,
};
