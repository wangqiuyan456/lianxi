import React, {Component} from 'react';
import './index.less';
//es6 
 class Header extends Component {
        static defaultProps = {//可以为组件添加getDefaultProps来设置属性的默认值。props的值只能获取不能设置
            text : "我是列表"
        }
        //state是组件内部的属性，，可以通过this.setState方法让组件再次调用render方法，来渲染新的UI,es6的写法    
        constructor(props) {
            super(props);
            this.state = {
               "lefttitle":"豆瓣",
               "textstyle":[
                   {
                     "cont":"电影",
                     "color":"#2384E8"
                   },
                   {
                     "cont":"图书",
                     "color":"#9F7860"
                   },
                    {
                     "cont":"广播",
                     "color":"#E4A813"
                   },
                    {
                     "cont":"小组",
                     "color":"#2AB8CC"
                   }, 
                   
               ]
            }
        }
        render() {    
            let {lefttitle,textstyle}=this.state
            let style={color:"red"} 
            return (
                <header className="HeaderBar">
                    <div className="leftLogo">
                        <a href="">
                          <h1>{lefttitle}</h1>
                        </a>
                    </div>
                    <div className="mainList">
                        <ul>
                            {
                            textstyle.map((items,index)=>(
                                //style样式可以用{{}}
                                <li key={index} style={{color:items.color}}>{items.cont}</li>
                            ))
                            
                            }
                        </ul>
                    </div>
                    <div className="right-search">
                            
                            
                    </div>
                </header>   
               
            )
        }
 }
export default Header