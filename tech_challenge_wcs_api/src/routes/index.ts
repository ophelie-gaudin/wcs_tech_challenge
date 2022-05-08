import { Router } from "express";
import bodyParser from "body-parser";
import {
  getCandidates,
  addCandidate,
  updateCandidate,
  deleteCandidate,
} from "../controllers/candidates";

const router: Router = Router();

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/candidates", getCandidates);

router.post("/add-candidate", jsonParser, addCandidate);

router.put("/edit-candidate/:id", jsonParser, updateCandidate);

router.delete("/delete-candidate/:id", jsonParser, deleteCandidate);

export default router;
