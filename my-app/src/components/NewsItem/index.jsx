import React, {Component} from 'react';
import './index.less';
import ReactDOM from 'react-dom';

// {
//             "type":"tuwen",
//             "title":"中国最臭的食物到底是什么？",
//             "pcont":"假期闲来无事刷了《圆桌派》，我最喜欢的几期好像都与吃有关。看陈晓卿一边咽着口水一边口若悬河的讲美...",
//             "img":"https://qnmob2.doubanio.com/img/files/file-1507736753.jpeg?imageView2/2/q/80/w/330/h/330/format/jpg",
//             "asideleftcont":"潘可爱现场自认丑帅，坦言受到万吨伤害",
//             "asiderightcont":"来自栏目 瓣嘴"
//           }
function Tuwen(props){
    const {itemData} = props;
    let style={
     backgroundImage: 'url(' + itemData.img + ')'
    }
    console.log(itemData)
    return (
       
        <li className="Tuwen">
            <dl>
                <dt>
                    <h2>{itemData.title}</h2>
                    <p>{itemData.pcont}</p>
                </dt>
                <dd>
                    <span style={style}></span> 
                </dd>
            </dl>
            <aside>
                <span>{itemData.asideleftcont}</span>
                <span>{itemData.asiderightcont}</span>
            </aside>
        </li>
    )
}
    // {
        //     "type":"wen",
        //     "cont":"title",
        //     "pcont":"一 年纪上去，要参加的婚礼也多起来了。每次出发之前，老王都会嘱咐我，拿点香烟回来。 酒席上都是好烟..."
        //   },
function Wen(props){
    const {itemData} = props;
    return (
        <li className="Wen">
            <div className="content">
                <h2>{itemData.title}</h2>
                <p>{itemData.pcont}</p>
            </div>
            <aside>
                <span>{itemData.asideleftcont}</span>
                <span>{itemData.asiderightcont}</span>
            </aside>
        </li>
    )
}

//  {
//             "type":"tu",
//             "imgleft":"https://qnmob2.doubanio.com/view/photo/large/public/p2501510608.jpg?imageView2/2/q/80/w/500/h/500/format/jpg",
//             "imgright1":"https://qnmob2.doubanio.com/view/photo/large/public/p2501510611.jpg?imageView2/1/q/80/w/330/h/330/format/jpg",
//             "imgright2":"https://qnmob2.doubanio.com/view/photo/large/public/p2501510613.jpg?imageView2/1/q/80/w/330/h/330/format/jpg",
//             "title":"窦氏",
//             "asideftcont":"by撒旦君"
//           }
function Tu(props){
    const {itemData} = props;
    let imgleft={
      backgroundImage: 'url(' + itemData.imgleft + ')'
    }
    let imgright1={
      backgroundImage: 'url(' + itemData.imgright1 + ')' 
    }
    let imgright2={
      backgroundImage: 'url(' + itemData.imgright2 + ')' 
    }
    return (
       
        <li className="Tu">
            <dl>
                <dt>
                    <span style={imgleft}></span>
                </dt>
                <dd>
                    <span style={imgright1}></span>
                    <span style={imgright2}></span>
                </dd>
            </dl>
            <aside>
                <span>{itemData.title}</span>
                <span>{itemData.asideftcont}</span>
            </aside>
        </li>
    )
}



export {
    Tuwen,
    Wen,
    Tu
}