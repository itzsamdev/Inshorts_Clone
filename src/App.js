import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import Footer from './components/Footer/Footer';


const NEWS_API_KEY = "16ba1969b27b4d03b5da0064014b7f3d"
function App() {
  const [category, setCategory] = useState("general")
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}&category=${category}`)
      // console.log(news.data.articles)
      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)



    } catch (error) {
      console.log(error)
    }
  }
  // console.log(newsArray)

  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadMore])
  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore} />
      <Footer />
    </div>
  );
}

export default App;
