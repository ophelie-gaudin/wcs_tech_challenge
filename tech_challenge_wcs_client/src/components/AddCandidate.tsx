import React, { useState } from "react";

type Props = {
  saveCandidate: (e: React.FormEvent, formData: ICandidate | any) => void;
};

const AddCandidate: React.FC<Props> = ({ saveCandidate }) => {
  const [formData, setFormData] = useState<ICandidate | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <>
      <h2>Ajouter un(e) Argonaute</h2>

      <form
        className="Form new-member-form"
        onSubmit={(e) => saveCandidate(e, formData)}
      >
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input
          onChange={handleForm}
          type="text"
          id="name"
          placeholder="Charalampos"
        />
        <button disabled={formData === undefined ? true : false}>
          Envoyer
        </button>
      </form>
    </>
  );
};

export default AddCandidate;
