interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     customProp?: string;
     children: string;
}

export function Button (props:ButtonProps){
    return(
        <>
        <button onClick={props.onClick}>{props.children}</button>
        </>
    )
}