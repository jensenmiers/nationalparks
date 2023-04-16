import { PuffLoader } from "react-spinners";

function Loading(){

    const cssOverride = {position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%, -50%)"}

    return(
        <div>
            <PuffLoader cssOverride={cssOverride}/>
        </div>
    )
}

export default Loading;