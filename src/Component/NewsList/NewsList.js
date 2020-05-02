import React from 'react';
import {Link} from 'react-router-dom';
// import FullNews from '../FullNews/FullNews';
import classes from './NewsList.module.css';

const NewsList = (props) => {

    console.log(props)
    return (
        <div className={classes.Container}>
            {props.news.map((item,index) => {
                    return (
                        <Link to={{
                            pathname:'/' + index,
                            news: item
                        }} 
                            style={{textDecoration:'none',color: '#333333'}} 
                            key={index}>
                            <div className={classes.Item}>
                                <img
                                    src={item.urlToImage} 
                                    alt="newsImage" 
                                    // onClick={() => props.fetchNewsDetail(item.index)}
                                    // style = {{width:'90%', height: 'auto'}}
                                />
                                <h2>{item.title}</h2>
                                <h6>{item.publishedAt}</h6>
                                {/* <h4>{item.content}</h4> */}
                            </div>
                        </Link>
                    )
            })}
            {/* <Route path={props.match.url + '/:index'} exact component={FullNews}/> */}
        </div>
    )
}

export default NewsList;
