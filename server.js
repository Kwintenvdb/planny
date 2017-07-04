let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.listen(3001, () => {
	console.log("Listening on port 3001.");
});

app.get("/", (req, res) => {
	res.send("Hello");
});

let guests = [
	{
		id: 0,
		name: "Berry"
	},
	{
		id: 1,
		name: "Pretzi"
	}
];

app.get("/guests", (req, res) => {
	res.json(guests);
});