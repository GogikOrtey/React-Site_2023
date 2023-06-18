import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Content() {
  return(
    <>
      <Head/>
      <B_4/>
    </>
  )
}

// Комментарии внутри return не работают. Почему?

root.render(<Content />)

function Head() {
  const [text, setText] = React.useState("ru");

  // Активирует переводчик с русского языка, на голубиный
  const handleSpanClick = () => {
    if(text[0] != 'u') {
      setText(prevText => "u" + prevText);
    } else {
      setText(prevText => prevText + "ru")
    }
  }

  return (
    <div className="header">
      <span className="span_01" onClick={handleSpanClick}>{text}</span>
    </div>
  )
}

function B_4() {
  return (
    <div className='B_4_div'>
      <div className='inside_01'>
        <p className='title_p'>Хотите заказать цветы прямо сейчас?</p>
        <p className='title_p'>Запоните анкету, и мы привезём их в течении часа!</p>
        <RenderInputElAndButton/>
      </div>
    </div>
  )
}

let elemList = ["Герои Войны и Мира", "Странные цветочки", "Экзотическая краса", "Сигналы Вселенной", "Скажи это цветами", "Ароматный хоровод", "Цветные мозаики", "По волшебному саду", "Мысленный ландшафт", "Рок-н-ролльные кустарники", "Грандиозный спектакль", "Шумный флорал"]

function RenderInputElAndButton() {
  function validateName(name) {
    console.log("name = " + name)
    if(name != "") {
      const pattern = /^[a-zA-Zа-яА-Я]+ [a-zA-Zа-яА-Я]+ [a-zA-Zа-яА-Я]+$/;
      if (pattern.test(name)) {
        return true;
      } else {
        return false;
      }
    } else return false;
  }

  function validateEmail(email) {
    console.log("email = " + email)
    if(email != "") {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (pattern.test(email)) {
        return true;
      } else {
        return false;
      }
    } else return false;
  }

  function validateTlf(Tlf) {
    console.log("Tlf = " + Tlf)
    if(Tlf != "") {
      const pattern = /^(\+7|8)[0-9]{10}$/;
      if (pattern.test(Tlf)) {
        return true;
      } else {
        return false;
      }
    } else return false;
  }

  function OnClickForButton() {
    if(isValidName == false) {
      setError("Ошибка, вы неверно заполнили поле 'ФИО'!");
    } else if(isValidEmail == false) {
      setError("Ошибка, вы неверно указали свой email!");
    } else if(isValidTlf == false) {
      setError("Ошибка, вы неверно указали свой номер мобильного телефона!");
    } else if(isValidStr == false) {
      setError("Ошибка, вы не выбрали верный букет!");
    } else {
      setError("Заказ на букет успешно отправлен!");
      setendAnk(true);
    }
  }

  const [name, setName] = React.useState('');
  const [isValidName, setIsValidName] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [isValidEmail, setIsValidEmail] = React.useState(false);

  const [tlf, setTlf] = React.useState('');
  const [isValidTlf, setIsValidTlf] = React.useState(false);

  const [isValidStr, setIsValidStr] = React.useState(false);

  const [errText, setError] = React.useState("");
  const [endAnk, setendAnk] = React.useState(false);
  
  function handleInputChange(event) {
    const newName = event.target.value;
    const isValidName = validateName(newName);
    
    setName(newName);
    setIsValidName(isValidName);
  }

  function handleInputChangeEmail(event) {
    const newEmail = event.target.value;
    const isValidEmail = validateEmail(newEmail);
    
    setEmail(newEmail);
    setIsValidEmail(isValidEmail);
  }

  function handleInputChangeTlf(event) {
    const newTlf = event.target.value;
    const isValidTlf = validateTlf(newTlf);
    
    setTlf(newTlf);
    setIsValidTlf(isValidTlf);
  }

  function checkIfOptionExists(elemList, inputText) {
    return elemList.includes(inputText);
  }

  function handleInputChangeElem(event) {
    const newStr = event.target.value;
    const isValidStr = checkIfOptionExists(elemList, newStr);

    setIsValidStr(isValidStr);
  }

  return (
    <>
      {!endAnk && (
        <div className='container'>
          <div className='leftEdge'>
            <p>Ваше ФИО:</p>
            <p>Ваш email:</p>
            <p>Ваше номер телефона:</p>
            <p>Какой букет заказываете:</p>
          </div>
          <div className='rightEdge'>
            <p><input value={name} onChange={handleInputChange}/></p>
            <p><input value={email} onChange={handleInputChangeEmail}/></p>
            <p><input value={tlf} onChange={handleInputChangeTlf}/></p>
            <p>
            <input type='text' list='myList' className='selectInput' onChange={handleInputChangeElem} autoComplete='off' />
              <datalist id='myList'>
              {elemList.map((item, index) => (
              <option key={index} value={item} />
              ))}
            </datalist>
            </p>
          </div>
        </div>
      )}

      <div className='errText'>
        <p>{errText}</p>
      </div>

      {!endAnk && (
        <div >
          <div className='floop_01'></div>
          <button className='complButt' onClick={OnClickForButton}>Отправить</button>
        </div>
      )}
    </>
  );
}


























function block123() { // ????????
  return(
    <div>
      <span>1234</span>
    </div>
  )
}