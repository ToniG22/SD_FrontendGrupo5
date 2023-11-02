import { useState } from "react";
import "../assets/css/Form.css";

const Form = () => {
  const [inputs, setInputs] = useState({
    local: "",
    date: "",
    time: "",
    participants: "",
  });

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>Insert Values</div>
      <label>
        Local: <br/>
        <input
          type="text"
          name="local"
          value={inputs.local || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Date: <br/>
        <input
          type="date"
          name="date"
          value={inputs.date || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Time: <br/>
        <input
          type="text"
          name="time"
          value={inputs.time || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Number of Participants: <br/>
        <input
          type="text"
          name="participants"
          value={inputs.participants || ""}
          onChange={handleChange}
        />
      </label> <br/>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
