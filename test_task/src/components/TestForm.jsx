import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const TestForm = ({create}) => {
    const [test, setTest] = useState({title: '', body: '', answer: ''})

    const addNewTest = (e) => {
        e.preventDefault()
        const newTest = {
            ...test, id: Date.now()
        }
        create(newTest)
        setTest({title: '', body: '', answer: ''})
      }

    return(
        <form>
            <MyInput 
                value={test.title}
                onChange={e => setTest({...test, title: e.target.value})}
                type="text"  
                placeholder="Название теста"
            />
            <MyInput 
                value={test.body}
                onChange={e => setTest({...test, body: e.target.value})}
                 type="text" 
                placeholder="Введите вопрос"
             />
            <MyInput 
                value={test.answer}
                onChange={e => setTest({...test, answer: e.target.value})}
                type="text" 
                placeholder="Введите варианты ответа"
            />
            <MyButton onClick={addNewTest}>Создать тест</MyButton>
      </form>
    )
}

export default TestForm;