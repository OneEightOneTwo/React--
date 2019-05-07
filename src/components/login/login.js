// 登陆
import React from 'react';
// import { NavBar, Icon } from 'antd-mobile';
import { Select, Input, Button, Tabs } from 'antd';

import './login.css'
const Option = Select.Option;
const TabPane = Tabs.TabPane;
function callback(key) {
    // console.log(key);
}
function handleChange(value) {
    // console.log(`selected ${value}`);
}
class mobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {    
            arr2:"",
            arr3:""
        };
    }
    componentDidMount(){
        // console.log(132);
        this.expand();
    }
    expand = (e) =>{
        let arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		let a = arr[parseInt(Math.random()*60,0)];
 		let b = arr[parseInt(Math.random()*60,0)];
 		let c = arr[parseInt(Math.random()*60,0)];
 		let d = arr[parseInt(Math.random()*60,0)];
 		let n = arr[parseInt(Math.random()*60,0)];
        let f = arr[parseInt(Math.random()*60,0)];
        // console.log(e)
        e?this.setState({arr3:a + '' + b + '' + c + '' + d +n+f}):this.setState({arr2:a + '' + b + '' + c + '' + d +n+f})
        // this.setState({arr2:a + '' + b + '' + c + '' + d +n+f})
        // console.log(e.currentTarget.innHtml);
    }
    render() {
        return (
            <div >
                <div className="dk">
                    <div className="">
                        <div className="logo">
                            <img src="//fes.qyerstatic.com/fe_ssr_passport/static/login_logo2.41bd0a52.png" alt="穷游" />
                            <span>登录</span>
                        </div>
                        <div className="dlk">
                            <Tabs size="large" tabBarGutter="0" defaultActiveKey="1" onChange={callback}>
                                <TabPane tab="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;帐号登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" key="1">
                                    <span>关于穷游网将实名<a>手机绑定实名制的说明</a></span>
                                    <br />
                                    {/* 手机邮箱用户名 */}
                                    <div className="sjyxyhm">
                                        <Input size="large" placeholder="手机号/邮箱/用户名" />
                                    </div>
                                    <br />
                                    <br />
                                    {/* 密码 */}
                                    <div className="mima">
                                        <Input.Password size="large" placeholder="密码" />
                                    </div>
                                    <br />
                                    <p><span className="wangjimima">忘记密码</span></p>
                                    <br />
                                    <Button size="large" type="primary" block>登录</Button>
                                    <br />
                                    <br />
                                    <div className="tubiao">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                    </div>
                                    <p><span>没有穷游帐号？</span><a>立即注册</a><span className="wangjimima">境外手机号登录</span></p>
                                </TabPane>
                                <TabPane tab="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;短信登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" key="2">
                                    <span>关于穷游网将实名<a>手机绑定实名制的说明</a></span>
                                    <br />
                                    <br />
                                    {/* 手机号 */}
                                    <div>
                                        <Select size="large" defaultValue="1" style={{ width: 70 }} onChange={handleChange}>
                                            <Option value="1" >86</Option>
                                            <Option value="2">1</Option>
                                            <Option value="3" disabled>台湾省</Option>
                                            <Option value="4">20</Option>
                                        </Select>
                                        <div className="dlsjh">
                                            <Input size="large" placeholder="手机号" style={{ width: 254 }}/>
                                        </div>
                                    </div>
                                    <br />
                                    {/* 图片识别码 */}
                                    <div className="tpsbm">
                                        <Input size="large" placeholder="图片识别码" style={{ width: 200 }}/>
                                    </div>
                                    <span className="shibiema" onClick={(e) => this.expand()}>{this.state.arr2}</span>
                                    <br />
                                    <br />
                                    {/* 短信验证码 */}
                                    <div className="dxyzm tpsbm">
                                        <Input value={this.state.arr3} size="large" placeholder="输入短信中的验证码" style={{ width: 200 }}/>
                                    </div>
                                    <div className="fsyzm tpsbm">
                                        <Button style={{ width: 125 }} onClick={(e) => this.expand(e)} size="large" type="primary" block>发送验证码</Button>
                                    </div>
                                    <br />
                                    <br />
                                    <Button size="large" type="primary" block>登录</Button>
                                    <br />
                                    <br />
                                    <div className="tubiao">
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                        <i></i>
                                    </div>
                                    <p><span>没有穷游帐号？</span><a>立即注册</a></p>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className="xk">
                    {/* <img src="../assets/捕获_r2_c1.png" alt="穷游" /> */}

                </div>
            </div>
        )
    }
}

export default mobile