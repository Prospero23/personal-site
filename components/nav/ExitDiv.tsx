import { SetStateAction } from "react"

interface ExitDivProps{
  toggleShowing: (value: SetStateAction<boolean>) => void
}
// TODO: why is this causing slight shift
export default function ExitDiv({toggleShowing}: ExitDivProps){
  return(
<div className={`absolute w-screen h-screen cursor-pointer bg-transparent z-20`}
    onClick={() => toggleShowing(false)}/>
  )
}
