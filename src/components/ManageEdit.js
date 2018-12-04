import { Input, Layout, Breadcrumb, Row, Col, Button } from 'antd'
import config from '../config'
import axios from 'axios'

const { TextArea } = Input
const { Content } = Layout

class ManageEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      version: '',
      address: '',
      des: '',
      configure: ''
    }
  }
  async onSubmit () {
    const { name, version, address, des, configure } = this.state
    try {
      let res = await axios.post(`${config.apiServer}/instrument/add`, {
        name,
        version,
        address,
        des,
        configure
      })
      if (res.code === 0) {
        this.state.setState({
          name: '',
          version: '',
          address: '',
          des: '',
          configure: ''
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  onChangeName (e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeAddress (e) {
    this.setState({
      address: e.target.value
    })
  }
  onChangeVersion (e) {
    this.setState({
      version: e.target.value
    })
  }
  onChangeDes (e) {
    this.setState({
      des: e.target.value
    })
  }
  onChangeConfigure (e) {
    this.setState({
      configure: e.target.value
    })
  }
  render () {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{
          background: '#fff', padding: 24, margin: 0, minHeight: 280,
        }}
        >
          <div>
            <Row style={{height: '30px', marginBottom: '30px'}}>
              <Col span={6} style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>名字</Col>
              <Col span={12} style={{height: '100%'}}>
                <Input value={this.state.name} onChange={this.onChangeName.bind(this)}/>
              </Col>
            </Row>
            <Row style={{height: '30px', marginBottom: '30px'}}>
              <Col span={6} style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>型号</Col>
              <Col span={12} style={{height: '100%'}}>
                <Input value={this.state.version} onChange={this.onChangeVersion.bind(this)}/>
              </Col>
            </Row>
            <Row style={{height: '30px', marginBottom: '30px'}}>
              <Col span={6} style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>地区</Col>
              <Col span={12} style={{height: '100%'}}>
                <Input value={this.state.address} onChange={this.onChangeAddress.bind(this)}/>
              </Col>
            </Row>
            <Row style={{height: '50px', marginBottom: '30px'}}>
              <Col span={6} style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>简介</Col>
              <Col span={12} style={{height: '100%'}}>
                <TextArea value={this.state.des} onChange={this.onChangeDes.bind(this)}/>
              </Col>
            </Row>
            <Row style={{height: '50px', marginBottom: '30px'}}>
              <Col span={6} style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>配置说明</Col>
              <Col span={12} style={{height: '100%'}}>
                <TextArea value={this.state.configure} onChange={this.onChangeConfigure.bind(this)}/>
              </Col>
            </Row>
            <Row style={{height: '50px', marginBottom: '30px'}}>
              <Col span={6} style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>配图</Col>
              <Col span={12} style={{height: '100%'}}>
                <Input type="file"/>
              </Col>
            </Row>
            <Row style={{height: '30px', marginBottom: '30px'}}>
              <Col span={6} style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}></Col>
              <Col span={12} style={{height: '100%'}}>
                <Button onClick={this.onSubmit.bind(this)}>提交</Button>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    )
  }
}

export default ManageEdit