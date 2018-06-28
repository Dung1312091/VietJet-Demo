import React, { Component } from 'react';

import { StickyTable, Row, Cell } from 'react-sticky-table';
import 'react-sticky-table/dist/react-sticky-table.css';
import "./style.css"
const listData = [];
for (let i = 0; i < 100; i++) {
  listData.push(i)
}
export default class BasicExample extends Component {
  render() {
    return (
      <div>
        <div style={{  height: '800px', width:'100%' }}>
          <StickyTable> 
            <Row className="aaa">
              <Cell >
                <div className="textCenter" >
                  <p>FLIGHT NO.</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter"  >
                  <p>STD</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter" >
                  <p>STA</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter" >
                  <p>ATD</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter" >
                  <p>ATA</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter" >
                  <p>ROUTE</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter" >
                  <p>GATE</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter" >
                  <p>TAI</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter" >
                  <p>BAY</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter" >
                  <p>PAX</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter" >
                  <p>DRCLSD</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter" >
                  <p>TYPE</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter" >
                  <p>A/CREGSN</p>
                </div>
              </Cell>
              <Cell>
                <div className="textCenter" >
                  <p>A/CTYPE</p>
                </div>
              </Cell>
            </Row>
            {listData.map((item, index) => {
              return (
                <Row key={index} onClick={()=> {console.log(item)}}>
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                  <Cell>
                    <div className="bbb">AAAAA</div>
                  </Cell>
                </Row>
              )
            })}

          </StickyTable>
        </div>
      </div>
    );
  }
}