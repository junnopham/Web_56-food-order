const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const FacebookTokenStrategy = require("passport-facebook-token");

const routes = require("./routes");
const { notFoundMiddleware } = require("./middlewares/error.middleware");

module.exports = class App {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.port = process.env.PORT || 5000;
    this.production = process.env.NODE_ENV == "production";
    this.version = process.env.API_VERSION || "v1";

    this.connectDatabase();
    this.initMiddleware();
    this.initPassport();
    this.setRoutes();
    this.initErrorMiddleware();
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server is listening on port ${this.port}`);
    });
  }

  connectDatabase() {
    const connectStr = process.env.MONGODB_URL;

    if (!connectStr) {
      console.log("Invalid connection string");
      return;
    }

    mongoose.connection.on("connected", () => {
      console.log("Connection Established");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("Connection Reestablished");
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Connection Disconnected");
    });

    mongoose.connection.on("close", () => {
      console.log("Connection Closed");
    });

    mongoose.connection.on("error", (error) => {
      console.error("Error: " + error);
    });

    mongoose
      .connect(connectStr, { useUnifiedTopology: true, useNewUrlParser: true })
      .catch((error) => console.log(error.message));
  }

  initMiddleware() {
    if (this.production) {
      this.app.use(morgan("combined"));
      this.app.use(cors({ origin: "junnopham.xyz", credentials: true }));
    } else {
      this.app.use(morgan("dev"));
      this.app.use(cors({ origin: true, credentials: true }));
    }

    this.app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

    this.app.use(bodyParser.json());

    this.app.use(cookieParser());
  }

  initErrorMiddleware() {
    //this.app.use(errorMiddleware);
    this.app.use(notFoundMiddleware);
  }

  initPassport() {
    this.app.use(passport.initialize());
    //this.app.use(passport.session());

    passport.use(
      new FacebookTokenStrategy(
        {
          clientID: process.env.FACEBOOK_APP_ID || "",
          clientSecret: process.env.FACEBOOK_APP_SECRET || "",
          profileFields: ["id", "displayName", "photos"],
          fbGraphVersion: "v12.0",
        },
        function (accessToken, refreshToken, profile, done) {
          try {
            const { name, id } = profile._json;

            done(null, {
              id,
              name,
              token: accessToken,
            });
          } catch (error) {
            done(error, null);
            return;
          }
        }
      )
    );
  }

  setRoutes() {
    routes.forEach((router) => this.app.use(`/api/${this.version}`, router));
  }
};
