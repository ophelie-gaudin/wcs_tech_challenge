"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCandidate = exports.updateCandidate = exports.addCandidate = exports.getCandidates = void 0;
const candidate_1 = __importDefault(require("../../models/candidate"));
const getCandidates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const candidates = yield candidate_1.default.find();
        res.status(200).json({ candidates });
    }
    catch (error) {
        throw error;
    }
});
exports.getCandidates = getCandidates;
const addCandidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Ma requête:', req.body);
    try {
        const body = req.body;
        const candidate = new candidate_1.default({
            name: body.name,
        });
        const newCandidate = yield candidate.save();
        const allCandidates = yield candidate_1.default.find();
        res
            .status(201)
            .json({ message: "Candidate added", candidate: newCandidate, candidates: allCandidates });
    }
    catch (error) {
        throw error;
    }
});
exports.addCandidate = addCandidate;
const updateCandidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateCandidate = yield candidate_1.default.findByIdAndUpdate({ _id: id }, body);
        const allCandidates = yield candidate_1.default.find();
        res.status(200).json({
            message: "Candidate updated",
            candidate: updateCandidate,
            candidates: allCandidates,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateCandidate = updateCandidate;
const deleteCandidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCandidate = yield candidate_1.default.findByIdAndRemove(req.params.id);
        const allCandidates = yield candidate_1.default.find();
        res.status(200).json({
            message: "Candidate deleted",
            candidate: deletedCandidate,
            candidates: allCandidates,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteCandidate = deleteCandidate;
