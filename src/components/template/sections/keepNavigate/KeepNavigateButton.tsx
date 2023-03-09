interface keepNavigateButtonProps{
    text: string
    isRight?: boolean
    buttons: boolean
    onClick: () => void
}

export function KeepNavigateButton({text, isRight, buttons, onClick}: keepNavigateButtonProps) {

    return (
        
        <button
          className={`active:text-white dark:active:text-white hover:scale-150 absolute top-32 ${isRight ? 'right-4' : '-left-2'}  z-30 bg-trans py-2 px-4
            text-blueLight dark:text-orangeDark text-4xl transition-all duration-150 ease-in  
            ${buttons ? "block" : "hidden"}
           `}
          onClick={() => onClick()}
        >
          {text}
        </button>

    )
}