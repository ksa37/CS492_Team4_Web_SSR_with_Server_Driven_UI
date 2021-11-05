import {  Layout, Menu, Row, Col, List, Card, Avatar  } from 'antd';
import {  EditOutlined, EllipsisOutlined, SettingOutlined  } from '@ant-design/icons';
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout;
const Meta = Card.Meta;

const data = [
  {
    title: 'URL 1',
    date: "",
  },
  {
    title: 'URL 2',
    date: "2021.08.28.",
  },
  {
    title: 'URL 3',
    date: "",
  },
  {
    title: 'URL 4',
    date: "2021.08.29.",
  },
  {
    title: 'URL 5',
    date: "",
  },
  {
    title: 'URL 6',
    date: "2021.08.30.",
  },
];

const listData = [];
for (let i = 0; i < 12; i++) {
  listData.push({
    title: 'https://ant.design',
    date: ''
  });
  listData.push({
    title: 'https://ant.design',
    date: `2021.11.${i*2+1}`
  });
}

export default function Home() {
  return (
    <Layout>
      <Header className="header" style={{ padding: 0, textAlign: 'center' }}>Title</Header>
      <Layout>
        <Sider
          className="sider"
          breakpoint="sm"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          width="100"
        />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Row justify="center" style={{marginBottom: 24}}>
              <Col flex="0 1 600px">
                <List
                  grid={{
                    column: 1,
                    gutter: [, 16],
                  }}
                  pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 3,
                  }}
                  dataSource={listData}
                  renderItem={item => (
                    <List.Item>
                      <Card>
                        <Meta
                          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" size="small"/>}
                          title={item.title}
                          description="This is the description of URL"
                        />
                        <p>This is the context of URL</p>
                        {item.date}
                      </Card>
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
            <Row justify="center" style={{marginBottom: 24}}>
              <Col flex="0 1 600px">
                <Card>
                  <mark>Following kewards</mark> test0 test1
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Sider
          className="sider"
          breakpoint="sm"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          width="100"
        />
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}
