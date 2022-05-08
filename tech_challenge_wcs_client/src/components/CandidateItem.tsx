import React from "react";

type Props = CandidateProps & {
  updateCandidate?: (candidate: ICandidate) => void;
  deleteCandidate: (_id: string) => void;
};

const Candidate: React.FC<Props> = ({
  candidate,
  // updateCandidate,
  deleteCandidate,
}) => {
  return (
    <div className="member-item">
      <p className="candidate-name">{candidate.name}</p>
      <button
        onClick={() => deleteCandidate(candidate._id)}
        className="delete-btn"
      >
        x
      </button>
    </div>
  );
};

export default Candidate;
