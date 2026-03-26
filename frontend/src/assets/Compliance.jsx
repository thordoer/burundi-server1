import styles from "./Compliance.module.css";

function Compliance({ client }) {
  const { name, loan, number } = client;
  const percent = (loan * 0.1).toFixed(2);
  //   const now = new Date();
  const today = new Date().toISOString().split("T")[0];
  return (
    <div className={styles.containee}>
      <div className={styles.container}>
        <header>
          <h1>
            Ubushobozi bwa konti & <br /> gukurikiza amategeko
          </h1>
          <div className={styles.clientDetsils}>
            <p>Izina ry'uwusaba:</p>
            <h2>{name} </h2>
            <p>Inomero ya telefone:</p>
            <h2>{number} </h2>
            <p>Uko ubusabe bumeze:</p>
            <h3>BIRARINDIRIYE</h3>
            <p>Itariki yo gusaba:</p>
            <h2>{today}</h2>
          </div>

          <div className={styles.congrtulations}>
            <h1>Urakoze cane {name}</h1>
            <p>
              Ushobora guhabwa inguzanyo ya BIF{loan}, 10% y’agashimwe karimwo.
            </p>
            <p>
              Igitigiri cawe c'inguzanyo ca 720 kiguha uburenganzira bwo guhabwa
              amasezerano yongerewe.
            </p>
            <div>
              <span>720</span>
              <p>amanota y'inguzanyo</p>
            </div>
          </div>
          <div className={styles.compliance}>
            <h1>Itangazo ryo kwubahiriza</h1>
            <p>
              Konti yawe ya InnBucks itegerezwa kuba ikora kandi ikabungabunga
              umutekano . n’imiburiburi USD {percent}. Iyi deposit ni iyo gutuma
              . konti yemerewe guhabwa inguzanyo, kandi iragufasha gukingira
              neza inyungu z’amahera.
            </p>
          </div>
          <footer className={styles.footer}>
            <p>Ubwanyuma bwavuguruwe: 2026-12-1 </p>
          </footer>
        </header>
      </div>
    </div>
  );
}

export default Compliance;
