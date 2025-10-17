import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  }

 
  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1 className='text-2xl font-thin text-white'>Focus Screen</h1>
      <input className="bg-white py-2 rounded-md text-black " ref={inputRef} type="text" placeholder="Type something..." />
      <button
       className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      onClick={handleFocus}>Focus Input</button>
    </div>
  )
}
