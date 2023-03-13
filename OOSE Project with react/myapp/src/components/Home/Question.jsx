import React from "react";
import "../../assets/question.css";

const Question = () => {
  return (
    <div id="question">
      <div className="titleQuestions">Questions need your help</div>
      <div className="questionsContainer">
        <div className="questionBox">
          <div className="userBox">
            <div className="userAva">
              <img src="./img/ava/user1.jfif" alt="" />
            </div>
            <div className="userName">Kilary Kreithman</div>
            <div className="date">HOY 14:34</div>
          </div>
          <div className="contentBox">
            <p>
              Hola! El servicio que me has brindado con Huli ha sido bastante
              eficiente, encantado de todo el servicio y las prestaciones que me
              han dado. Saludos! 😄😄
            </p>
          </div>
        </div>
        <div className="questionBox">
          <div className="userBox">
            <div className="userAva">
              <img src="./img/ava/user2.jfif" alt="" />
            </div>
            <div className="userName">Haykel Gevara</div>
            <div className="date">HOY 14:34</div>
          </div>
          <div className="contentBox">
            <p>
              Genial! Sin duda del servicio brindado no me han surgido dudas y
              ahora me siento más seguro, el servicio ha sido impecable.{" "}
            </p>
          </div>
        </div>
        <div className="questionBox">
          <div className="userBox">
            <div className="userAva">
              <img src="./img/ava/user3.jfif" alt="" />
            </div>
            <div className="userName">Yenna Castro</div>
            <div className="date">HOY 14:34</div>
          </div>
          <div className="contentBox">
            <p>
              Se me ha pegado un poco la plataforma, sin embargo el servicio
              dado por los doctores ha sido bastante genial. Espero lean mis
              comentarios para optimizar la plataforma 🙂
            </p>
          </div>
        </div>
      </div>
      <div className="readMoreBox">
        <button className="readMorebtn">Read More</button>
      </div>
    </div>
  );
};

export default Question;
