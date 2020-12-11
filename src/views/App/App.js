import { useState, useEffect } from 'react';

import Form from './AppForm';

import Cryptr from 'cryptr';

const SECRET_KEY = '5GEDXtjHvVKUDQwHJnjLne9R8FhfT8basCkqKKRng3DMmmFdhcjebXSvsUBfP2mNWyJjkCTyKvxVkNf8Gy6gUWJm8UDdYsQLy2E2Ge9DwDZ5bL9pMUeGKW52aJaazZZ5';

function AppContainer() {
  const [activeTab, setActiveTab] = useState('Encrypt');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  // console.log('App.js | RENDER');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const [secretKey, textValue] = [...document.forms['form'].elements].map((e) => e.value);

      setLoading(true);
      if (textValue.trim()) {
        const cryptr = new Cryptr(secretKey || SECRET_KEY);

        // Execute function of cryptr depending on what is the activeTab
        const encryptedString = await cryptr[activeTab.toLowerCase()](textValue);

        setResult(encryptedString);
      } else {
        setResult('Please fill out all fields. . .');
      }
    } catch (err) {
      setResult('Unable to authenticate data. . .');
    }

    setLoading(false);
  };

  useEffect(() => {
    document.forms['form'].elements[1].value = '';
    setResult('');
  }, [activeTab]);

  function handleKeyDown(e) {
    if (e.keyCode === 9 && !e.shiftKey) {
      // tab was pressed but not holding shift key
      e.preventDefault();
      // console.log(e);
      // get caret position/selection
      const { selectionStart, selectionEnd, value } = e.target;

      // set textarea value to: text before caret + tab + text after caret
      e.target.value = value.substring(0, selectionStart) + '\t' + value.substring(selectionEnd);

      // put caret at right position again
      e.target.selectionStart = e.target.selectionEnd = selectionStart + 1;

      // prevent the focus lose
      return false;
    }
  }

  return (
    <Form
      tabState={[activeTab, setActiveTab]}
      handleSubmit={handleSubmit}
      handleKeyDown={handleKeyDown}
      result={result}
      loading={loading}
      secretKey={SECRET_KEY}
    />
  );
}

export default AppContainer;
