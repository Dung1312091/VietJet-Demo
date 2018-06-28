import React, { Component } from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
const products = [];
for(let i =0; i < 100; i++) {
    const temp = {
        id: i,
        name: `name ${i}`,
        price: 1000*i,
        nxs: 2018+i,
        stt: i % 2 === 0 ? true : false,
        made: 'VN'
    }
    products.push(temp)
}
class ScrollTableBT extends React.Component {
    render() {
      return (
            <BootstrapTable data={ products } height='220' scrollTop={ 'Bottom' }>
            <TableHeaderColumn isKey={true} dataField='id' isKey>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            <TableHeaderColumn dataField='nsx'>NSX</TableHeaderColumn>
            <TableHeaderColumn dataField='stt'>STT</TableHeaderColumn>
            <TableHeaderColumn dataField='made'>Made</TableHeaderColumn>
            <TableHeaderColumn dataField='stt'>STT</TableHeaderColumn>
            <TableHeaderColumn dataField='made'>Made</TableHeaderColumn>
            <TableHeaderColumn dataField='stt'>STT</TableHeaderColumn>
            <TableHeaderColumn dataField='made'>Made</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }
export default ScrollTableBT