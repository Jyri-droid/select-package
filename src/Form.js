import Notification from "./Notification";
import Select from "./Select";
import TableNonMember from "./TableNonMember";
import TableMember from "./TableMember";
import RadioButtonGroup from "./RadioButtonGroup";
import ButtonRow from "./ButtonRow";
import Submit from "./Submit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  // Handle account alert
  const [alert, setAlert] = useState(false);
  // Handle input alert
  const accountChange = (event) => {
    if (props.scenario[1] !== "No account") {
      props.form.toString().includes(event.target.value)
        ? setAlert(false)
        : setAlert(true);
    }
  };
  // Save form data
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const saved = [];
    // Add deposit creation if user has no account
    props.scenario[1] === "No account" && saved.push("New deposit created");
    // Add membership
    saved.push("Membership: " + props.scenario[0]);
    // Add user selections
    for (const element of event.target) {
      switch (element.type) {
        case "checkbox":
          element.checked === true && saved.push(element.name);
          break;
        case "radio":
          element.checked === true &&
            saved.push(element.name + ": " + element.value);
          break;
        case "select-one":
          saved.push(element.name + ": " + element.value);
          break;
        default:
      }
    }
    props.setForm(saved);
    navigate("/success");
  };
  return (
    <>
      <h1>Select product package</h1>
      {props.scenario[1] !== "No account" ? (
        <Notification
          title="Your current package"
          list={props.form.map((element) => element)}
        />
      ) : (
        <Notification title="You will be created a deposit upon save" />
      )}
      <form onSubmit={handleSubmit}>
        <div className="box">
          <div className="column-one">
            <h2>Package</h2>
          </div>
          <div className="column-two">
            {props.scenario[0] === "Member" ? (
              <TableMember />
            ) : (
              <TableNonMember />
            )}
          </div>
        </div>
        <div className="box">
          <div className="column-one">
            <h2>
              {props.scenario[1] === "No account"
                ? "Add account"
                : "Select account"}
            </h2>
          </div>
          <div className="column-two">
            {props.scenario[1] !== "Multiple accounts" ? (
              <Select
                name="Account"
                options={[
                  "My account 0123456789",
                  "My account 9876543210",
                  "My account 5432109876"
                ]}
                onChange={accountChange}
              />
            ) : (
              <RadioButtonGroup
                texts={{
                  labels: [
                    "Deposit 1 – My account 0123456789",
                    "Deposit 2 –My account 9876543210"
                  ]
                }}
              ></RadioButtonGroup>
            )}
            {alert && (
              <p className="alert">Please note: change will take 2 days</p>
            )}
          </div>
        </div>
        <ButtonRow>
          <Submit text="Save" />
        </ButtonRow>
      </form>
    </>
  );
};

export default Form;
