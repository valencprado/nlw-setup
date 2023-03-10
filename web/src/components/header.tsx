import { Plus, X } from "phosphor-react";
import logo from '../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewHabitForm } from "./newHabitForm";
export function Header(){
    return(<div>
        <div className='w-full max-w-3xl mx-auto flex items-center justify-between ml-2 focus:outline-none focus:ring-2 focus:ring-habittt focus:ring-offset-2 focus:ring-offset-background'>
        <img src={logo} alt='habits'/>
          </div>
        <Dialog.Root>
        <Dialog.Trigger type='button'
        className='border border-amber-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-amber-300'
        >
        <Plus size={20} className="text-amber-500"/>
          Novo Hábito

        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-habittt focus:ring-offset-2 focus:ring-offset-background">
              <X size={24} aria-label="fechar"/>
            </Dialog.Close>
           <Dialog.Title className="text-3xl leading-tight text-white font-extrabold">
            Criar Hábito
           </Dialog.Title>
          <NewHabitForm/>
          </Dialog.Content>
        </Dialog.Portal>
        </Dialog.Root>
        </div>
    )
}