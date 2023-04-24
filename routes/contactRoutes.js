const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// router.use("/").get((req, res) => {
//   console.log(req);
//   res.status(200).json({ message: "contacts33 ..." });
// });

router.route("/").get(getContacts);
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
