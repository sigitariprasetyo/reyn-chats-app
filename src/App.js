import React, { useEffect } from 'react';
import { ChatEngine, NewMessageForm } from 'react-chat-engine';
import Login from './login';

import "./App.css"

export function App() {

  if (!localStorage.getItem('username')) return <Login />

  return (
    <ChatEngine
      height='99vh'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      projectID='181f8f81-7c91-4c2a-924f-3d60a2afe10e'
    />
  );
}

export default App