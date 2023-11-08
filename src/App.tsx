import './styles/App.css'
import AppButton from "./components/AppButton.tsx";
import Quotes from "./quotes.ts";
import {useState} from "react";
import _ from 'lodash'
import Quote from "./def/quote.ts";

const App = () => {
  const [quote, setQuote] = useState<Quote>();

  const buttonClickHandler = () => {
    const randomIndex = _.random(Quotes.length - 1);
    const randomQuote = Quotes[randomIndex];
    setQuote(randomQuote);
  };

  return (
    <div className='app-container'>
      <AppButton value='get quote' onClick={buttonClickHandler}/>
      {_.isNil(quote) ? <></> :
        <>
          <p>{quote?.value}</p>
          <b>{quote?.author}</b>
          <p>{quote?.authorInfo}</p>
        </>
      }
    </div>
  );
}

export default App;
