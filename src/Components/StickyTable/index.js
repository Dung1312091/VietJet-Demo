import React, { Component } from "react";
// import dragscroll from 'dragscroll';
import "./style.css";
const listData = [
  {
    Name: "John Smith",
    Town: "Town",
    County: "County",
    Age: "Age",
    Profession: "Profession",
    AnualIncome: "Anual Income",
    MatitalStatus: "Matital Status",
    Children: "Children"
  },
  {
    Name: "John Smith",
    Town: "Town",
    County: "County",
    Age: "Age",
    Profession: "Profession",
    AnualIncome: "Anual Income",
    MatitalStatus: "Matital Status",
    Children: "Children"
  },
  {
    Name: "John Smith",
    Town: "Town",
    County: "County",
    Age: "Age",
    Profession: "Profession",
    AnualIncome: "Anual Income",
    MatitalStatus: "Matital Status",
    Children: "Children"
  },
  {
    Name: "John Smith",
    Town: "Town",
    County: "County",
    Age: "Age",
    Profession: "Profession",
    AnualIncome: "Anual Income",
    MatitalStatus: "Matital Status",
    Children: "Children"
  },
  {
    Name: "John Smith",
    Town: "Town",
    County: "County",
    Age: "Age",
    Profession: "Profession",
    AnualIncome: "Anual Income",
    MatitalStatus: "Matital Status",
    Children: "Children"
  },
  {
    Name: "John Smith",
    Town: "Town",
    County: "County",
    Age: "Age",
    Profession: "Profession",
    AnualIncome: "Anual Income",
    MatitalStatus: "Matital Status",
    Children: "Children"
  },
  {
    Name: "John Smith",
    Town: "Town",
    County: "County",
    Age: "Age",
    Profession: "Profession",
    AnualIncome: "Anual Income",
    MatitalStatus: "Matital Status",
    Children: "Children"
  },
  {
    Name: "John Smith",
    Town: "Town",
    County: "County",
    Age: "Age",
    Profession: "Profession",
    AnualIncome: "Anual Income",
    MatitalStatus: "Matital Status",
    Children: "Children"
  },
  {
    Name: "John Smith",
    Town: "Town",
    County: "County",
    Age: "Age",
    Profession: "Profession",
    AnualIncome: "Anual Income",
    MatitalStatus: "Matital Status",
    Children: "Children"
  },
  {
    Name: "John Smith",
    Town: "Town",
    County: "County",
    Age: "Age",
    Profession: "Profession",
    AnualIncome: "Anual Income",
    MatitalStatus: "Matital Status",
    Children: "Children"
  }
];
class ScrollTable extends Component {
  scrollTable = () => {
    var elmnt = document.getElementById("bodyTable");
    var x = elmnt.scrollLeft;
    this.tHead.style.left = `${-x}px`;
    this.fistTh.style.left = `${x}px`;
    let fistTd = this.rootWrap.querySelectorAll('.fisrTable');
    fistTd.forEach(function(userItem) {
      userItem.style.left = `${x}px`;
    });
  };
  render() {
    return (
      <div ref={(ref)=> this.rootWrap = ref}>
        <div>Day la header</div>
        <div>Day la Content</div>
        <table>
          <thead ref={ref => (this.tHead = ref)}>
            <tr>
              <th ref={ref => (this.fistTh = ref)}>Name</th>
              <th>Town</th>
              <th>County</th>
              <th>Age</th>
              <th>Profession</th>
              <th>Anual Income</th>
              <th>Matital Status</th>
              <th>Children</th>
            </tr>
          </thead>
          <tbody onScroll={this.scrollTable} id="bodyTable" >
            {listData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="fisrTable">John Smith</td>
                  <td>Macelsfield</td>
                  <td>Cheshire</td>
                  <td>52</td>
                  <td>Brewer</td>
                  <td>£47,000</td>
                  <td>Married</td>
                  <td>2</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ScrollTable;