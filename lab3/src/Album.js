export default function Album(props) {
    let styles = {borderRadius: "100px"};
    return (
        <div id="album" onclick="changeAlmbum()">
            <img style={styles} src={props.coverImg} alt={props.name} height="40px"/>
            <span>{props.name}</span>
        </div>
    )
}