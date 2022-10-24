import { Menu, MenuProps } from 'antd';
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
    {
        label: 'Navigation One',
        key: 'Dinners',
        icon: <MailOutlined />,
    },
    {
        label: 'Navigation Two',
        key: 'Recipes',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'Food news',
        icon: <SettingOutlined />
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];

const TopNavigation = () => {
    const [current, setCurrent] = React.useState('mail');

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default TopNavigation;