const express = require("express");
const router = new express.Router();
// import the collection
const empData = require("../models/emp");
const empController = require("../controllers/empController");

const multer = require("multer");

// upload files method
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".pdf");
    },
  }),
}).single("emp_file");

// Post method
router.post("/create", empController.empCreate);

// Get method
router.get("/list", empController.getEmpData);

// Delete API
router.delete("/deleteEmp/:_id", empController.deleteEmp);

// update API
router.put("/updateEmp/:_id", empController.updateEmp);

// Search with multiple field
router.get("/search/:key", empController.searchEmp),
  // upload files
  router.post("/upload", upload, empController.uploadFile);

module.exports = router;
