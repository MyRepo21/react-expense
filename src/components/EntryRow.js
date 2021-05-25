import React from "react";

function EntryRow() {
  //const handleSubmit = (e) => {
  //   e.preventDefault();
  return (
    <div>
      <table className="expenseTbl">
        <th>Date</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Vendor</th>
        <tr>
          <td>
            <input type="date"></input>
          </td>
          <td>
            <input type="description" placeholder="description"></input>
          </td>
          <td>
            <input type="amount" placeholder="amount"></input>
          </td>
          <td>
            <input type="vendor" placeholder="vendor"></input>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default EntryRow;
