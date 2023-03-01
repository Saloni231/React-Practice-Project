import { useState } from "react";
import AddUser from "./Components/User/AddUser/AddUser";
import DisplayUser from "./Components/User/DisplayUser/DisplayUser";

function App() {
  const [userList, setUserList] = useState([]);

  const updateUserList = (user) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        {
          username: user.username,
          age: user.age,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser addUser={updateUserList} />
      <DisplayUser users={userList} />
    </div>
  );
}

export default App;
