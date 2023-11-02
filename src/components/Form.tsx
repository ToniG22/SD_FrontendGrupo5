import { useState } from "react";

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
      <label>
        Local:
        <input
          type="text"
          name="local"
          value={inputs.local || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={inputs.date || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Time:
        <input
          type="text"
          name="time"
          value={inputs.time || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Number of Participants:
        <input
          type="text"
          name="participants"
          value={inputs.participants || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
