import React from 'react';
import {withRouter, Link, Route} from 'react-router-dom';
import FullNews from '../FullNews/FullNews';

const NewsList = (props) => {

    console.log(props)
    return (
        <div>
            {props.news.map((item,index) => {
                    return (
                        <Link to={'/' + index} style={{textDecoration:'none',color: '#333333'}} key={index}>
                            <div>
                                <img
                                    to={'/' + item.index}
                                    src={item.urlToImage} 
                                    alt="newsImage" 
                                    onClick={() => props.fetchNewsDetail(index)}
                                    style = {{width:'90%', height: 'auto'}}
                                />
                                <h2>{item.title}</h2>
                                <h6>{item.publishedAt}</h6>
                                <h4>{item.content}</h4>
                            </div>
                        </Link>
                    )
            })}
            <Route path={props.match.url + '/:index'} exact component={FullNews}/>
        </div>
    )
}

export default withRouter(NewsList);
