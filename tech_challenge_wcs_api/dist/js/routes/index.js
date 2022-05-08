"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const candidates_1 = require("../controllers/candidates");
const router = (0, express_1.Router)();
// create application/json parser
const jsonParser = body_parser_1.default.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
router.get("/candidates", candidates_1.getCandidates);
router.post("/add-candidate", jsonParser, candidates_1.addCandidate);
router.put("/edit-candidate/:id", jsonParser, candidates_1.updateCandidate);
router.delete("/delete-candidate/:id", jsonParser, candidates_1.deleteCandidate);
exports.default = router;
