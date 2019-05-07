import React, { Component } from "react";
import { connect } from "dva";
import "./Goodsdetail.css";
import { DatePicker } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class Goodsdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Nav: [
            { name: "首页" },
            {
              name: "机酒自由行",
              list: [
                { name: "全部" },
                { name: "自由行" },
                { name: "优惠机票" },
                { name: "酒店" },
                { name: "邮轮" },
                { name: "定制游" },
                { name: "马尔代夫" }
              ]
            },
            { name: "优惠机票" },
            {
              name: "跟团游",
              list: [
                { name: "全部" },
                { name: "自由行" },
                { name: "优惠机票" },
                { name: "酒店" },
                { name: "邮轮" },
                { name: "定制游" },
                { name: "马尔代夫" }
              ]
            },
            { name: "酒店" },
            {
              name: "当地玩乐",
              list: [
                { name: "全部" },
                { name: "自由行" },
                { name: "优惠机票" },
                { name: "酒店" },
                { name: "邮轮" },
                { name: "定制游" },
                { name: "马尔代夫" }
              ]
            },
            { name: "海岛游" },
            { name: "邮轮" },
            { name: "河轮" },
            { name: "租车自驾" },
            {
              name: "深度旅游",
              list: [
                { name: "全部" },
                { name: "CityWalk" },
                { name: "特色长线" },
                { name: "Q-Home" }
              ]
            }
          ],
          subNav: [
            { name: "签证" },
            { name: "保险" },
            { name: "WIFI电话卡" }
          ],
          searchlistshow: false,
          
          searchsite:[
            { typesite: '日本', smsite: ['东京', '大阪', '冲绳', '北海道', '名古屋', '福冈', '札幌']},
            { typesite: '日本', smsite: ['东京', '大阪', '冲绳', '北海道', '名古屋', '福冈', '札幌']},
            { typesite: '日本', smsite: ['东京', '大阪', '冲绳', '北海道', '名古屋', '福冈', '札幌'] },
            { typesite: '日本', smsite: ['东京', '大阪', '冲绳', '北海道', '名古屋', '福冈', '札幌'] },
            { typesite: '日本', smsite: ['东京', '大阪', '冲绳', '北海道', '名古屋', '福冈', '札幌'] }
          ],
          bookingFrame:[
            { text:'5月特惠：南航双人起订，往返机票+2晚芳馨酒店+接机'},
            { text: '[秒杀]国庆北京-格鲁吉亚往返机票+2晚芳馨酒店' },
            { text: '南航2人起订' },
            { text: '国庆预售-北京-第比利斯9天自由行' },
            { text: '签证/保险/补差价/一日游专拍' },
          ],
          bookFrameindex:0
          
          
        };
    }
    downtip(item){
        if (item.list){
            return <i className="iconfont icon-xia"></i>
        }else{
            return 
        }
    }
    navactive(item){
        if (item.list){

        }
    }
    secnav(item){
        if (item.list){
            return <ul className="secNav">{item.list.map((item, i) => <li><a href="">{item.name}</a></li>)}
</ul>
        }else{
            return;
        }
    }
    setsearchbool(e){
      e.stopPropagation();
      this.setState({
        searchlistshow: true
      });
      
    }
    searchlistclick(e){
      e.stopPropagation();
      
      
    }
    bookFrame(index){
      
      this.setState({
        bookFrameindex: index
      })
      
    }
    
    datechange(date, dateString){
      console.log(dateString)
      
    }
    render() {
        return (
          <div className="gooddetail" onClick={() => {
            this.setState({
              searchlistshow: false
            })
            }}>
            <div className="gd_head">
              <div className="container">
                <ul className="mainNav">
                  {this.state.Nav.map((item, i) => (
                    <li className={item.list ? "navactive" : ""}>
                      <a href="">
                        {item.name}
                        {this.downtip(item)}
                      </a>{" "}
                      {this.secnav(item)}
                    </li>
                  ))}
                </ul>
                <ul className="subNav">
                  {this.state.subNav.map((item, i) => (
                    <li>
                      {" "}
                      <a href="">{item.name}</a>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="headerwrap">
              <div className="container">
                <h1 className="gd_logo">
                  <a href="">穷游商城</a>
                </h1>
                <div className="gd_search">
                  <input
                    onClick={(e) => {
                      this.setsearchbool(e);
                    }}
                    type="text"
                    name=""
                    id=""
                    placeholder="请输入目的地／产品名称"
                  />
                  <button type="button" />
                  <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                  >
                  {this.state.searchlistshow &&
                    <div
                          className="searchlist"
                          onClick={e => {
                            this.searchlistclick(e);
                          }}
                    
                      >
                          <div className="listbox">
                            <h2 className="">热门目的地</h2>
                            <div className="hotlist">
                              {this.state.searchsite.map((item, i) => (
                                <div className="hotsame">
                                  <span className="didian">
                                    {item.typesite}
                                  </span>
                                  <ul>
                                    {item.smsite.map((item, i) => (
                                      <li>
                                        <a href="">{item}</a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                  }  
                  </ReactCSSTransitionGroup>
                </div>
                <div className="linkwrap">
                  <a href="" className="myorder">
                    <i className="iconfont icon-dingdan"></i>
                    <span className="linktext">我的订单</span>
                  </a>
                  <a href="" className="fav">
                    <i className="iconfont icon-aixin"></i>
                    <span className="linktext">我的收藏</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="gd_main">
              <div className="container">
                <div className="leftSide">
                  <div className="productImg">
                    <span className="productId">产品编号：79124</span>
                    <img src="../src/routes/Goodsdetail/images/FiO0Y9EWpAFsjXZabH2wPp2vWs_S.png" alt="" className="bargain"/>
                    <img src="../src/routes/Goodsdetail/images/Fu7QES6wXTVWNUDxktj5_IamjzcT.jpg" alt="" className="product_img"/>
                  </div>
                </div>
                <div className="rightSide">
                  <div className="product_info">
                    <div className="product_name">
                    [端午/暑期/十一正班/预售至19年底]北京往返格鲁吉亚第比利斯7-30天自由行（赠送格鲁吉亚红酒1瓶/赠接机+2晚酒店/全国联运/乌鲁木齐可停留/代办签证）
                    </div>
                    <div className="label_box">
                      <span>砍价</span>
                      <span>秒杀</span>
                      <span>赠首晚酒店</span>
                      <span>赠接送机</span>
                    </div>
                    <div className="price_box">
                        <div className="prbox">
                        <em>3699</em>
                        <span className='price_left'>元起</span>
                        </div>
                      <div className="prbox" style={{'marginLeft':'30px'}}>
                        <span className="browse">浏览</span>
                        <span className="browse_num">796993</span>
                      </div>
                      <div className="prbox" style={{ 'marginLeft': '10px' }}>
                        <span className="browse">销售</span>
                        <span className="browse_num">1275</span>
                      </div>
                    </div>
                    <div className="flight_type">
                      <div className="flight_item">
                          必选理由：赠酒店+拒签全退+目的地中文服务+赠送格鲁吉亚红酒1瓶
                          <br/>
                          行程自由：旅行时间选择自由，加付400元还可经停乌鲁木齐
                          <br />
                          管家服务：提供目的地中文翻译、旅游咨询等在线或电话服务，解决沟通之忧
                          <br />
                          出行无忧：提供格鲁吉亚境内汽车租赁和火车票代订服务
                          <br />
                          升级体验：赠送经济型酒店可付费升级为舒适性与高档型酒店
                      </div>
                    </div>
                    <div className="preferential">
                      <span className="title1">温馨提示</span>
                      <span className="title2">多程机票需按行程顺序完全使用，往返程机票无法单独使用回程</span>
                    </div>
                    <div className="discount">
                      <div className="discountUnit">
                        <p>产品当前优惠说明</p>
                        <a href="" className="wrap">最高可砍500元
                        <div className="countdow">
                        距结束
                        <span>1天7小时22分40秒</span>
                        </div>
                        
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bookingFrame">
                    <h4>产品类型</h4>
                    <ul>
                      {this.state.bookingFrame.map((item,index)=>(
                        <li 
                        className={this.state.bookFrameindex === index ? 'fractive':''}
                          onClick={()=>{this.bookFrame(index)}}
                        >{item.text}</li>
                      ))}
                      
                    </ul>
                    <h4>出行日期</h4>
                    <div className="datapicker">
                    <DatePicker placeholder="请选择日期" size="large" onChange={this.datechange.bind()}/>
                    </div>
                  </div>
                  <div className="frame">
                    <div className="priceBox">
                      <span className="gdprice">
                      ¥ 
                      <em>0</em>
                      </span>
                    </div>
                    <button type="button" className="bookingButt">立即预订</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default connect(({ example }) => {
    return {
        example,
    };
},)(Goodsdetail);
