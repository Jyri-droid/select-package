import "./select-package/styles.css";
import Scenario from "./select-package/Scenario";
import Form from "./select-package/Form";
import Success from "./select-package/Success";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // User scenario state
  const [scenario, setScenario] = useState(["Not a member", "No account"]);
  // Form state
  const [form, setForm] = useState(null);

  return (
    <Router>
      <div className="App">
        <h1>test</h1><Routes>
          <Route
            exact
            path="/"
            element={
              <Scenario
                scenario={scenario}
                setScenario={setScenario}
                setForm={setForm}
              />
            }
          ></Route>
          <Route
            exact
            path="/form"
            element={<Form form={form} setForm={setForm} scenario={scenario} />}
          ></Route>
          <Route
            exact
            path="/success"
            element={<Success form={form} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
// The FORKED ONE
