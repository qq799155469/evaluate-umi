import { Menu, Icon } from 'antd'
import Link from 'umi/link'

const SubMenu = Menu.SubMenu

class LeftMenu extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 200 }}
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户权限</span></span>}>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>数据上传</span></span>}>
          <Menu.Item key="5"><Link to="/upload/instrument">上传乐器</Link></Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>报警系统</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="setting" /><span>统一推送</span></span>}>
          <Menu.Item key="13">Option 9</Menu.Item>
          <Menu.Item key="14">Option 10</Menu.Item>
          <Menu.Item key="15">Option 11</Menu.Item>
          <Menu.Item key="16">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" title={<span><Icon type="setting" /><span>文件存储后台</span></span>}>
          <Menu.Item key="17">Option 9</Menu.Item>
          <Menu.Item key="18">Option 10</Menu.Item>
          <Menu.Item key="19">Option 11</Menu.Item>
          <Menu.Item key="20">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub7" title={<span><Icon type="setting" /><span>配置中心</span></span>}>
          <Menu.Item key="21">Option 9</Menu.Item>
          <Menu.Item key="22">Option 10</Menu.Item>
          <Menu.Item key="23">Option 11</Menu.Item>
          <Menu.Item key="24">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default LeftMenu