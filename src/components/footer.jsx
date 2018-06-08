import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
               <ul className="footlist">
                   <li><i className="iconfont icon-shouye"></i>职位</li>
                   <li><i className="iconfont icon-gongzuo"></i>公司</li>
                   <li><i className="iconfont icon-zhifubao"></i>消息</li>
                   <li><i className="iconfont icon-wode"></i>我的</li>
               </ul>
            </div>
        );
    }
}

export default Footer;
