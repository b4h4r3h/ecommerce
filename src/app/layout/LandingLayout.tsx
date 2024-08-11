import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  };
  
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };
  
  const layoutStyle = {
    // borderRadius: 8,
    // overflow: 'hidden',
    height: "100dvh",
    // width: 'calc(50% - 8px)',
    // maxWidth: 'calc(50% - 8px)',
  };

const LandingLayout = () => {
  return (
    <Layout style={layoutStyle} className='bg-white'>
    <Header >Header</Header>
    <Content>
    <div className='container m-auto'>
    <Outlet/>
    </div>
    </Content>
    <Footer >Footer</Footer>
  </Layout>
  )
}
export default LandingLayout