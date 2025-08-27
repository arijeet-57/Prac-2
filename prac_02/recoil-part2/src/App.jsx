import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue,useRecoilState, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <NavBar/>
  </RecoilRoot>
  
}

function NavBar( ){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const [messagingkNotificationCount, setMessagingCount] = useRecoilState(messagingAtom);
  const notificationsCount = useSetRecoilState(notificationsAtom);
  
  //if we had to show the total number of all notifications count on the "ME" tab, how to do it? here is a way using selectors
  const totalCount = useRecoilValue(totalSelector);

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNotificationCount})</button>
      <button>Jobs ({jobsNotificationCount >= 99 ? "99+" : jobsNotificationCount} )</button>
      <button>Messaging ({messagingkNotificationCount})</button>
      <button>Notifications ({notificationsCount})</button>

      <button onClick={() => {
        setMessagingCount(c => c+1)
      }}>Me ({totalCount})</button>
    </>
  )
}
export default App
