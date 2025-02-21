import React, { Component } from 'react'
import Newsitem from '../Newsitem'

export class News extends Component {
  articles=[{
    "status": "ok",
    "totalResults": 5,
    "articles": [
      {
        "source": { "id": "ars-technica", "name": "Ars Technica" },
        "author": "Jonathan M. Gitlin",
        "title": "Porsche builds a hybrid 911 at long last",
        "description": "The iconic sports car gets an electrified option as part of the 992-generation refresh.",
        "url": "https://arstechnica.com/cars/2024/05/porsche-builds-a-hybrid-911-at-long-last/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/05/0881_nevada_coupe_u-crane_AKOS2546_edit_V02__A3_RGB-760x380.jpg",
        "publishedAt": "2024-05-28T13:30:22+00:00",
        "content": "Enlarge/ The current 911known to Porschephiles as the 992 generationhas just been given its midlife refresh. The most obvious visual indicator is the presence of vertical strakes in the front air int… [+4923 chars]"
      },
      {
        "source": { "id": "new-york-magazine", "name": "New York Magazine" },
        "author": null,
        "title": "The Man Who Made Sports Uniforms As Exciting As the Games",
        "description": null,
        "url": "http://nymag.com//nymag.com/intelligencer/article/the-man-who-made-sports-uniforms-as-exciting-as-the-games.html",
        "urlToImage": null,
        "publishedAt": "2024-05-28T00:37:07.7396683Z",
        "content": null
      },
      {
        "source": { "id": "fox-sports", "name": "Fox Sports" },
        "author": "John Fanta, Michael Cohen",
        "title": "College basketball roundtable: Michigan State's tourney streak, top transfers and more",
        "description": "Is Michigan State's NCAA Tournament streak in jeopardy? Who is the top transfer in the nation? FOX Sports' college basketball experts answer that and more.",
        "url": "http://www.foxsports.com/stories/college-basketball/college-basketball-roundtable-michigan-states-tourney-streak-top-transfers-and-more",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/2024-02-29_College-Basketball-Roundtable_16x9.jpg?ve=1&tl=1",
        "publishedAt": "2024-02-29T20:59:30Z",
        "content": "It's almost time, ladies and gentlemen!\r\nThat long-awaited, fun-filled day when you wait to hear your team's name called before breaking out a pen and paper to fill out your NCAA Tournament bracket i… [+17577 chars]"
      },
      {
        "source": { "id": "bleacher-report", "name": "Bleacher Report" },
        "author": null,
        "title": "New Micah Parsons Show ",
        "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
        "url": "https://bleacherreport.com/videos/490566-the-edge-w-micah-parsons-ep-11-vod",
        "urlToImage": null,
        "publishedAt": "2023-11-27T20:37:24.6381564Z",
        "content": null
      },
      {
        "source": { "id": "bleacher-report", "name": "Bleacher Report" },
        "author": null,
        "title": " Mikal Bridges Interview ",
        "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
        "url": "https://bleacherreport.com/videos/491103-taylor-rooks-x-mikal-bridges-vod",
        "urlToImage": null,
        "publishedAt": "2023-11-27T20:37:24.3882176Z",
        "content": "Nets star sits down with Taylor Rooks for exclusive convo."
      }
    ]
  }
  ]
  constructor(){
    super();
    console.log("hello i am a constructor from news comp.")
    this.state={
      articles: this.articles
    }
  }
  render() {
    return (
      <div className="cointainer my-3">
        <h2>Newsapp - Top Headlines</h2>
       
        <div className="row">
      
        {this.state.articles.map((element,index)=>(
           <div className="col-md-4" key={index}>
          <Newsitem  title= {element.title} description={element.description} imageUrl={element.urlToImage}/>
          </div>
           ))}
        </div>
      </div>
    )
  }
}

export default News
