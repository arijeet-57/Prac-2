import {atom, selector} from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 10
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 100
});

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});


export const totalSelector = selector({
    key: "totalSelector",
    get: ({get}) => { //gets all the calue from all the atoms
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount //will add and return the value
    }
})