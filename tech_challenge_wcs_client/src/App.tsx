import React, { useEffect, useState } from "react";
import "./index.css";
import CandidateItem from "./components/CandidateItem";
import AddCandidate from "./components/AddCandidate";
import {
  getCandidates,
  addCandidate,
  // updateCandidate,
  deleteCandidate,
} from "./API";

const App: React.FC = () => {
  const [candidates, setCandidates] = useState<ICandidate[]>([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = (): void => {
    getCandidates()
      .then(({ data: { candidates } }: ICandidate[] | any) =>
        setCandidates(candidates)
      )
      .catch((err: Error) => console.log(err));
  };

  const handleSaveCandidate = (
    e: React.FormEvent,
    formData: ICandidate
  ): void => {
    e.preventDefault();
    addCandidate(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Candidate not saved");
        }
        setCandidates(data.candidates);
      })
      .catch((err) => console.log(err));
  };

  // const handleUpdateCandidate = (candidate: ICandidate): void => {
  //   updateCandidate(candidate)
  //     .then(({ status, data }) => {
  //       if (status !== 200) {
  //         throw new Error("Error! Candidate not updated");
  //       }
  //       setCandidates(data.candidates);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleDeleteCandidate = (_id: string): void => {
    deleteCandidate(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Candidate not deleted");
        }
        setCandidates(data.candidates);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* Header section */}
      <header>
        <h1>
          <img
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
          Les Argonautes
        </h1>
      </header>

      {/* <!-- Main section --> */}
      <main className="App">
        <h1>My Candidates</h1>

        {/* <!-- New member form --> */}
        <AddCandidate saveCandidate={handleSaveCandidate} />

        {/* <!-- Member list --> */}
        <h2>Membres de l'équipage</h2>
        <section className="member-list">
          {candidates.map((candidate: ICandidate) => (
            <CandidateItem
              key={candidate._id}
              // updateCandidate={handleUpdateCandidate}
              deleteCandidate={handleDeleteCandidate}
              candidate={candidate}
            />
          ))}
        </section>
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </>
  );
};

export default App;
