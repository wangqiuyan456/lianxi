import React, { Component } from 'react';
import './App.css';
import './static/css/common.css'
import './static/css/reset.css'
import Header from './components/header' 
import {Tuwen,Wen,Tu} from './components/NewsItem'

//NewsItem
function List(props){
    let {listData} = props;
    console.log(listData)
    return (
        <ul className="list">
            {
              listData.map((items,index)=>{
                  if(items.type === "tuwen"){
                     return <Tuwen itemData={items} key={index}/>
                  }else if(items.type === "tu"){
                     return <Tu itemData={items} key={index}/>
                  }else if(items.type === "wen"){
                     return <Wen itemData={items} key={index}/>
                  }
              })
            }
        </ul>
    )
}


class App extends Component {
  constructor(props){
      super(props)
      this.state={
        listData:[
          {
            "type":"tuwen",
            "title":"潘粤明演技再好，面对毒评也被憋成潘粤暗",
            "pcont":"潘可爱现场自认丑帅，坦言受到万吨伤害",
            "img":"https://qnmob2.doubanio.com/img/files/file-1507736753.jpeg?imageView2/2/q/80/w/330/h/330/format/jpg",
            "asideleftcont":"by瓣嘴",
            "asiderightcont":"来自栏目 瓣嘴"
          },
          {
            "type":"tuwen",
            "title":"广播精选｜昨天淘到一本八十年代的老干部退休生活指导",
            "pcont":"从锻炼身体到心理健康，从隔代沟通到丧偶再婚指南，从绘画鉴赏到如何撰写回忆录，从如何泡药酒到如何选八哥……",
            "img":"https://qnmob2.doubanio.com/img/files/file-1507709102.jpg?imageView2/2/q/80/w/330/h/330/format/jpg",
            "asideleftcont":"by豆瓣",
            "asiderightcont":"来自栏目 广播精选"
          },
          {
            "type":"tuwen",
            "title":"秋风起，蟹脚痒，中国人都是怎么吃蟹的",
            "pcont":"（首发于公众号壹路吃（Yi-foodie）） 十一过完了，秋天的心事就像了却了一半，要说接下来还有什么可盼...",
            "img":"https://qnmob2.doubanio.com/view/note/large/public/p45861828.jpg?imageView2/2/q/80/w/330/h/330/format/jpg",
            "asideleftcont":"byxi-xia",
            "asiderightcont":""
          },
          {
            "type":"tuwen",
            "title":"如何达成妆容的精致感｜美妆小物推荐",
            "pcont":"大家好，我是南华。 关于化妆风格和单品，每个人都各有所爱。但不管是色彩浓重饱满的欧美系妆容，还是清...",
            "img":"https://qnmob2.doubanio.com/view/note/large/public/p45809001.jpg?imageView2/2/q/80/w/330/h/330/format/jpg",
            "asideleftcont":"家禽腿部保健",
            "asiderightcont":""
          },
          {
            "type":"tu",
            "imgleft":"https://qnmob2.doubanio.com/view/photo/large/public/p2501510608.jpg?imageView2/2/q/80/w/500/h/500/format/jpg",
            "imgright1":"https://qnmob2.doubanio.com/view/photo/large/public/p2501510611.jpg?imageView2/1/q/80/w/330/h/330/format/jpg",
            "imgright2":"https://qnmob2.doubanio.com/view/photo/large/public/p2501510613.jpg?imageView2/1/q/80/w/330/h/330/format/jpg",
            "title":"窦氏",
            "asideftcont":"by撒旦君"
          },
          {
            "type":"tuwen",
            "title":"如何达成妆容的精致感｜美妆小物推荐",
            "pcont":"大家好，我是南华。 关于化妆风格和单品，每个人都各有所爱。但不管是色彩浓重饱满的欧美系妆容，还是清...",
            "img":"https://qnmob2.doubanio.com/view/note/large/public/p45861828.jpg?imageView2/2/q/80/w/330/h/330/format/jpg",
            "asideleftcont":"家禽腿部保健",
            "asiderightcont":""
          },
          {
            "type":"tuwen",
            "title":"如何达成妆容的精致感｜美妆小物推荐",
            "pcont":"大家好，我是南华。 关于化妆风格和单品，每个人都各有所爱。但不管是色彩浓重饱满的欧美系妆容，还是清...",
            "img":"https://qnmob2.doubanio.com/view/note/large/public/p45788893.jpg?imageView2/2/q/80/w/330/h/330/format/jpg",
            "asideleftcont":"家禽腿部保健",
            "asiderightcont":""
          },
          {
            "type":"tuwen",
            "title":"如何达成妆容的精致感｜美妆小物推荐",
            "pcont":"大家好，我是南华。 关于化妆风格和单品，每个人都各有所爱。但不管是色彩浓重饱满的欧美系妆容，还是清...",
            "img":"https://qnmob2.doubanio.com/view/note/large/public/p45750171.jpg?imageView2/2/q/80/w/330/h/330/format/jpg",
            "asideleftcont":"家禽腿部保健",
            "asiderightcont":""
          },
          {
            "type":"wen",
            "title":"香烟的故事",
            "pcont":"一 年纪上去，要参加的婚礼也多起来了。每次出发之前，老王都会嘱咐我，拿点香烟回来。 酒席上都是好烟...",
            "asideleftcont":"by蓝紫青灰",
            "asiderightcont":""
          },
          {
            "type":"tu",
            "imgleft":"https://qnmob2.doubanio.com/view/photo/large/public/p2501576413.jpg?imageView2/2/q/80/w/500/h/500/format/jpg",
            "imgright1":"https://qnmob2.doubanio.com/view/photo/large/public/p2501577432.jpg?imageView2/1/q/80/w/330/h/330/format/jpg",
            "imgright2":"https://qnmob2.doubanio.com/view/photo/large/public/p2501720196.jpg?imageView2/1/q/80/w/330/h/330/format/jpg",
            "title":"窦氏",
            "asideftcont":"by撒旦君"
          }       

        ]
      }
  }
  render() {
    return (
      <div className="App">
           <Header></Header>
           <List listData={this.state.listData} />
      </div>
    );
  }
}

export default App;
