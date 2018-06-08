import React, { Component } from 'react';
const data = [
    {
        "tit": "web前端开发工程师",
        "des": "自信财富集团 B轮",
        "detail": ["北京大兴区", "3-5年", "本科"],
        "money": "8k-15k",
        "author": "Giselle.招聘经理",
        "url":"../../static/img/1.jpg"
    },
    {
        "tit": "web前端",
        "des": "灵思云途 D轮级以上",
        "detail": ["北京大兴区", "3-5年", "本科"],
        "money": "15k-25k",
        "author": "王韬凯.web前端",
        "url":"../../static/img/1.jpg"
    },
    {
        "tit": "前端开发工程师",
        "des": "爱回收 D轮级以上",
        "detail": ["北京大兴区", "3-5年", "本科"],
        "money": "8k-25k",
        "author": "縐萍.招聘主管",
        "url":"../../static/img/1.jpg"
    },
    {
        "tit": "前端开发工程师",
        "des": "自信财富集团 B轮",
        "detail": ["北京大兴区", "3-5年", "本科"],
        "money": "10k-15k",
        "author": "天马行空.招聘经理",
        "url":"../../static/img/1.jpg"
    },
    {
        "tit": "web开发工程师",
        "des": "自信财富集团 B轮",
        "detail": ["北京大兴区", "3-5年", "本科"],
        "money": "8k-15k",
        "author": "Giselle  招聘经理",
        "url":"../../static/img/1.jpg"
    }
]
class Main extends Component {
    render() {
        return (
            <div className="main">
                <ul className="mainlist">
                    {data.map((item, ind) => {
                        return (
                            <li key={ind}>
                                <h1>{item.tit}<span>{item.money}</span></h1>
                                <p>
                                    {item.detail.map((val, ind) => {
                                        return <i key={ind}>{val}</i>
                                    })}
                                </p>
                                <p>{item.des}</p>
                                <p><img src={item.url} alt=""/>{item.author}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Main;
