import React from "react";
import { Card } from "../../index";

import "./UserList.scss";

const UserList = (props) => {
  return (
    <Card className="users">
      <div>
        <ul>
          {props.users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
