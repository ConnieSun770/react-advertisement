import React, { Component } from 'react';
import { FormInstance } from 'antd/es/form';
import {
  Table, Button, Modal, Form, Input, InputNumber, Radio, Tag,
} from 'antd';
import CardTabs from '../CardTabs';
import './styles.scss';

interface IProps {
  dataSource:any[];
  addToTable:(row:any)=>void;
}

const columns = [
  {
    title: '排名',
    dataIndex: 'sort',
    key: 'sort',
    render: (text:any) => <a>{text}</a>,
  },
  {
    title: '推广计划',
    dataIndex: 'planName',
    key: 'planName',
  },
  {
    title: '预算',
    dataIndex: 'budget',
    key: 'budget',
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: '关键词',
    dataIndex: 'keyword',
    key: 'keyword',
  },
  {
    title: '操作',
    dataIndex: 'autoOpenValue',
    key: 'autoOpenValue',
    render: (text: number) => (
      <>
        {
          text ? '正在推广' : '暂停推广'
        }
      </>
    ),
  },
];

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const validateMessages = {
  required: '${label} 是必填项!',
  types: {
    email: '${label} 不符合规范!',
    number: '${label} 不符合规范!',
  },
  number: {
    range: '${label} 必须在 ${min} 和 ${max} 之间',
  },
};

class WaveAnalysis extends Component<IProps> {
  state = {
    cardData: [
      {
        id: '1',
        name: '展现变化（元）',
        currentValue: 5988,
        contemporaryValue: 6000,
        isSelected: true,
      },
      {
        id: '2',
        name: '点击变化（次）',
        currentValue: 5988,
        contemporaryValue: 6000,
        isSelected: false,
      },
      {
        id: '3',
        name: '消费变化（次）',
        currentValue: 5988,
        contemporaryValue: 6000,
        isSelected: false,
      },
    ],
    isModalOpen: false,
    initialValues: {
      plan: {
        name: '',
        autoOpenValue: 0,
      },
    },
  }

  formRef = React.createRef<FormInstance>();

  handleCardChange = (selectedId: string) => {
    // 处理card change
    const { cardData } = this.state;
    const newCardData = cardData.map((cardItem: any) => {
      const tempCardItem = JSON.parse(JSON.stringify(cardItem));
      tempCardItem.isSelected = tempCardItem.id === selectedId;
      return tempCardItem;
    });
    this.setState({
      cardData: newCardData,
    });
  }

  render() {
    const { cardData, isModalOpen, initialValues } = this.state;
    const { dataSource } = this.props;

    const showModal = () => {
      this.setState({
        isModalOpen: true,
      });
    };

    const handleOk = () => {
      this.formRef.current!.validateFields().then((values: any) => {
        // 发生接口请求
        const { addToTable } = this.props;

        addToTable({
          ...values.plan,
          key: (dataSource.length + 1).toString(),
          sort: dataSource.length + 1,
        });
        console.log(values);
        // addToTable(values);
        this.setState({
          isModalOpen: false,
        });
      }).catch((error: any) => {
        console.warn('values', error);
      });
    };

    const handleCancel = () => {
      this.setState({
        isModalOpen: false,
      });
    };

    const onFinish = (values: any) => {
      console.log(values);
    };

    return (
      <div className="wave-analysis-component-box">
        <div className="card-tabs-box">
          <div className="wave-analysis-title">波动分析</div>
          <CardTabs
            cardData={cardData}
            onChange={(selectedId: string) => { this.handleCardChange(selectedId); }}
          />
        </div>
        <div className="table-box">
          <div className="title-and-btn">
            <span>TOP50计划</span>
            <Button type="primary" onClick={showModal}>新建推广计划</Button>
          </div>
          <Table columns={columns} dataSource={dataSource} />
        </div>
        <Modal
          title="新建推广计划"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="确定"
          cancelText="取消"
          width={700}
        >
          <Form {...layout} ref={this.formRef} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} initialValues={initialValues}>
            <Form.Item name={['plan', 'planName']} label="计划名称" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={['plan', 'budget']}
              label="每日预算"
              rules={[{
                type: 'number', min: 0, max: 99, required: true,
              }]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name={['plan', 'autoOpenValue']} label="自动开启推广">
              <Radio.Group>
                <Radio value={1}>是</Radio>
                <Radio value={0}>否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name={['plan', 'keyword']} label="推广关键词" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['plan', 'city']} label="推广城市" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default WaveAnalysis;
