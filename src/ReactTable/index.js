import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import "./index.css";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class ReactTableCus extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <section class="">
  <div class="container">
    <table>
      <thead>
        <tr class="header">
          <th>
            Table attribute name
            <div>Table attribute name</div>
          </th>
          <th>
            Value
            <div>Value</div>
          </th>
          <th>
            Description
            <div>Description</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>align</td>
          <td>left, center, right</td>
          <td>Not supported in HTML5. Deprecated in HTML 4.01. Specifies the alignment of a table according to surrounding text</td>
        </tr>
        <tr>
          <td>bgcolor</td>
          <td>rgb(x,x,x), #xxxxxx, colorname</td>
          <td>Not supported in HTML5. Deprecated in HTML 4.01. Specifies the background color for a table</td>
        </tr>
        <tr>
          <td>border</td>
          <td>1,""</td>
          <td>Specifies whether the table cells should have borders or not</td>
        </tr>
        <tr>
          <td>cellpadding</td>
          <td>pixels</td>
          <td>Not supported in HTML5. Specifies the space between the cell wall and the cell content</td>
        </tr>
        <tr>
          <td>cellspacing</td>
          <td>pixels</td>
          <td>Not supported in HTML5. Specifies the space between cells</td>
        </tr>
        <tr>
          <td>frame</td>
          <td>void, above, below, hsides, lhs, rhs, vsides, box, border</td>
          <td>Not supported in HTML5. Specifies which parts of the outside borders that should be visible</td>
        </tr>
        <tr>
          <td>rules</td>
          <td>none, groups, rows, cols, all</td>
          <td>Not supported in HTML5. Specifies which parts of the inside borders that should be visible</td>
        </tr>
        <tr>
          <td>summary</td>
          <td>text</td>
          <td>Not supported in HTML5. Specifies a summary of the content of a table</td>
        </tr>
        <tr>
          <td>width</td>
          <td>pixels, %</td>
          <td>Not supported in HTML5. Specifies the width of a table</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
    );
  }
}

export default ReactTableCus
