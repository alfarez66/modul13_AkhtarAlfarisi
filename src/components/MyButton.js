const MyButton = (props) =>{
    return(
        <div>
            <button onClick={()=>props.clicked()}>More Info!</button>
        </div>
    )
}