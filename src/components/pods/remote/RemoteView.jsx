import React, { Component } from "react";
import {connect} from "react-redux"
import PropTypes from "prop-types"

function mapStateToProps(state) {
  const remoteAddr = state.remoteAddr || "http://localhost:8088";
  return {
    remoteAddr,
  }
}

@connect(mapStateToProps)
class RemoteView extends Component {
  static propTypes = {
    remoteAddr: PropTypes.string.required,
  }

  render() {
    return (
      <div>
        <div>
          MENU BAR
        </div>
        <div>
          CONTENT
        </div>
      </div>
    )
  }
}

export default RemoteView;
