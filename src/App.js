import React, { useState } from "react";
import "./App.css";
import Acomp from "./Acomp";
import Comp from "./Comp";

function App() {
  const [toDos, settoDos] = useState([]);
  const [toDo, settoDo] = useState([]);
  const [donetoDo, setdonetoDo] = useState([]);
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var n = weekday[d.getDay()];
  return (
    <section>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's {n} 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input
            value={toDo}
            onChange={(e) => settoDo(e.target.value)}
            type="text"
            placeholder="🖊️ Add item..."
          />
          <i
            onClick={() => {
              settoDos([
                ...toDos,
                { id: Date.now(), text: toDo, status: false },
              ]);
              settoDo([]);
            }}
            className="fas fa-plus"
          ></i>
        </div>
        <div className="todos">
          {toDos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    onClick={(e) => {
                      console.log(e.target.checked);
                      console.log(obj);
                      settoDos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                            return obj2;
                          }
                          return obj2;
                        })
                      );
                    }}
                    checked={obj.status}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i
                    onClick={() => {
                      console.log(obj);
                      settoDos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            if (obj2.status === true) {
                              setdonetoDo([...donetoDo, obj2]);
                              console.log("donetoDo");
                            }
                            obj2 = null;
                            return obj2;
                          }
                          return obj2;
                        })
                      );
                    }}
                    className="fas fa-times"
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Comp data={toDos} />
      <Acomp data={donetoDo} />
    </section>
  );
}

export default App;
