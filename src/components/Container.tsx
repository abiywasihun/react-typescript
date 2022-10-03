type ContianerProps={
    styles:React.CSSProperties
}
export const Container=(props:ContianerProps)=>{
    return(
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}