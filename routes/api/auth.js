const express = require("express");

const ctrl = require("../../controllers/auth")

const { validateBody, authenticate, upload } = require('../../middlewares');

const { schemas } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");
const { updateSubscribeSchema } = require("../../schemas/contacts")

const router = express.Router();


router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);
router.patch(
  "/",
  authenticate,
  validateBody(updateSubscribeSchema),
  ctrl.changeSubscription,
);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar); 

module.exports = router;         