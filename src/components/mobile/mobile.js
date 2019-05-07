// 登陆
import React from 'react';
// import { NavBar, Icon } from 'antd-mobile';
import { Input , Select , Button } from 'antd';

import './mobile.css'
const Option = Select.Option;
function handleChange(value) {
    console.log(value);// { key: "lucy", label: "Lucy (101)" }
}
class mobile extends React.Component {
    render() {
        return (
            <div >
                <div className="dk">
                    <div className="">
                        <div className="logo">
                            <img src="//fes.qyerstatic.com/fe_ssr_passport/static/login_logo2.41bd0a52.png" alt="穷游" />
                            <span>注册</span>
                        </div>
                        <div className="dlk">
                            {/* 手机号 */}
                            <div className="shoujiqiancuo">
                                <Select labelInValue defaultValue={{ key: 'lucy' }} style={{ width: 90 }} onChange={handleChange} size="large">
                                    <Option value="jack" >100</Option>
                                    <Option value="lucy">101</Option>
                                </Select>
                            </div>
                            <div className="shoujihao">
                                <Input size="large" placeholder="输入用于登录的手机号码" />
                            </div>
                            <br />
                            <br />
                            {/* 验证码 */}
                            <div className="yanzhengma">
                                <Input size="large" placeholder="图片识别码" />
                            </div>
                            <span className="yzm">1234</span>
                            <br />
                            <br />
                            {/* 短信验证 */}
                            <div className="duanxinyanzheng">
                                <Input size="large" placeholder="输入短信中的验证码" />
                            </div>
                            <Button size="large" type="primary" style={{ width: 125 }}>发送验证码</Button>
                            <br />
                            <br />
                            <br />
                            {/* 用户名 */}
                            <div className="yonghuming">
                                <Input size="large" placeholder="起一个具有识别度的用户名" />
                            </div>
                            <br />
                            <br />
                            {/* 密码 */}
                            <div className="mima">
                                <Input.Password size="large" placeholder="输入8-16位密码，需包含字母及数字" />
                            </div>
                            <br />
                            <br />
                            <Button size="large" type="primary" block>注册</Button>
                            <br />
                            <br />
                            <p>已有穷游帐号？<a>登录</a><span className="tytk">同意<a>会员条款</a>和<a>免责声明</a></span></p>
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