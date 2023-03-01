import React from "react";
import styles from "./DisplayUser.module.css";
import Card from "../../UI/Card/Card";

const DisplayUser = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default DisplayUser;
