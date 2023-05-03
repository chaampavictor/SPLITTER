import { useState,useEffect } from "react";
import logo from "./assets/logo.svg"
import Form from './components/Form'
import Display from './components/Display'


function App() {
  const [amount, setAmount] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(amount > 0 && people > 0 && tip > 0){
      setCalculatedTip(amount * (tip / 100));
      setTotal(calculatedTip + amount)
    }
  }, [amount, people, tip, calculatedTip])

  const handleResetBtn = (e) => {
    setAmount("");
    setTip("");
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
  }

  return (
    <div className="wrapper">
      <img src={logo} alt="Splitter Logo" />
      <div className="container">
        <Form
          amount={amount}
          setAmount={setAmount}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
        <Display
          total={total}
          people={people}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
        />
      </div>
    </div>
  )
}

export default App;
