import { Layout } from 'antd'
import LeftMenu from '../components/LeftMenu'
import ManageEdit from '../components/ManageEdit'

const { Sider } = Layout

export default function() {
  return (
    <Layout>
      <Sider>
        <LeftMenu/>
      </Sider>
      <ManageEdit/>
    </Layout>
  )
}
