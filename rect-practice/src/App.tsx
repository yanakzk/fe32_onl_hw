import React from "react";
import styles from "./App.module.css";
import Button, { ButtonTypes } from "./components/Button";
import UserName from "./components/UserName";
const App = () => {
  return (
    <div className={styles.container}>
      <Button
        title={"Primary"}
        type={ButtonTypes.Primary}
        onClick={() => alert("primary")}
        disabled
      />
      <Button
        title={"Secondary"}
        type={ButtonTypes.Secondary}
        onClick={() => alert("secondary")}
        disabled
      />
      <Button
        title={"Error"}
        type={ButtonTypes.Error}
        onClick={() => alert("error")}
        disabled
      />

      <UserName username={"Artem_Malkin"} />
    </div>
  );
};

export default App;
