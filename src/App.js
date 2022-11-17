import styles from "./App.module.css";
import Footer from "./Footer";

function App() {
  var result;

  return (
    <>
      <div className={styles.container}>
        <h1>Preperror</h1>
        <p>
          Paste an error message in the box below to remove any ' or " marks, to
          allow easier searching
        </p>
        <textarea />
        <br />
        <button>Prepare</button>
        <p>{result}</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
