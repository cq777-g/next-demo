import { Avatar, Divider } from 'antd';
import '../static/style/components/author.css';
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="../static/images/timg.jpg" /></div>
            <div className="author-introduction">
                程序员，专注于WEB前端开发。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account" />
                <Avatar size={28} icon={<QqOutlined />} className="account" />
                <Avatar size={28} icon={<WechatOutlined />} className="account" />
            </div>
        </div>
    )
}

export default Author;