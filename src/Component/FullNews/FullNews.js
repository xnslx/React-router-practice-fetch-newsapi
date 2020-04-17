import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
// import {withRouter} from 'react-router-dom';

const FullNews = (props) => {
    console.log(props)
    const [loadedNews, setLoadedNews] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchFullNews = async() => {
            setLoading(true);
            const res = await axios.get('/' + props.match.params.index)
            setLoadedNews({loadedNews:res.data})
            setLoading(false)
        }
        fetchFullNews()
        // if(props.match.params.index) {
        //     axios.get('/' + props.match.params.index)
        //     .then(res => {
        //         setLoadedNews({loadedNews: res.data.articles});
        //     })
        // }
    },[])

    // console.log(loadedNews)

    return (
        <div>
            <h2>This is News {props.match.params.index}</h2>
        </div>
    )
}


export default FullNews;
