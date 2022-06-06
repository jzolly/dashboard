
const TopData = (props) => {
    return (
        <div className={props.whichTop}>
        <h2> {props.whichTop} </h2>
        <p className={props.data}>{props.data}</p>
        </div>
    );
}

export default TopData;