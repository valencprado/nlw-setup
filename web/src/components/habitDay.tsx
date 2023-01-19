// interface HabitDayProps{
//     completed: number
// }
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { ProgressBar } from './progressBar';

interface HabitDayProps{
    completed: number
    amount: number
}

export function HabitDay(props: HabitDayProps){
    const completedPercentage = Math.round(props.completed / props.amount * 100)
    return (
        <Popover.Root>

        <Popover.Trigger className={clsx('w-10 h-10  rounded-lg', {
            'bg-zinc-900 border border-zinc-800': completedPercentage === 0,
            'bg-habit border-habit': completedPercentage >0 && completedPercentage <= 20,
            'bg-habitt border-habitt': completedPercentage >20 && completedPercentage <= 40,
            'bg-habittt border-habittt': completedPercentage >40 && completedPercentage <= 60,
            'bg-habitttt border-habitttt': completedPercentage >60 && completedPercentage <= 80,
            'bg-habittttt border-habittttt': completedPercentage >80 && completedPercentage <= 100,
        })}/>
        <Popover.Portal>
            <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
                <span className='font-semibold text-zinc-400'>Quinta-feira</span>
                <span className='mt-1 font-extrabold leading-tight text-3xl'>19/01</span>

               <ProgressBar progress={completedPercentage}/>


                <Popover.Arrow height={8}className='fill-zinc-900'/>
            </Popover.Content>
        </Popover.Portal>
        </Popover.Root>
      
    )
}