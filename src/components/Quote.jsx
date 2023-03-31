import { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': '4BDcvnDPxCjqviGKh0ncTw==9wRXaNd8c69no4rR',
          },
        });
        const data = await res.json();
        setQuote(data[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuote, setIsLoading]);

  return (
    <div className="quote">
      {hasError && <div className="quote__error">Could not get quote!</div>}
      {isLoading && (
        <div className="quote__loading">Loading, please wait...</div>
      )}
      {!hasError && !isLoading && (
        <p>
          {quote.quote}
          <span className="quote__author">{` - ${quote.author}`}</span>
        </p>
      )}
    </div>
  );
};

export default Quote;
