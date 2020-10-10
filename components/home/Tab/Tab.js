import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <TabItem className={className} onClick={onClick}>{label}</TabItem>
    );
  }
}

const TabItem = styled.li``;

export default Tab;