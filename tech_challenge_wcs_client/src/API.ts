import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const getCandidates = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const candidates: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/candidates"
    );
    return candidates;
  } catch (error) {
    throw new Error(error as any);
  }
};

export const addCandidate = async (
  formData: ICandidate
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const candidate: Omit<ICandidate, "_id"> = {
      name: formData.name,
    };
    const saveCandidate: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-candidate",
      candidate
    );
    return saveCandidate;
  } catch (error) {
    throw new Error(error as any);
  }
};

//! Doesn't work
export const updateCandidate = async (
  candidate: ICandidate,
  formData: ICandidate
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const candidateUpdate: Pick<ICandidate, "name"> = {
      name: formData.name,
    };
    // const candidate: Omit<ICandidate, "_id"> = {
    //   name: ,
    // };
    const updatedCandidate: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit-candidate/${candidate._id}`,
      candidateUpdate
    );
    return updatedCandidate;
  } catch (error) {
    throw new Error(error as any);
  }
};

export const deleteCandidate = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedCandidate: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/delete-candidate/${_id}`
    );
    return deletedCandidate;
  } catch (error) {
    throw new Error(error as any);
  }
};
