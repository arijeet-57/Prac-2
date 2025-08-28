import axios from "axios";
import {atom, selector} from  "recoil";

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            await new Promise(r => setTimeout(r, 3000)) //sleeps for 3s
            const res = await axios.get("http://localhost:3000/notifications")
            return res.data 
            }
        })
    })

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.jobs + allNotifications.messages + allNotifications.notifications
    }
})