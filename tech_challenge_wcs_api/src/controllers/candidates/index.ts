import { Response, Request } from "express"
import { ICandidate } from "./../../types/candidate"
import Candidate from "../../models/candidate"

const getCandidates = async (req: Request, res: Response): Promise<void> => {
  try {
    const candidates: ICandidate[] = await Candidate.find()
    res.status(200).json({ candidates })
  } catch (error) {
    throw error
  }
}


const addCandidate = async (req: Request, res: Response): Promise<void> => {
console.log('Ma requête:', req.body);

try {
    const body = req.body as Pick<ICandidate, "name" >

    const candidate: ICandidate = new Candidate({
      name: body.name,
    })

    const newCandidate: ICandidate = await candidate.save()
    const allCandidates: ICandidate[] = await Candidate.find()

    res
      .status(201)
      .json({ message: "Candidate added", candidate: newCandidate, candidates: allCandidates })
  } catch (error) {
    throw error
  }
}

const updateCandidate = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateCandidate: ICandidate | null = await Candidate.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allCandidates: ICandidate[] = await Candidate.find()
    res.status(200).json({
      message: "Candidate updated",
      candidate: updateCandidate,
      candidates: allCandidates,
    })
  } catch (error) {
    throw error
  }
}

const deleteCandidate = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedCandidate: ICandidate | null = await Candidate.findByIdAndRemove(
      req.params.id
    )
    const allCandidates: ICandidate[] = await Candidate.find()
    res.status(200).json({
      message: "Candidate deleted",
      candidate: deletedCandidate,
      candidates: allCandidates,
    })
  } catch (error) {
    throw error
  }
}

export { getCandidates, addCandidate, updateCandidate, deleteCandidate }