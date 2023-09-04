import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'


const Form = ({ data, setData, setDataFilter, addAlert }) => {

  const [dataContributor, setDataContributor] = useState({
    name: "",
    mail: "",
    age: "",
    position: "",
    phone: ""
  });

  const handleInputs = (e) => {
    const inputsId = {
      inputName: "name",
      inputEmail: "mail",
      inputAge: "age",
      inputPosition: "position",
      inputPhone: "phone",
    }

    const prop = inputsId[e.target.id]
    if (prop) {
      setDataContributor({ ...dataContributor, [prop]: e.target.value })
    }
  }

  const validarDatos = (e) => {
    e.preventDefault()
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const regexPhone = /^[0-9]{9}$/
    if (
      dataContributor.name.trim() === '' ||
      dataContributor.mail === '' ||
      dataContributor.age === '' ||
      dataContributor.position.trim() === '' ||
      dataContributor.phone === ''
    ) {
      addAlert({
        text: "Please fill out all mandatory fields.",
        color: "danger",
        state: true,
      });
    } else if (!regexEmail.test(dataContributor.mail)) {
      addAlert({
        text: "The email address you entered is not valid.",
        color: "warning",
        state: true,
      });
    } else if (!regexPhone.test(dataContributor.phone)) {
      addAlert({
        text: "Please enter a valid phone number.",
        color: "warning",
        state: true,
      });
    } else {

      const newId = Math.max(...data.map(item => parseInt(item.id, 10))) + 1;
      const newContributor = { id: newId.toString(), ...dataContributor };
      const newData = [...data, newContributor];
      setData(newData);
      setDataFilter(newData);
      addAlert({
        text: "Contributor added successfully",
        color: "primary",
        state: true,
      })
      setDataContributor({
        name: "",
        mail: "",
        age: "",
        position: "",
        phone: ""
      });
    }
  }

  return (
    <div>
      <h3>Add Contributor</h3>

      <form 
        onSubmit={(e) => validarDatos(e)}
        noValidate>
        <div className="mb-3">
          <input
            onChange={(e) => handleInputs(e)}
            value={dataContributor.name}
            type="name"
            className="form-control"
            id="inputName"
            placeholder="Name of the contributor"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={(e) => handleInputs(e)}
            value={dataContributor.mail}
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email of the contributor"
            pattern=".*"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={(e) => handleInputs(e)}
            value={dataContributor.age}
            type="number"
            className="form-control"
            id="inputAge"
            placeholder="Age of the contributor"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={(e) => handleInputs(e)}
            value={dataContributor.position}
            type="text"
            className="form-control"
            id="inputPosition"
            placeholder="Position of the contributor"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={(e) => handleInputs(e)}
            value={dataContributor.phone}
            type="text"
            className="form-control"
            id="inputPhone"
            placeholder="Phone of the contributor"
          />
        </div>

        <div className="d-grid mb-3">
          <button className="btn btn-primary" type="submit">Add contributor</button>
        </div>
      </form>
    </div>
  )
}

export default Form
