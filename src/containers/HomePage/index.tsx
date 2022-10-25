import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;


const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
	(icon, index) => {
	  const key = String(index + 1);
  
	  return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: `subnav ${key}`,
  
		children: new Array(4).fill(null).map((_, j) => {
		  const subKey = index * 4 + j + 1;
		  return {
			key: subKey,
			label: `option${subKey}`,
		  };
		}),
	  };
	},
  );

const HomePage: React.FC = () => (
  <Layout>
	<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
	  <div className="logo" />
	  <Menu
		theme="dark"
		mode="horizontal"
		defaultSelectedKeys={['2']}
		items={new Array(3).fill(null).map((_, index) => ({
		  key: String(index + 1),
		  label: `nav ${index + 1}`,
		}))}
	  />
	</Header>
	<Layout hasSider style={{ marginTop: 64 }}>
		<Sider width={200} className="site-layout-background"
			style={{
				overflow: 'auto',
				position: 'fixed',
				left: 0,
				top: 64,
				bottom: 0,
			  }}
		>
			<Menu
				mode="inline"
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				items={items2}
			/>
		</Sider>
		<Layout 
			style={{ padding: '0 24px 24px', 
			marginLeft: '200px',}}
		>
			<Content
				className="site-layout-background"
				style={{
					margin: '24px 16px 0',
					overflow: 'initial'
				}}
				>
				<div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
					<p>long content</p>
					{
						// indicates very long content
						Array.from({ length: 100 }, (_, index) => (
						<React.Fragment key={index}>
							{index % 20 === 0 && index ? 'more' : '...'}
							<br />
						</React.Fragment>
						))
					}
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
		</Layout>
	</Layout>
  </Layout>
);

export default HomePage;