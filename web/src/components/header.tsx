import { Plus } from "phosphor-react";
import logo from '../assets/logo.svg'
export function Header(){
    return(<div>
        <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
        <img src={logo} alt='habits'/>
          </div>
        <button type='button'
        className='border border-amber-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-amber-300'
        >
        <Plus size={20} className="text-amber-500"/>
          Novo Hábito
        </button>
        </div>
    )
}