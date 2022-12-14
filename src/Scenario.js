import RadioButtonGroup from "./RadioButtonGroup";
import Submit from "./Submit";
import { useNavigate } from "react-router-dom";

const Scenario = (props) => {
  // Radio button group texts
  const texts = {
    membership: {
      title: "Omistaja-asiakas",
      labels: ["Kyllä", "Ei"]
    },
    account: {
      title: "Veloitustili",
      labels: ["Ei valittu", "Yksi tili", "Monta tiliä"]
    }
  };
  // Handle form submit
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // Prevent form from clearing
    event.preventDefault();
    // Set scenario
    const saved = [];
    for (const element of event.target) {
      element.type === "radio" &&
        element.checked === true &&
        saved.push(element.value);
    }
    props.setScenario(saved);
    // If user has account, set default notification
    let account = "";
    saved[1] === "Yksi tili"
      ? (account = "Tili 0123456789")
      : (account = "Deposit 1 – Account 0123456789");
    props.setForm(["Omistaja-asiakas: " + saved[0], account]);
    console.log(saved);
    // Navigate to Form page
    navigate("/form");
  };

  return (
    <>
      <h1>Lähtötilanne</h1>
      <form onSubmit={handleSubmit}>
        <div className="box">
          <div className="column-one">
            <RadioButtonGroup texts={texts.membership} />
          </div>
          <div className="column-two">
            <RadioButtonGroup texts={texts.account} />
          </div>
        </div>
        <Submit text="Aloita" />
      </form>
    </>
  );
};

export default Scenario;
