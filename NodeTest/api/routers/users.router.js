const router = require("express").Router();
const { authUser} = require("../utils");

const {
  getUserById,
  deleteUserById,
  updateUser,
  getFavoriteMeter,
  createFavoriteMeter,
  updateFavoriteMeter,
} = require("../controllers/users.controllers");

router.get("/profile", authUser, getUserById);
router.put("/profile",authUser, updateUser);
router.delete("/profile", authUser, deleteUserById);
router.get("/favorite", authUser, getFavoriteMeter);
router.patch("/favorite/add", authUser, createFavoriteMeter);
router.patch("/favorite/remove", authUser, updateFavoriteMeter);
module.exports = router;