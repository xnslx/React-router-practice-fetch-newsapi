import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
// import {withRouter} from 'react-router-dom';

const FullNews = (props) => {
    console.log(props)
    const [loadedNews, setLoadedNews] = useState();

    useEffect(() => {
        if(props.match.params.index) {
            axios.get('/' + props.match.params.index)
            .then(res => {
                setLoadedNews({loadedNews: res.data.articles});
            })
        }
    },[])

    return (
        <div>
            <h2>This is News {props.match.params.index}</h2>
        </div>
    )
}


export default FullNews;
