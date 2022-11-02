import React, {useState, useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {requestForToken,onMessageListener} from './firebase';

const App = () => {
  const [isTokenFound, setTokenFound] = useState(false);  

  const [notification, setNotification] = useState({title: '', body: ''});
  const notify = () =>  toast(<ToastDisplay/>);
  function ToastDisplay() {
    return (
      <div>
        <p><b>{notification?.title}</b></p>
        <p>{notification?.body}</p>
      </div>
    );
  };

  useEffect(() => {
    if (notification?.title ){
     notify()
    }
  }, [notification])
  useEffect(()=>{
    function exec(){
      requestForToken(setTokenFound);
    }
    exec();
  },[])

// navigator.serviceWorker.addEventListener("message", (payload) => {
//   console.log(payload.data.notification)
//   setNotification({title: payload?.data?.notification?.title, body:  payload?.data?.notification?.body });})
  onMessageListener()
    .then((payload) => {
      console.log("payload", payload);
      setNotification({title: payload?.notification?.title, body:  payload?.notification?.body });     
    })
    .catch((err) => console.log('failed: ', err));

  return (
    <div>

     <Toaster/>
      {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>

}
        {!isTokenFound && 
        <h1> Need notification permission ❗️</h1> 
}
    </div>
  )
}

export default App