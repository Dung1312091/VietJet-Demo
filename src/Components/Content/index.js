import React from "react";
// import ScrollTable from '../StickyTable';
// import ScrollTableBT from '../TableBosstrapScroll';
// import ScrollTable from '../ScrollTable';
import BasicExample from '../ScrollTable';
// import ReactTableCus from '../../ReactTable'
class ScrollDetector extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      message: "not at bottom"
    };
  }

  // handleScroll = (event) => {
  //     console.log('aaa',event);
  //   const windowHeight =
  //     "innerHeight" in window
  //       ? window.innerHeight
  //       : document.documentElement.offsetHeight;
  //   const body = document.body;
  //   const html = document.documentElement;
  //   const docHeight = Math.max(
  //     body.scrollHeight,
  //     body.offsetHeight,
  //     html.clientHeight,
  //     html.scrollHeight,
  //     html.offsetHeight
  //   );
  //   const windowBottom = windowHeight + window.pageYOffset;
  //   if (windowBottom >= docHeight) {
  //     this.setState({
  //       message: "bottom reached"
  //     });
  //   } else {
  //     this.setState({
  //       message: "not at bottom"
  //     });
  //   }
  // }
  // handleResize = () => {
  //   console.log('handleResize');
  // }
  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  //   window.addEventListener("resize", this.handleResize);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  render() {
    return (
      <div>
        <div style={{width: '98%'}} >
         <BasicExample/>
        </div>
      </div>
    );
  }
}

export default ScrollDetector;
