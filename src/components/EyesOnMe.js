// Code EyesOnMe Component Here

function EyesOnMe(){

    function focusOn(){
        console.log("Good!")
    }

    function blurOn(){
        console.log("Hey! Eyes on me!")
    }

    return(
        <div>
            <button onFocus={focusOn}  onBlur={blurOn}>Eyes on me </button>

        </div>
    )
}
export default EyesOnMe