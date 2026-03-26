import { useNavigate } from "react-router-dom";
import styles from "./Success.module.css";
import { useEffect, useRef, useState } from "react";

function Success({ name }) {
  const [count, setCount] = useState(4);
  const navigate = useNavigate();
  const intervalRef = useRef(null);
  useEffect(() => {
    if (count === 1) {
      navigate("/login");
    }
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [count]);
  return (
    <div className={styles.successcont}>
      <h1>
        Kuroranigwa! Urakoze cane🎉 <br /> {name}
      </h1>
      <p>Ibisobanuro vyawe vyashikirijwe neza.</p>
      <p>
        Ku ntambwe ikurikira, usabwa kwemeza amakuru yawe ya{" "}
        <b style={{ color: " rgb(15, 14, 97)" }}>Lumipay </b>{" "}
      </p>
      <span>Gusubira kuja kuri Lumipay... {count}</span>
    </div>
  );
}

export default Success;
