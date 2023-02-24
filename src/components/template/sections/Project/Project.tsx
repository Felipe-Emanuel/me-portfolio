interface ProjectProps{
    data: {
        acessLlink: string;
        gitLlink: string;
        id: string;
        image: string;
        name: string;
    }
}

export function Project({data}: ProjectProps){
    return (
        <div>
            <h1>Projeto</h1>
        </div>
    )
}