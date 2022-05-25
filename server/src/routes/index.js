const authRoute = require("./auth.route");
const foodRoute = require("./food.route");
const reviewRoute = require("./review.route");

const routes = [authRoute, foodRoute, reviewRoute];

module.exports = routes;
