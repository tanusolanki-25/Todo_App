import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className="text-center mt-3">
      <p className={styles.welcomeText}>✨ Enjoy Your Day</p>
    </div>
  );
}

export default Welcome;