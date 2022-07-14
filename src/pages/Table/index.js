import React from 'react'

function Table({ labels, data }) {
  return (
    <table class="table">
        <thead>
            <tr>
                {labels.map((label, index) => (
                    <th scope="col" key={index}>{label}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Table