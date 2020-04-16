import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
// import {Route, Link, Switch} from 'react-router-dom';
// import FullNews from '../FullNews/FullNews';
import NewsList from '../NewsList/NewsList';
import {withRouter, Route} from 'react-router-dom';

const News = (props) => {
    console.log(props)
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchNews = async() => {
            setLoading(true)
            const res = await axios.get('http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=e9f5217c460c42f7826f02144e6c573c')
            setNews(res.data.articles);
            setLoading(false)
        }
        fetchNews();
    }, []) 

    console.log(news)

    // const fetchNewsDetail = (index) => {
    //     console.log(index)
    //     // props.history.push('/' + index)
    // }
    if(loading) {
        return <div>The page is loading</div>
    }
    return (
        <React.Fragment>
            <header>
                <h1>Coronavirus News</h1>
            </header>
            <main>
                <NewsList news={news} />
            </main>
        </React.Fragment>
    )
};

export default News;

