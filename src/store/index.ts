import { create } from "zustand";

interface Ids {
  admissionId?: string;
  financeId?: string;
  hostelId?: string;
  aluminiId?: string;
  examId?: string;
  libraryId?: string;
  eventId?: string;
  iqacId?: string;
}

export interface State {
  insName?: string;
  name?: string;
  id?: string;
  color?: string | null;
  status?: boolean;
  ids: Ids;
  qid?: string;
  rndId?: string;
  naacId?: string;
  setInsName: (insName: string) => void;
  setName: (name: string) => void;
  setId: (id: string) => void;
  setColor: (color: string) => void;
  setStatus: (status: boolean) => void;
  setIds: (ids: Ids) => void;
  setQid: (qid: string) => void;
  setRndId: (rndId: string) => void;
  setNaacId: (naacId: string) => void;
}

export const useStore = create<State>((set) => ({
  insName: undefined,
  name: undefined,
  id: "",
  // id: "651ba22de39dbdf817dd520c",
  // id: "660bd1c7d5016c9947aef713",
  // rs sapat
  // id: "667ac2be2b6329957435b217",
  // pvg
  // id: "6660214803ff919dc4b26877",
  // nes/
  // id: "65c48434896ca745f41b7381",

  color: undefined,
  status: undefined,
  qid: undefined,
  rndId: undefined,
  ids: {
    admissionId: undefined,
    financeId: undefined,
    hostelId: undefined,
    aluminiId: undefined,
    examId: undefined,
    libraryId: undefined,
    eventId: undefined,
    iqacId: undefined,
  },

  setInsName: (insName) => set({ insName }),
  setName: (name) => set({ name }),
  setId: (id) => set({ id }),
  setColor: (color) => set({ color }),
  setStatus: (status) => set({ status }),
  setIds: (ids) => set((state) => ({ ...state, ids })),
  setQid: (qid) => set({ qid }),
  setRndId: (rndId) => set({ rndId }),
  setNaacId: (naacId) => set({ naacId }),
}));
