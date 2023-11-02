import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, Column } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('0');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }

  const handleEquals = () => {
    let result;
    switch (operation) {
      case '+':
        result = Number(firstNumber) + Number(currentNumber);
        break;
      case '-':
        result = Number(firstNumber) - Number(currentNumber);
        break;
      case '*':
        result = Number(firstNumber) * Number(currentNumber);
        break;
      default:
        result = Number(firstNumber) / Number(currentNumber);
        break;
    }
    
      setCurrentNumber(String(result));
      setFirstNumber('0');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${number}`);
  }

  const handleSumNumbers = (number) => {
    if(firstNumber == '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    } else {
      setOperation('+');
      handleEquals();
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
          <Row>
            <Button label="C" onClick={handleOnClear}/>
            <Button label="*" onClick={() => setOperation('*')}/>
            <Button label="/" onClick={() => setOperation('/')}/>
            <Button label="-" onClick={() => setOperation('-')}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="+" onClick={handleSumNumbers}/>
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
