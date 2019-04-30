import React from 'react';
// import { connect } from 'dva';
// import { Menu } from 'antd';
import { Carousel } from 'antd';
import styles from './IndexPage.css';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;


class App extends React.Component {
  state = {
    current: 'mail',
    tu1:'../src/assets/6.jpg',
    tu2:'../src/assets/7.jpg',
    tu3:'../src/assets/8.jpg',
    tu4:'../src/assets/9.jpg',
    aa:true
  }


  render() {
    return (
      <div>
        {/* 广告 */}
        <div style={this.state.aa?{ display:'block'}:{display: 'none'}}  className={styles.guanggao}>
        <a href="##">
              <span onClick={()=>{
                this.setState({
                  aa:false
                })
              }} className={styles.sanchu}>X</span>
          </a>
        </div>
{/* 导航栏 */}
        <div className={styles.box}>
          <div className={styles.b1}>
              <div  className={styles.logo}>
                <a href="">
                  <img className={styles.tu} src="" alt="" />
                </a>
                <span className={styles.dong}>
                <img style={{width:'44px',height:'12px'}}  src="//fes.qyerstatic.com/Fnw-jy8gzH7-BUC4CDIBRkMeafNJ" alt="" />
                </span>
                </div>
                <ul>
                  <li>目的地</li>
                  <li>锦囊</li>
                  <li>社区</li>
                  <li>行程助手</li>
                  <li>商城</li>
                  <li>酒店.民宿</li>
                  <li>独家深度</li>
                  <li>穷游APP</li>
                </ul>    
            </div>
{/* 右边图标 */}
            <div className={styles.b2}>

                <div className={styles.b2l}>
                  <form>
                      
                  </form>
                      <div style={{display:'none'}}>
                         <input name="keyword" type="text"  value="" />
                      </div>
                </div>


              <div className={styles.b2r}>
              <a className={styles.qq} href="##"> </a>
              <a className={styles.weibo} href="##"> </a>
              <a className={styles.weixin} href="##"> </a>
              <a className={styles.zhuce} href="##">注册</a>
              <a className={styles.denglu} href="##">登录</a>
              </div>

            </div>
      </div>

{/* 轮播图 */}
     <Carousel className={styles.ant} autoplay easing="ease-in-out"  >
      <div><img src={this.state.tu1} alt="" /></div>
      <div><img src={this.state.tu2} alt="" /></div>
      <div><img src={this.state.tu3} alt="" /></div>
      <div><img src={this.state.tu4} alt="" /></div>
      </Carousel>
   </div>

    );
  }
}
export default App




