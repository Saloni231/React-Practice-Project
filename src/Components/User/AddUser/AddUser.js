import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import styles from "./AddUser.module.css";
import Button from "../../UI/Button/Button";
import ErrorModel from "../../UI/ErrorModel/ErrorModel";

const AddUser = (props) => {
  const input = {
    username: "",
    age: "",
  };

  const [userInput, setUserInput] = useState(input);
  const [error, setError] = useState();

  const inputChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        messages: "Please Enter a valid name and age",
      });
      return;
    }
    if (+userInput.age < 1) {
      setError({
        title: "Invalid Input",
        messages: "Please Enter a valid age(> 0).",
      });
      return;
    }
    props.addUser(userInput);
    setUserInput(input);
  };

  const errorHander = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.messages}
          onCancel={errorHander}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userInput.username}
            onChange={inputChange}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userInput.age}
            onChange={inputChange}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
