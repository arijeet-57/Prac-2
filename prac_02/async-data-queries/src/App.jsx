import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { notifications, totalNotificationSelector } from "./atoms"

function App() {
    return <RecoilRoot>
      <NavBar />
    </RecoilRoot>
}

export default App

function NavBar() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotifications = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>

      <button>Jobs ({networkCount.jobs})</button>
      <button>Messages ({networkCount.messages})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotifications})</button>
    </div>
  )
}