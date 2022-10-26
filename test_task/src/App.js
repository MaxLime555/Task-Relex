import React, { useState, useEffect } from "react";
import Login from "./components/UI/login/Login";
import TestForm from "./components/TestForm";
import TestList from "./components/TestList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import  "./styles/App.css"

function App(){
  const [tests, setTests] = useState('')
  const [modal, setModal] = useState(false)
  const [logs, setLogs] = useState(true)

  const createTest = (newTest) => {
    setTests([...tests, newTest])
    setModal(false)
  }
  
  useEffect(() => {
    setLogs(JSON.parse(window.localStorage.getItem('logs')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('logs', logs);
  }, [logs]);  

  const removeTest = (test) => {
    setTests(tests.filter(t => t.id !== test.id))
  }

  return (
          <div className="App">
              <Login vis={logs} setVis={setLogs}/>
              <div className="buttons">
                <MyButton onClick = {() => setModal(true)}>
                  Создать пользователя
                </MyButton>
                <MyButton onClick = {() => setLogs(true)}>
                  Выйти
                </MyButton>
              </div>
              <MyModal visible={modal} setVisible={setModal}>
                <TestForm create={createTest}/>
              </MyModal>
              {tests.length
                ?
              <TestList remove={removeTest} tests = {tests} title = {'Тест'}/>
                : 
              <h1 className="title__page">Тесты не найдены!</h1>
              }
          </div>
)
}

export default App;
