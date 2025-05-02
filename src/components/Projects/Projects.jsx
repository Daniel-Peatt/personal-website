import styles from "./Projects.module.css";

// Images
import fluxImg from "../../assets/flux.png";

function Project(props) {
  return (
    <>
      <div
        className={styles.project}
        style={{ backgroundColor: props.backgroundColor, color: props.color }}
      >
        <h1>{props.title}</h1>
        <img src={props.img} />
        <p>{props.description}</p>
        <h2>Click For Link</h2>
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <div className={styles.container}>
      <Project
        title={"flux"}
        img={fluxImg}
        description={
          "Unleash your potential with a platform designed to empower you to create, track, and conquer your personal goals and challenges."
        }
        backgroundColor={"rgba(73, 68, 45, 0.938)"}
        color={"#EAE2C6"}
      />
    </div>
  );
}
