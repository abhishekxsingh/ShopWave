import React from "react";
import './index.scss';


const News = () => {
    return(
        <section id="news">
        <div className="news-heading">
            <p>LATEST NEWS</p>
            <h2>Fashion New Trends</h2>
        </div>
        <div className="l-news container">
            <div className="l-news1">
                <div className="news1-img">
                    <img src="https://i.postimg.cc/2y6wbZCm/news1.jpg" alt="img"/>
                </div>
                <div className="news1-conte">
                    <div className="date-news1">
                        <p><i className='bx bxs-calendar'></i> 12 February 2022</p>
                        <h4>What Curling Irons Are The Best Ones</h4>
                        <a href="https://www.vogue.com/article/best-curling-irons">read more</a>
                    </div>
                </div>
            </div>
            <div className="l-news2">
                <div className="news2-img">
                    <img src="https://i.postimg.cc/9MXPK7RT/news2.jpg" alt="img"/>
                </div>
                <div className="news2-conte">
                    <div className="date-news2">
                        <p><i className='bx bxs-calendar'></i> 17 February 2022</p>
                        <h4>The Health Benefits Of Sunglasses</h4>
                        <a href="https://www.rivieraopticare.com/blog/314864-the-health-benefits-of-wearing-sunglasses_2/">read more</a>
                    </div>
                </div>
            </div>
            <div className="l-news3">
                <div className="news3-img">
                    <img src="https://i.postimg.cc/x1KKdRLM/news3.jpg" alt="img"/>
                </div>
                <div className="news3-conte">
                    <div className="date-news3">
                        <p><i className='bx bxs-calendar'></i> 26 February 202</p>
                        <h4>Eternity Bands Do Last Forever</h4>
                        <a href="https://www.briangavindiamonds.com/news/eternity-bands-symbolize-love-that-lasts-forever/">read more</a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default News;