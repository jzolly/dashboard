const TableContent = (props) => {
    return (
    <tr>
        <td className={props.tableGraph}></td>
        <td className={props.tableData}></td>
    </tr>
    ); 
}

export default TableContent;