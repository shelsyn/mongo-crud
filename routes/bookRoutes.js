const { Router } = require("express");
const { getBooks, createBooks, deleteBooks, updateBooks } = require("../controllers/bookControllers")

const router = Router();
router.get("/get", getBooks);
router.post("/create", createBooks);
router.delete("/delete/:id", deleteBooks);
router.put("/update/:id", updateBooks);

module.exports = router;