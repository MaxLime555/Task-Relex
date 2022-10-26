import React from "react";
import MyButton from "./UI/button/MyButton";

const TestItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.test.title}</strong>
                <div>
                    {props.test.body}
                </div>
                <div>
                    {props.test.answer}
                </div>
            </div>
            <div className="my__btns">
                    <MyButton>Включить</MyButton>
                    <MyButton>Выключить</MyButton>
                    <MyButton onClick = {() => props.remove(props.test)}>
                        Удалить
                    </MyButton>
            </div>
      </div>
    )
}

export default TestItem;