import React from 'react'
import { Container } from '@mui/material';
import "./NewsContent.css"
import NewsCard from '../NewsCard/NewsCard'

const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
    console.log(newsArray[0])
    return <Container maxWidth="md">
        <div className='content'>
            <div className="downloadMessage">
                <span className="downloadText">
                    For the best experience use inshorts app on your smartphone
                </span>
                <img src='https://assets.inshorts.com/website_assets/images/appstore.png'
                    height="80%"
                    alt='appstore'
                />
                <img src='https://assets.inshorts.com/website_assets/images/playstore.png'
                    height="80%"
                    alt='playstore'
                />
            </div>

            <div className="cardContainer">
                {newsArray.map((newsItem) => {
                    return <NewsCard newsItem={newsItem} />
                })}
            </div>

            {/* Then this */}
            {loadMore <= newsResults && (
                <>
                    <hr />
                    <button
                        className="loadMore"
                        onClick={() => setLoadMore(loadMore + 20)}
                    >
                        Load More
                    </button>
                </>
            )}
        </div>
    </Container>
}

export default NewsContent