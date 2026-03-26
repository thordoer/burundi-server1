import { useEffect, useState } from "react";
import styles from "./Apply.module.css";
import { useNavigate } from "react-router-dom";
function Apply({ client, myFuncs }) {
  //   const [success, setsuccess] = useState(false);
  const navigate = useNavigate();
  const { name, number, dob, loan, id } = client;
  const {
    // sendDetails,
    handleName,
    setincome,
    setnumber,
    setdob,
    setid,
    setloan,
  } = myFuncs;
  const [year, setYear] = useState("");
  const [month, setmonth] = useState("");
  const [datee, setdatee] = useState("");

  useEffect(() => {
    async function handledate() {
      const datesend = [year, month, datee];
      const dobsend = datesend.join("/");
      if (year === "" || month === "" || datee === "") {
        return;
      } else {
        setdob(dobsend);
      }
    }
    handledate();
  }, [year, month, datee]);

  function handleContinue() {
    if (
      name === "" ||
      number === "" ||
      // income === "" ||
      loan === "" ||
      id === "" ||
      dob === ""
    ) {
      console.log("continue");
      return;
    } else {
      //   setsuccess(true);
      navigate("/success");
      console.log("nav");
    }
  }

  function reset() {
    handleName("");
    setincome("");
    setnumber("");
    setdob("");
    setid("");
    setloan("");
  }

  const [empstatuse, setempstatuse] = useState("");
  const [loanType, setloanType] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.containe}>
        {/* <section className={styles.header}>
          <img src="/logo.jpeg" alt="zanaco logo" />
          <h1>zanaco loan</h1>
        </section> */}
        {/* <img src="icon.jpeg" alt="innns" className={styles.inbucksImage} /> */}
        <section className={styles.intro}>
          <h2>Gusaba inguzanyo mu minota mike</h2>
          <p className={styles.helpText}>
            Turagusavye wuzuze neza amakuru yose asabwa. Amakuru yose ni bigumye
            ari ibanga kandi bikoreshwa gusa mu gutanga inguzanyo no kugenzura.
          </p>
          <p className={styles.note}>
            <span>Bihambaye</span>: Utegerezwa kuba ufise nibura 10%
            vy’inguzanyo ufise ushaka muri konti yawe ya Lumipay.
          </p>
        </section>
        <section className={styles.dataFields}>
          <div>
            <label htmlFor="name">Izina ryuzuye*</label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => handleName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone"> Inomero ya telefone*</label>
            <input
              type="number"
              value={number}
              maxLength="10"
              placeholder="25761345678"
              onChange={(e) => setnumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Imeyili</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="id">Indangamuntu y'igihugu*</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setid(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Itariki y'amavuko*</label>
            <div className={styles.dob}>
              <input
                type="number"
                id="year"
                placeholder="YYYY"
                min="1900"
                max="2025"
                value={year}
                maxLength={4}
                className="no-spinner"
                onChange={(e) => setYear(e.target.value)}
              />
              <input
                type="number"
                id="month"
                placeholder="MM"
                min="1"
                max="12"
                maxLength={2}
                value={month}
                className="no-spinner"
                onChange={(e) => setmonth(e.target.value)}
              />
              <input
                type="number"
                id="day"
                placeholder="DD"
                min="1"
                className="no-spinner"
                max="31"
                value={datee}
                maxLength="2"
                onChange={(e) => setdatee(e.target.value)}
              />
            </div>
          </div>
          {/* <div>
            <label htmlFor="name">Residential Address*</label>
            <input type="text" placeholder="county/province" />
          </div> */}
          <div>
            <label>Ubuzima bw'akazi*</label>
            <select
              value={empstatuse}
              onChange={(e) => setempstatuse(e.target.value)}
            >
              {/* <option value="">Select Employment Status</option> */}
              <option value="selfemployed">Uwikorera</option>
              <option value="employed">Yakozwe</option>
              <option value="unemployed">Ubushomeri</option>
              <option value="student">Umunyeshure</option>
            </select>
          </div>

          <div>
            <label htmlFor="name">Amahera y'inguzanyo(BIF)*</label>
            <input
              type="number"
              className="no-spinner"
              placeholder="BIF 3,000,000 "
              value={loan}
              onChange={(e) => setloan(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="select"> kwishura*</label>
            <select
              value={loanType}
              onChange={(e) => setloanType(e.target.value)}
            >
              {/* <option value="">Repayment Period</option> */}
              <option value="selfemployed">amezi 6</option>
              <option value="employed">amezi 12 </option>
              <option value="unemployed"> amezi 18 </option>
              <option value="student">amezi 24 </option>
            </select>
          </div>
        </section>
        <section className={styles.footer}>
          <div className={styles.terms}>
            <input type="checkbox" required />
            <p>
              Ndemeza ko amakuru yatanzwe ari ukuri kandi nemera ko . Amategeko
              n’ingingo z’inguzanyo za Lumipay.
            </p>
          </div>
          <p>Ivyatsi vyerekanwa n'ikimenyetso * birakenewe.</p>
          <div className={styles.apllyBtn}>
            <button onClick={handleContinue}>Bandanya</button>
            <button onClick={reset} style={{ color: "black" }}>
              Gusubiramwo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Apply;
