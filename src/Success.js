import Notification from "./Notification";
import ButtonRow from "./ButtonRow";
import Submit from "./Submit";
import { useNavigate } from "react-router-dom";

const Success = (props) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // Prevent form from clearing
    event.preventDefault();
    // Go back to start
    navigate("/");
  };
  return (
    <>
      <h1>Select product package</h1>
      <Notification
        success
        title="Antamasi tiedot on tallennettu"
        list={props.form}
      />
      <form onSubmit={handleSubmit}>
        <ButtonRow>
          <Submit text="Aloita alusta" />
        </ButtonRow>
      </form>
    </>
  );
};
export default Success;
