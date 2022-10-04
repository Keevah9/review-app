import React, {useState, useContext} from 'react'
import reviews from './data'
const AppContext = React.createContext()
const AppProvider = ({children})=>{
    const [index, setIndex] = useState(0)
    const [getData, setGetData] = useState(reviews);
    console.log(getData.length);
    let newIndex;

    const checkRandom = (number) => {
        if (number > getData.length - 1) {
            return 0;
        }
        if (number < 0) {
            return getData.length - 1;
        }
        return number;
    };
    const prevPerson = ()=>{
        setIndex(()=>{
            newIndex = index - 1
            return checkRandom(newIndex);
        })
    }
    const nextPerson = () => {
        setIndex(() => {
            newIndex = index + 1;
            return checkRandom(newIndex);
        });
    }; 
    const randomPerson = ()=>{
        let randomNo =  Math.floor(Math.random() * getData.length)
        if(randomNo === index){
            randomNo = index + 1
        }
        setIndex(checkRandom(randomNo))
    }

    return (
        <AppContext.Provider
            value={{
            getData,
            setGetData,index, setIndex, prevPerson, nextPerson, randomPerson
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}