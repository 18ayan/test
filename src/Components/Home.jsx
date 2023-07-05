import React, { Component} from 'react';
import News from './News';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            totalResults: 0
        }
    }

    async getNews () {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.lang}&from=2023-05-01&sortBy=publishedAt&apiKey=046b4d5ef1ea4b8ab21d8061b7a2ef00`); 
        let result = await response.json();
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults
        })
    };

    componentDidMount() {
        this.getNews();
    };


    componentDidUpdate(old){
        if(this.props.q !== old.q || this.props.lang !== old.lang || this.props.search !== old.search){
            this.getNews();
        }
    }


  render (){
    return(
        <>
        <div style={{textAlign:"center", fontSize:"30px", fontWeight:"500"}}>{`${this.props.q} News`}</div>
        <section>
            <div className="container">
            <div className='row g-4'>
                {
                    this.state.articles.map((item, index) => {
                        return <News data={item}/>
                    })
                }
            </div>
            </div>
        </section>
    </>
    )
  }
}
