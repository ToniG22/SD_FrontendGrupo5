import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/Form.css";

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
        Date:
        <DatePicker
          selected={inputs.date}
          onChange={(date) => handleDateChange(date, "date")}
          dateFormat="dd/MM/yyyy"
        />
      </label>
      <label>
        Time: <br/>
        <input
          type="time"
          name="time"
          value={inputs.time}
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
