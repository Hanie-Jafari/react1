export default function FilterBtn(props){
    return(
        <button type="button" className="btn toggle-btn" aria-pressed={props.isPressed} onClick={() => props.FilterClick(props.name)}>
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    )
}