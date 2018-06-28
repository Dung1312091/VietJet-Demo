import React, { Component } from "react";
// import dragscroll from 'dragscroll';
import "./style.css";
const listData = [];
for (let i = 0; i < 100; i++) {
    listData.push(i)
}
class ScrollTable extends Component {
    scrollTable = () => {
        // var elmnt = document.getElementById("bodyTable");
        const x = this.table.scrollLeft;
        this.tHead.style.left = `${-x}px`;
        this.thFist.style.left = `${x}px`;
        var z = [].slice.call(document.querySelectorAll('tbody td:nth-child(1)'));
        z.forEach((item) => {
            item.style.left = `${x}px`;
        })
    }
    render() {
        return (
            <div className="container" >
                <div className="col-xs-12"  >
                    <div className="row"  >
                        <div className="table-responsive" ref={(el) => { this.table = el }} onScroll={this.scrollTable} style={{height: 600, overflow: 'scroll'}}>
                            <table className="table table-bordered table-hover table-fixed">
                                <thead ref={ref => (this.tHead = ref)}>
                                    <tr>
                                        <th ref={ref => (this.thFist = ref)}>FLIGHT NO.</th>
                                        <th>STD</th>
                                        <th>STA</th>
                                        <th>ATD</th>
                                        <th>ATA</th>
                                        <th>ROUTE</th>
                                        <th>GATE</th>
                                        <th>TAI</th>
                                        <th>BAY</th>
                                        <th>PAX</th>
                                        <th>DRCLSD</th>
                                        <th>TYPE</th>
                                        <th>A/CREGSN</th>
                                        <th>A/CTYPE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listData.map((item,index)=> {
                                        return(
                                            <tr key={index}> 
                                            <td ref={ref => (this.tdFist = ref)}>Argentina</td>
                                            <td>Spanish </td>
                                            <td>41,803,125</td>
                                            <td>31.3</td>
                                            <td>2,780,387</td>
                                            <td ref={ref => (this.tdFist = ref)}>Argentina</td>
                                            <td>Spanish </td>
                                            <td>41,803,125</td>
                                            <td>31.3</td>
                                            <td>2,780,387</td>
                                            <td ref={ref => (this.tdFist = ref)}>Argentina</td>
                                            <td>Spanish </td>
                                            <td>41,803,125</td>
                                            <td>31.3</td>
                                        </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        //     <div class="container">
        //         <div class="row">
        //             <div class="panel panel-default">
        //                 <div class="panel-heading">
        //                     <h4>
        //                         Fixed Header Scrolling Table
        //   </h4>
        //                 </div>
        //                 <table class="table table-fixed table-bordered table-hover ">

        //                     <thead ref={ref => (this.tHead = ref)}>
        //                         <tr>
        //                             <th ref={ref => (this.thFist = ref)}>FLIGHT NO.</th>
        //                             <th>STD</th>
        //                             <th>STA</th>
        //                             <th>ATD</th>
        //                             <th>ATA</th>
        //                             <th>ROUTE</th>
        //                             <th>GATE</th>
        //                             <th>TAI</th>
        //                             <th>BAY</th>
        //                             <th>PAX</th>
        //                             <th>DRCLSD</th>
        //                             <th>TYPE</th>
        //                             <th>A/CREGSN</th>
        //                             <th>A/CTYPE</th>
        //                         </tr>
        //                     </thead>

        //                     <tbody>
        //                         {listData.map((item, index) => {
        //                             return (
        //                                 <tr key={index}>
        //                                     <td ref={ref => (this.tdFist = ref)}>Argentina</td>
        //                                     <td>Spanish </td>
        //                                     <td>41,803,125</td>
        //                                     <td>31.3</td>
        //                                     <td>2,780,387</td>
        //                                     <td ref={ref => (this.tdFist = ref)}>Argentina</td>
        //                                     <td>Spanish </td>
        //                                     <td>41,803,125</td>
        //                                     <td>31.3</td>
        //                                     <td>2,780,387</td>
        //                                     <td ref={ref => (this.tdFist = ref)}>Argentina</td>
        //                                     <td>Spanish </td>
        //                                     <td>41,803,125</td>
        //                                     <td>31.3</td>
        //                                 </tr>
        //                             )
        //                         })}

        //                     </tbody>
        //                 </table>
        //             </div>
        //         </div>
        //     </div>
        );
    }
}

export default ScrollTable;