import { useProgress } from "@react-three/drei"

export default function LoadingScreen(){

    const {progress} = useProgress()
    return(
       <div>
        <p className="text-8xl">{`${progress}`}</p>
       </div>
    )
}