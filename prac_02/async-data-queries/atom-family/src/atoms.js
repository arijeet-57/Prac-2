import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todoAtomsFamily = atomFamily({
    key: "todoAtomsFamily",
    default: id => {
        return  TODOS.find(x => x.id === id)
    }
});