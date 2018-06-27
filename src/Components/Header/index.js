import React from 'react';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div> 
                <button onClick={this.props.handleCollapse}>Click</button>
            </div>
        );
    }
}
export default Header;
