// interface HabitDayProps{
    //     completed: number
    // }
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useState } from 'react';
import { HabitsList } from './HabitsList';
import { ProgressBar } from './progressBar';

interface HabitDayProps{
    date: Date
    defaultCompleted?: number
    amount?: number
}

export function HabitDay({defaultCompleted= 0, amount = 0, date}: HabitDayProps){
    const [ completed, setCompleted] = useState(defaultCompleted)

    const completedPercentage = amount > 0 ? Math.round(completed/ amount* 100) : 0
    const dayAndMonth = dayjs(date).format('DD/MM');
    const dayOfWeek = dayjs(date).format('dddd');

    function handleCompletedChanged(){
            setCompleted(completed)
    }
    return (
        <Popover.Root>

        <Popover.Trigger className={clsx('w-10 h-10  rounded-lg transition colors focus:outline-none, focus:ring-2 focus:ring-habittttt, focus:ring-offset-3 focus:ring-offset-background', {
            'bg-zinc-900 border border-zinc-800': completedPercentage === 0,
            'bg-habittttt border-habitttt': completedPercentage >0 && completedPercentage <= 20,
            'bg-habittt border-habitttt': completedPercentage >20 && completedPercentage <= 40,
            'bg-habittt border-habittt': completedPercentage >40 && completedPercentage <= 60,
            'bg-habitt border-habitt': completedPercentage >60 && completedPercentage <= 80,
            'bg-habit border-habit': completedPercentage >80 && completedPercentage <= 100,
        })}/>
        <Popover.Portal>
            <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
                <span className='font-semibold text-zinc-400'>{dayOfWeek}</span>
                <span className='mt-1 font-extrabold leading-tight text-3xl'>{dayAndMonth}</span>

               <ProgressBar progress={completedPercentage}/>

                  <HabitsList date={date} onCompletedChanged={handleCompletedChanged}/>
                <Popover.Arrow height={8}className='fill-zinc-900'/>
            </Popover.Content>
        </Popover.Portal>
        </Popover.Root>
      
    )
}