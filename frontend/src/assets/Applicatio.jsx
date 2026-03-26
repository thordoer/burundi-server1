// LoanCalculator.jsx - Fixed version
import React, { useState, useEffect } from "react";
import "./LoanCalculator.css";
import { useNavigate } from "react-router-dom";

const LoanCalculator = () => {
  const navigate = useNavigate();

  function handleCals() {
    navigate("/apply");
  }

  const [loanAmount, setLoanAmount] = useState(5000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Interest rate based on term (example rates)
  const getInterestRate = (term) => {
    if (term <= 6) return 4.0;
    if (term <= 12) return 4.5;
    if (term <= 24) return 5.5;
    if (term <= 36) return 6.5;
    return 8.5;
  };

  // Calculate monthly payment - moved outside useEffect
  const calculatePayment = (amount, term) => {
    const monthlyRate = getInterestRate(term) / 100 / 12;
    const numerator = amount * monthlyRate * Math.pow(1 + monthlyRate, term);
    const denominator = Math.pow(1 + monthlyRate, term) - 1;

    if (denominator === 0 || !isFinite(numerator) || !isFinite(denominator)) {
      return 0;
    }

    const payment = numerator / denominator;
    return isFinite(payment) ? payment : 0;
  };

  // Handle initial calculation on mount
  useEffect(() => {
    const initialPayment = calculatePayment(loanAmount, loanTerm);
    setMonthlyPayment(initialPayment);
  }, []); // Empty dependency array - runs once on mount

  // Handle calculations when inputs change using useMemo instead
  const calculatedPayment = React.useMemo(() => {
    return calculatePayment(loanAmount, loanTerm);
  }, [loanAmount, loanTerm]);

  // Update payment only when it actually changes
  useEffect(() => {
    if (Math.abs(calculatedPayment - monthlyPayment) > 0.01) {
      setMonthlyPayment(calculatedPayment);
    }
  }, [calculatedPayment, monthlyPayment]);

  // Alternative: Handle with useCallback and manual calculation on change
  const handleLoanAmountChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 50000 && value <= 5000000) {
      setLoanAmount(value);
      // Calculate immediately instead of waiting for useEffect
      const newPayment = calculatePayment(value, loanTerm);
      setMonthlyPayment(newPayment);
    }
  };

  const handleTermChange = (term) => {
    setLoanTerm(term);
    // Calculate immediately instead of waiting for useEffect
    const newPayment = calculatePayment(loanAmount, term);
    setMonthlyPayment(newPayment);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BIF",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPayment = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BIF",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="loan-calculator-container">
      {/* Header Section */}
      <div className="calculator-header">
        <h1>
          Uronke inguzanyo yawe yemejwe <span className="fast-text">Vuba</span>
        </h1>
        <p className="subtitle">
          Kwemererwa vuba • Ibiciro bihiganwa • Amasezerano ahinduka
        </p>
      </div>

      <div className="calculator-content">
        {/* Left Column - Calculator */}
        <div className="calculator-section">
          <h2 className="section-title">Loan Calculator</h2>

          {/* Loan Amount Control */}
          <div className="calculator-control">
            <label className="control-label">Amahera y'inguzanyo</label>
            <div className="amount-display">{formatCurrency(loanAmount)}</div>
            <div className="slider-container">
              <input
                type="range"
                min="50000"
                max="500000"
                step="100"
                value={loanAmount}
                onChange={handleLoanAmountChange}
                className="amount-slider"
              />
              <div className="slider-labels">
                <span>BIF 50,000</span>
                <span>BIF 5,000,000</span>
              </div>
            </div>
          </div>

          {/* Loan Term Control */}
          <div className="calculator-control">
            <label className="control-label">Igihe c'ingurane</label>
            <div className="term-display">{loanTerm} amezi</div>
            <div className="term-buttons">
              {[6, 12, 24, 36, 48, 60].map((term) => (
                <button
                  key={term}
                  className={`term-button ${loanTerm === term ? "active" : ""}`}
                  onClick={() => handleTermChange(term)}
                >
                  {term} amezi
                </button>
              ))}
            </div>
          </div>

          {/* Monthly Payment Display */}
          <div className="payment-display">
            <div className="payment-label">Ukwezi kwishurwa</div>
            <div className="payment-amount">
              {formatPayment(monthlyPayment)}
            </div>
            <div className="interest-rate">
              Interest rate: {getInterestRate(loanTerm).toFixed(1)}% APR
            </div>
          </div>

          {/* Apply Now Button */}
          <button className="apply-button" onClick={handleCals}>
            SHIRAHO UBU
          </button>
        </div>

        {/* Right Column - Features */}
        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <div className="feature-content">
              <h3 className="feature-title">Kwemezwa vyihuta</h3>
              <p className="feature-desc">Mu masaha 24</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <div className="feature-content">
              <h3 className="feature-title">Ibiciro bito</h3>
              <p className="feature-desc">Kuva kuri 8%</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <div className="feature-content">
              <h3 className="feature-title">Umutekano</h3>
              <p className="feature-desc">Umutekano wo ku rwego rwa banki</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
