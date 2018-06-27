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
        // var elmnt = document.getElementById("bodyTable");
        const x = this.table.scrollLeft;
        this.tHead.style.left = `${-x}px`;
        this.thFist.style.left = `${x}px`;
        this.tdFist.style.left = `${x}px`;
        var z = document.querySelectorAll('tbody td:nth-child(1)');
        z.forEach((item) => {
            item.style.left = `${x}px`;
        })
    }
    render() {
        return (
            <div className="container" >
                <div className="col-xs-12"  >
                    <div className="row"  >
                        <div className="table-responsive" ref={(el) => { this.table = el }} onScroll={this.scrollTable}>
                            <table className="table table-bordered table-hover">
                                <thead ref={ref => (this.tHead = ref)}>
                                    <tr>
                                        <th ref={ref => (this.thFist = ref)}>Country</th>
                                        <th>Languages</th>
                                        <th>Population</th>
                                        <th>Median Age</th>
                                        <th>Area (Km²)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td ref={ref => (this.tdFist = ref)}>Argentina</td>
                                        <td>Spanish (official), English, Italian, German, French</td>
                                        <td>41,803,125</td>
                                        <td>31.3</td>
                                        <td>2,780,387</td>
                                    </tr>
                                    <tr>
                                        <td ref={ref => (this.tdFist = ref)}> Australia</td>
                                        <td>English 79%, native and other languages</td>
                                        <td>23,630,169</td>
                                        <td>37.3</td>
                                        <td>7,739,983</td>
                                    </tr>
                                    <tr>
                                        <td>Greece</td>
                                        <td>Greek 99% (official), English, French</td>
                                        <td>11,128,404</td>
                                        <td>43.2</td>
                                        <td>131,956</td>
                                    </tr>
                                    <tr>
                                        <td>Luxembourg</td>
                                        <td>Luxermbourgish (national) French, German (both administrative)</td>
                                        <td>536,761</td>
                                        <td>39.1</td>
                                        <td>2,586</td>
                                    </tr>
                                    <tr>
                                        <td>Russia</td>
                                        <td>Russian, others</td>
                                        <td>142,467,651</td>
                                        <td>38.4</td>
                                        <td>17,076,310</td>
                                    </tr>
                                    <tr>
                                        <td>Sweden</td>
                                        <td>Swedish, small Sami- and Finnish-speaking minorities</td>
                                        <td>9,631,261</td>
                                        <td>41.1</td>
                                        <td>449,954</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ScrollTable;