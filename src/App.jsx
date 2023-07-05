import {useState} from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import {Header} from './Header';
import Home from './Components/Home';


export default function App(){
    const [lang, setLang] = useState("en")
    const changeLanguage =(x)=>{
        setLang(x)
    }
    return (
        <>
            <BrowserRouter>
                <Header changeLanguage={changeLanguage}/>
                <Routes>
                    <Route path="/" element={<Home lang={lang} q="All"/>} />
                    <Route path="/All" element={<Home lang={lang} q="All"/>} />
                    <Route path="/Politics" element={<Home lang={lang} q="Politics"/>} />
                    <Route path="/Education" element={<Home lang={lang} q="Education"/>} />
                    <Route path="/Crime" element={<Home lang={lang} q="Crime"/>} />
                    <Route path="/Science" element={<Home lang={lang} q="Science"/>} />
                    <Route path="/Technology" element={<Home lang={lang} q="Technology"/>} />
                    <Route path="/Covid-19" element={<Home lang={lang} q="Covid-19"/>} />
                    <Route path="/Sports" element={<Home lang={lang} q="Sports"/>} />
                    <Route path="/Cricket" element={<Home lang={lang} q="Cricket"/>} />
                    <Route path="/Jokes" element={<Home lang={lang} q="Jokes"/>} />
                    {/* <Route path="/English" element={<Home q="English"/>} />
                    <Route path="/Hindi" element={<Home q="Hindi"/>} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}