import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('0');
  const [result, setResult] = useState('0');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setResult('0');
  }

  const handleEquals = () => {
    switch (operation) {
      case '+':
        setResult(Number(firstNumber) + Number(currentNumber));
        break;
      case '-':
        setResult(Number(firstNumber) - Number(currentNumber));
        break;
      case '*':
        setResult(Number(firstNumber) * Number(currentNumber));
        break;
      default:
        setResult(Number(firstNumber) / Number(currentNumber));
        break;
    }
    
      // setCurrentNumber(String(result));
      // setFirstNumber('0');
      // setOperation('');
      // setResult('0');
  }

  const handleAddNumber = (number) => {
    if(result !== '0') {
      handleOnClear();
      setCurrentNumber(`${number}`);
    } else {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
    }
  }

  const handleOperation = (op) => {
    setOperation(op);

    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');

    } else if(result !== '0') {
      setFirstNumber(result);
      setCurrentNumber('0');
      setResult('0');
    }
  }

  return (
    <Container>
      <Content>
        <h2>FIR:{firstNumber}</h2>
        <h2>OPE:{operation}</h2>
        <h2>CUR:{currentNumber}</h2>
        <hr/>
        <h2>RES:{result}</h2>
        <Input value={currentNumber} />
          <Row>
            <Button label="C" onClick={handleOnClear}/>
            <Button label="*" onClick={() => handleOperation('*')}/>
            <Button label="/" onClick={() => handleOperation('/')}/>
            <Button label="-" onClick={() => handleOperation('-')}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="+" onClick={() => handleOperation('+')}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
