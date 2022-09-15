import React, { useState } from "react";

import { AddUser, UserList } from "./components/index";

function App() {
  const [enteredUser, setEnteredUser] = useState([]);
  const userTaker = (userName, userAge) => {
    setEnteredUser((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toFixed(4), name: userName, age: userAge },
      ];
    });
  };
  return (
    <div>
      <AddUser onUserHandler={userTaker} />
      <UserList users={enteredUser} />
    </div>
  );
}

export default App;
