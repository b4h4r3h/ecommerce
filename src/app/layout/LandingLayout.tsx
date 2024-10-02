import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';

const { Header, Footer, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
    // textAlign: 'center',
    minHeight: "unset",
    // lineHeight: '120px',
    // color: '#fff',
    backgroundColor: 'var(--color-primary-light)',
    paddingBottom:'48px'
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
    backgroundColor: '#fff',
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
    <Header className='bg-white flex justify-between'>
      <HeaderComponent/>
    </Header>
    <Content style={contentStyle}>
    <div className='container m-auto'>
    <Outlet/>
    </div>
    </Content>
    <Footer className='bg-white'>Footer</Footer>
  </Layout>
  )
}
export default LandingLayout