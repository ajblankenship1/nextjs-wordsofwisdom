'use client'
import styles from '@/app/page.module.css';
import {useState} from 'react';
import QuoteBox from './components/quotebox/quoteBox';
import quotes from './data/quotes';





export default function Home() {
    const [selectedQuote, setSelectedQuote] = useState(0);
    const [addQuoteInput, setAddQuoteInput] = useState("");
    const[quotesList, setQuotesList] = useState(quotes);
    const [addAuthorInput, setAddAuthorInput] = useState("");
   

function handlePreviousClick(){
    
    if (selectedQuote === 0){
        setSelectedQuote((quotesList.length)-1);
    }else{
        setSelectedQuote(selectedQuote -1);
    }
    
}

function handleNextClick(){
    
    if (selectedQuote === (quotesList.length) - 1){
        setSelectedQuote(0) ;
    }else{
        setSelectedQuote(selectedQuote +1);
    }
}

function handleInputChange(event){
    setAddQuoteInput(event.target.value);
}

function handleAuthorChange(event){
    setAddAuthorInput(event.target.value);
    
}

function handleAddQuoteSubmit(){
    setQuotesList([...quotesList, {text:addQuoteInput, author:addAuthorInput, id:(quotesList.length)}]);
    setAddQuoteInput("");
    setAddAuthorInput("");
    setSelectedQuote(quotesList.length);
}

function handleRemoveQuote(){
   const newQuoteList = quotesList.filter((item, index) => {
        if(index !== selectedQuote){
            return true;
        }else{
            return false;
        }
   })
   if(selectedQuote>0){
    setSelectedQuote(selectedQuote-1);
    }
   setQuotesList(newQuoteList);
 }

  return (
<main className={styles.main}>
    <h1 className={styles.h1}> WORDS OF WISDOM</h1>
    {quotesList.length>0 ? <QuoteBox data={quotesList[selectedQuote]}/> : ""}
    <div className={styles.buttonContainer}>
        <button onClick={handlePreviousClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
    </div>
    <form className={styles.addYourOwnContainer} action={handleAddQuoteSubmit}>
        <label hmtlfor="inputBox">ADD YOUR OWN QUOTE</label>
        <br/>
        <input type="text" className={styles.inputBox} value={addQuoteInput} onChange={handleInputChange}/>
        <br/>
        <label hmtlfor="authorInputBox">Add The Author</label>
        <br/>
        <input type="text" className={styles.authorInputBox} value={addAuthorInput} onChange={handleAuthorChange}/>
        <br/>
        <input type="submit"/>
    </form>
    <h4>Don't like the quote that's shown? Click the button below to remove it from the list</h4>
     <button className={styles.quoteBoxButton} onClick={handleRemoveQuote}>Remove Quote</button>
</main>
);
}
