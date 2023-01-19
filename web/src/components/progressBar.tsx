interface ProgressBarProps{
    progress:number
}
export function ProgressBar(props: ProgressBarProps){
  
    return(
        <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
        <div className='h-3 rounded-xl bg-yellow-500' style={{width: `${props.progress}%`}} role="progresbar" aria-label="Progresso de hábitos nesse dia." aria-valuenow={props.progress}></div>
            </div>
    )
}