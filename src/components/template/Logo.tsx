export function Logo() {
  return (
    <div
      className={`
        border-2 border-gray-800 dark:border-white
        flex flex-col items-center justify-center
        w-12 h-12 rounded-full  
        bg-white dark:bg-gray-900  
        `}
    >
        <div className='h-3 w-3 rounded-full bg-red-600 mb-0.5'/>
        <div className="flex mt-0.5">

        <div className='h-3 w-3 rounded-full bg-yellow-500 mr-0.5'/>
        <div className='h-3 w-3 rounded-full bg-green-600 ml-0.5'/>
        </div>
    </div>
  );
}
