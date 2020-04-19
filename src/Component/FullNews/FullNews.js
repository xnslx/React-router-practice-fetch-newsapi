import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
// import {withRouter} from 'react-router-dom';
import classes from './FullNews.module.css';

const FullNews = (props) => {
    console.log(props)
    // const [loadedNews, setLoadedNews] = useState([]);
    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     const fetchFullNews = async() => {
    //         setLoading(true);
    //         const res = await axios.get('/' + props.match.params.index)
    //         setLoadedNews(res.data)
    //         setLoading(false)
    //     }
    //     fetchFullNews()
    //     // if(props.match.params.index) {
    //     //     axios.get('/' + props.match.params.index)
    //     //     .then(res => {
    //     //         setLoadedNews({loadedNews: res.data.articles});
    //     //     })
    //     // }
    // },[])

    // // console.log(loadedNews)

    return (
        <div className={classes.Container}>
            <h2>{props.history.location.news.title}</h2>
            <img src={props.history.location.news.urlToImage} alt="fullnewsImage"/>
            <p>{props.history.location.news.content}</p>
        </div>
    )
}


export default FullNews;
