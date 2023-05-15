import React from 'react';
import '../ListView.css';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
import { DownArrow, FourDots } from '../ListViewIcons';
import HeaderSubComp from './HeaderSubComp';

const { Panel } = Collapse;

const text = `
Make note of any appointments or meetings that you have scheduled for the day and ensure that you have the necessary information and materials.
`;

const ChildMainListComponent = () => {
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 6,
    background: '#1B1C1E',
    borderRadius: '8px',
    border: 'none',
  };

  const expandIcon = ({ isActive }) => (
    <div className="flexVerticalCenter">
      <FourDots />
      <div
        style={{
          transform: !isActive ? 'rotate(-90deg)' : '',
          transition: 'all 0.2s ease',
          marginLeft: '11px',
        }}
      >
        <DownArrow />
      </div>
      <div className="textIcon2"></div>
    </div>
  );
  const expandIcon1 = ({ isActive }) => (
    <div className="flexVerticalCenter">
      <div
        style={{
          transform: !isActive ? 'rotate(-90deg)' : '',
          transition: 'all 0.2s ease',
          marginLeft: '11px',
        }}
      >
        <DownArrow />
      </div>
      <div className="textIcon2"></div>
    </div>
  );

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={expandIcon}
      style={{ background: '#101010' }}
      className="panelHeader"
    >
      <Panel header={<HeaderSubComp />} key="1" style={panelStyle}>
        <div className="innerCollapseContainer">
          <p className="panelText">{text}</p>
          <div className='mgtop'>
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={expandIcon1}
              style={{ background: '#101010', marginLeft: '25px' }}
              className="innerCollapse"
            >
              <Panel header={<HeaderSubComp />} key="2" style={panelStyle}>
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={expandIcon1}
              style={{ background: '#101010', marginLeft: '25px' }}
              className="innerCollapse"
            >
              <Panel header={<HeaderSubComp />} key="2" style={panelStyle}>
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </Panel>
      <Panel header={<HeaderSubComp />} key="2" style={panelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header={<HeaderSubComp />} key="3" style={panelStyle}>
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export default ChildMainListComponent;