import { Api } from "../ApiContext";
import { ApiException } from "../ApiException";

export interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;
}

const  getAll = async (): Promise<ITarefa[] | ApiException> => {
  try {
    const {data} = await Api().get('/tarefas');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar 'todas' API.");
  }
};
const getById = async (id: number): Promise<ITarefa | ApiException> => {
  try {
    const {data} = await Api().get(`/tarefa/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar API.");
  }
};
const create = async (dataToCreate: Omit<ITarefa, "id">): Promise<ITarefa | ApiException> => {
  try {
    const {data} = await Api().post<any>('/tarefas', dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao criar o registro.");
  }
};
const updateById = async (id: string, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => {
  try {
    const {data} = await Api().put<any>(`/tarefas${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao atualizar o registro.");
  }
};
const deleteById = async (id: string): Promise<undefined | ApiException> => {
  try {
    const {data} = await Api().get(`/tarefas${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao apagar o registro.");
  }
};

export const TarefasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};