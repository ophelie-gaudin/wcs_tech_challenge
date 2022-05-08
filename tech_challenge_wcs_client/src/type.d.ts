interface ICandidate {
  _id: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

interface CandidateProps {
  candidate: ICandidate;
}

type ApiDataType = {
  message: string;
  status: string;
  candidates: ICandidate[];
  candidate?: ICandidate;
};
