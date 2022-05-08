import { ICandidate } from "./../types/candidate"
import { model, Schema } from "mongoose"

const candidateSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  { timestamps: true }
  }
)

export default model<ICandidate>("Candidate", candidateSchema)