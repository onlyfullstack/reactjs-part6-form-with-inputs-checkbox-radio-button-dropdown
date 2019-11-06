import React from "react";
import "./style.css";

export default function Form() {
  const [state, setState] = React.useState({
    firstName: "Saurabh",
    lastName: "Oza",
    about: "",
    level: "masters",
    technology: "java",
    freelancing: false
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
    <div className="app">
      <form>
        <label>
          <div className="heading">First Name</div>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="heading">Last Name</div>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          <div className="heading">About</div>
          <textarea name="about" value={state.about} onChange={handleChange} />
        </label>
        <div>
          <div className="heading">Degree</div>
          <label>
            Bachelors
            <input
              type="radio"
              name="level"
              value="bachelors"
              checked={state.level === "bachelors"}
              onChange={handleChange}
            />
          </label>
          <label>
            Masters
            <input
              type="radio"
              name="level"
              value="masters"
              checked={state.level === "masters"}
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          <div className="heading">Technology</div>
          <select
            name="technology"
            onChange={handleChange}
            value={state.technology}
          >
            <option value="java">Java</option>
            <option value="dotnet">Dot Net</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
          </select>
        </label>
        <label>
          <div className="heading">Interested in Freelancing?</div>
          <input
            type="checkbox"
            name="freelancing"
            checked={state.freelancing}
            onChange={handleChange}
          />
        </label>
      </form>
      <pre>{JSON.stringify(state, null, 3)}</pre>
    </div>
  );
}
