const express = require("express");
const { isAuthenticateUser } = require("../middleware/auth");
const {
  addBio,
  getBio,
  followUser,
  unfollowUser,
} = require("../controllers/userDetailsController");

const router = express.Router();

router.route("/addBio").post(isAuthenticateUser, addBio);
router.route("/getBio").get(isAuthenticateUser, getBio);
router.route("/followUser").post(isAuthenticateUser, followUser);
router.route("/unFollowUser").post(isAuthenticateUser, unfollowUser);

module.exports = router;
