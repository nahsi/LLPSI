import React from "react"
export default class Switch extends React.Component {
    render = () => {
        return (
            <button
                className='switch'
                role='switch'
                aria-checked={this.props.isOn}
                aria-labelledby={this.props.labelledBy}
                onClick={this.props.onClick}
            >
                <span className='u-visuallyhidden'>{this.props.isOn ? 'on' : 'off'}</span>
            </button>
        );
    }
}
