import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [inputs, setInputs] = useState({
    local: "",
    date: new Date(),
    time: "",
    participants: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleDateChange = (date: Date | null, field: "date" | "time") => {
    if (date) {
      setInputs((values) => ({ ...values, [field]: date }));
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
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
        <DatePicker
          selected={inputs.date}
          onChange={(date) => handleDateChange(date, "date")}
          dateFormat="dd/MM/yyyy"
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          name="time"
          value={inputs.time}
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
