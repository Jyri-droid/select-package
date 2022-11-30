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
    if (props.scenario[1] !== "Ei valittu") {
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
    props.scenario[1] === "Ei valittu" && saved.push("Uusi säilytys avattu");
    // Add membership
    saved.push("Omistaja-asiakas: " + props.scenario[0]);
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
      <h1>Valitse sijoittajan palvelupaketti</h1>
      {props.scenario[1] !== "Ei valittu" ? (
        <Notification
          title="Voimassa oleva paketti"
          list={props.form.map((element) => element)}
        />
      ) : (
        <Notification title="Sinulle avataan säilytys kun avaat palvelupaketin" />
      )}
      <form onSubmit={handleSubmit}>
        <div className="box">
          <div className="column-one">
            <h2>Palvelupaketti</h2>
          </div>
          <div className="column-two">
            {props.scenario[0] === "Kyllä" ? (
              <TableMember />
            ) : (
              <TableNonMember />
            )}
          </div>
        </div>
        <div className="box">
          <div className="column-one">
            <h2>
              {props.scenario[1] === "Ei valittu"
                ? "Lisää veloitustili"
                : "Valitse veloitustili"}
            </h2>
          </div>
          <div className="column-two">
            {props.scenario[1] !== "Monta tiliä" ? (
              <Select
                name="Veloitustili"
                options={[
                  "Tili 0123456789",
                  "Tili 9876543210",
                  "Tili 5432109876"
                ]}
                onChange={accountChange}
              />
            ) : (
              <RadioButtonGroup
                texts={{
                  labels: [
                    "Säilytys 1 - Tili 0123456789",
                    "Säilytys 2 - Tili 9876543210"
                  ]
                }}
              ></RadioButtonGroup>
            )}
            {alert && (
              <p className="alert">Uusi veloitustili astuu voimaan kahden pankkipäivän kuluttua</p>
            )}
          </div>
        </div>
        <ButtonRow>
          <Submit text="Tilaa paketti" />
        </ButtonRow>
      </form>
    </>
  );
};

export default Form;
