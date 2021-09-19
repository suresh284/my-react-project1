import React, { Component } from 'react'
import { fetchTechNews } from '../../Apis/fetchTechNews'

export default class TechNews extends Component {

    constructor(props){
            super(props)
            this.state = {
                headlines:null
            }

    }

    componentDidMount(){

            const getData = async () =>{

                    const data = await fetchTechNews()
                    console.log(data)
                    this.setState({ headlines: data.articles })
            }
            getData()

    }

    render() {
        console.log(this.state.headlines)
        const news = this.state.headlines 
        return (
            <div>
                <h1> Technology News </h1>
                {news != null && news.length ? 
                    news.map((item,index)=>(
                        <div key={index}>
                            <h3>{item.title}</h3>
                            <img src={item.urlToImage} width={250} height={250} alt="" />
                            <p> {item.description} </p>
                        </div>
                    ))
                : <span> Loading... </span>}
            </div>
        )
    }
}
