import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import '../static/style/pages/detailed.css';
import 'markdown-navbar/dist/navbar.css';

export default function Detailed() {
    let markdown = '### 一、useState \n' +
        'useState 是react自带的一个hook函数，作用是声明状态变量 \n' +
        '* 声明 \n' +
        'useState的参数是状态的初始值，他返回一个数组，数组的0位是当前的状态值，1位是可以改变状态值的方法函数。 \n' +
        '``` const [ count, setCount ] = useState(0); ``` \n\n' +
        '* 读取 \n\n' +
        '``` <p>{count}</p>``` \n\n' +
        '* 使用（修改） \n\n' +
        '直接调用setCount函数，参数是修改过的新的状态值。 \n\n' +
        '``` <button onClick={()=>{setCount(count+1)}}>click me</button>``` \n\n' +
        '* 当声明多个状态变量的时候，React根据usState出现的顺序来确定他找到对应的state，必须根据相同的顺序进行渲染。\n'+
        '* useState不能在if...else...这样的条件语句中调用。 \n\n' +
        ' ``` const [age, setAge] = useState(23) ``` \n\n\n ' +
        '### 二、 useEffect \n'+
        'useEffect可以代替常用的生命周期函数（componentDidMount， componentDidUpdate）\n'+
        '* 第一次渲染组件和每次组件更新都执行了useEffect函数 \n\n\n'+
        '### 二、 useEffect \n'+
        'useEffect可以代替常用的生命周期函数（componentDidMount， componentDidUpdate）\n'+
        '* 第一次渲染组件和每次组件更新都执行了useEffect函数 \n\n'+
        '### 二、 useEffect \n'+
        'useEffect可以代替常用的生命周期函数（componentDidMount， componentDidUpdate）\n'+
        '* 第一次渲染组件和每次组件更新都执行了useEffect函数 \n\n'+
        '### 二、 useEffect \n'+
        'useEffect可以代替常用的生命周期函数（componentDidMount， componentDidUpdate）\n'+
        '* 第一次渲染组件和每次组件更新都执行了useEffect函数 \n\n\n'+
        'useEffect可以代替常用的生命周期函数（componentDidMount， componentDidUpdate）\n'+
        '* 第一次渲染组件和每次组件更新都执行了useEffect函数 \n\n\n'+
        'useEffect可以代替常用的生命周期函数（componentDidMount， componentDidUpdate）\n'+
        '* 第一次渲染组件和每次组件更新都执行了useEffect函数 \n\n\n'+
        'useEffect可以代替常用的生命周期函数（componentDidMount， componentDidUpdate）\n'+
        '* 第一次渲染组件和每次组件更新都执行了useEffect函数 \n\n\n'+
        'useEffect可以代替常用的生命周期函数（componentDidMount， componentDidUpdate）\n'+
        '* 第一次渲染组件和每次组件更新都执行了useEffect函数 \n\n\n'+
        'useEffect可以代替常用的生命周期函数（componentDidMount， componentDidUpdate）\n'+
        '* 第一次渲染组件和每次组件更新都执行了useEffect函数 \n\n\n'+
        'useEffect可以代替常用的生命周期函数（componentDidMount， componentDidUpdate）\n'+
        '* 第一次渲染组件和每次组件更新都执行了useEffect函数 \n\n\n'
    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className="bread-div">
                            <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item>视频教程</Breadcrumb.Item>
                            <Breadcrumb.Item>xxxxx</Breadcrumb.Item>
                        </div>
                        <div>
                            <div className="detailed-title">
                                React Hook 教程
                            </div>
                            <div className="list-icon center">
                                <span><CalendarOutlined /> 2020-08-18</span>
                                <span><FolderOutlined /> 视频教程</span>
                                <span><FireOutlined /> 53234</span>
                            </div>
                            <div className="detailed-content">
                                <ReactMarkdown
                                    source={markdown}
                                    escapeHtml={false}
                                />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                    <Affix offsetTop={5}>
                    <div className="detailed-nav comm-box">
                        <div className="nav-title">文章目录</div>
                        <MarkNav
                        className="article-menu"
                        source={markdown}
                        ordered={false}
                        />
                    </div>
                    </Affix>
                
                </Col>
            </Row>
            <Footer />
        </div>
    )
}
