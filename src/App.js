import { useState } from "react";
import styles from "./App.module.css";
import Footer from "./Footer";

function App() {
  
  const [prepared, setPrepared] = useState();

  function handlePrepare(event){
    event.preventDefault();

    const result = event.target.text.value.replace(/['"]/g, '');
    setPrepared(result)
  }

  return (
    <>
      <form className={styles.container} onSubmit={handlePrepare}>
        <h1>Preperror</h1>
        <p>
          Paste an error message in the box below to remove any ' or " marks, to
          allow easier searching
        </p>
        <textarea name="text"/>
        <br />
        <button type="submit">Prepare</button>
        <p>{prepared}</p>
      </form>
      <Footer />
    </>
  );
}

export default App;
