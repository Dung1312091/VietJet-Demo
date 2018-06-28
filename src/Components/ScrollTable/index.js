import React, { Component } from 'react';

import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';
const listData = [];
for (let i = 0; i < 100; i++) {
  listData.push(i)
}
export default class BasicExample extends Component {
  render() {
    return (
      <div>
        <div style={{ width: '100%', height: '800px' }}>
          <StickyTable>
            <Row >
              <Cell>
                <div className="headerTable">
                  <p>FLIGHT NO.</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>STD</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>STA</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>ATD</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>ATA</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>ROUTE</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>GATE</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>TAI</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>BAY</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>PAX</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>DRCLSD</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>TYPE</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>A/CREGSN</p>
                </div>
              </Cell>
              <Cell>
                <div >
                  <p>A/CTYPE</p>
                </div>
              </Cell>
            </Row>
            {listData.map((item, index) => {
              return (
                <Row key={index}>
                  <Cell>Header 1</Cell>
                  <Cell>Header 2</Cell>
                  <Cell>Header 1</Cell>
                  <Cell>Header 2</Cell>
                  <Cell>Header 1</Cell>
                  <Cell>Header 2</Cell>
                  <Cell>Header 1</Cell>
                  <Cell>Header 2</Cell>
                  <Cell>Header 1</Cell>
                  <Cell>Header 2</Cell>
                  <Cell>Header 1</Cell>
                  <Cell>Header 2</Cell>
                  <Cell>Header 1</Cell>
                  <Cell>Header 2</Cell>
                </Row>
              )
            })}

          </StickyTable>
        </div>
      </div>
    );
  }
}