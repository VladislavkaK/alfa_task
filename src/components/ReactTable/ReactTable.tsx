import React, { useState } from 'react';
import Table from "react-table";
import { range }  from '../../utils/utils';
import { Link } from 'react-router-dom';
import "react-table/react-table.css";
const namor = require('namor');

const newPerson = () => {
    const statusChance = Math.random();
    const url = namor.generate({ words: 1, numbers: 0 });
    const firstName = <Link to={{pathname: `/data-for-table/${url}`}} >{url}</Link>
    
    return {
        firstName: firstName,
        lastName: namor.generate({ words: 1, numbers: 0 }),
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status:
            statusChance > 0.66
                ? "relationship"
                : statusChance > 0.33 ? "complicated" : "single"
    };
};

function makeData(len = 553) {
    return range(len).map(d => {
        return {
            ...newPerson(),
            children: range(10).map(newPerson)
        };
    });
}


const ReactTable = (props: any) => {
    const [data, setData] = useState(makeData);

    return (
        <div>
            <Table
                style={{
                    width: '700px',
                }}
                data={data}
                filterable
                defaultFilterMethod={(filter, row) =>
                    String(row[filter.id]) === filter.value}
                columns={[
                    {
                        Header: "Name",
                        columns: [
                            {
                                Header: "First Name (Sorted by Length, A-Z)",
                                accessor: "firstName",
                                sortMethod: (a: any, b: any) => {
                                    if (a.length === b.length) {
                                        return a > b ? 1 : -1;
                                    }
                                    return a.length > b.length ? 1 : -1;
                                }
                            },
                            {
                                Header: "Last Name (Sorted in reverse, A-Z)",
                                id: "lastName",
                                accessor: (d: any) => d.lastName,
                                sortMethod: (a: any, b: any) => {
                                    if (a === b) {
                                        return 0;
                                    }
                                    const aReverse = a.split("").reverse().join("");
                                    const bReverse = b.split("").reverse().join("");
                                    return aReverse > bReverse ? 1 : -1;
                                }
                            }
                        ]
                    },
                    {
                        Header: "Info",
                        columns: [
                            {
                                Header: "Age",
                                accessor: "age"
                            },
                            {
                                Header: "Over 21",
                                accessor: "age",
                                id: "over",
                                Cell: ({ value }) => (value >= 21 ? "Yes" : "No"),
                                filterMethod: (filter: any, row: any) => {
                                  if (filter.value === "all") {
                                    return true;
                                  }
                                  if (filter.value === "true") {
                                    return row[filter.id] >= 21;
                                  }
                                  return row[filter.id] < 21;
                                },
                                // группировка кому можно выпить
                                Filter: ({ filter, onChange }) =>
                                  <select
                                    onChange={event => onChange(event.target.value)}
                                    style={{ width: "100%" }}
                                    value={filter ? filter.value : "all"}
                                  >
                                    <option value="all">Show All</option>
                                    <option value="true">Can Drink</option>
                                    <option value="false">Can't Drink</option>
                                  </select>
                            }
                        ]
                    }
                ]}
                defaultPageSize={10}
                className="-striped -highlight"
            />
        </div>
    )
}

export default ReactTable;