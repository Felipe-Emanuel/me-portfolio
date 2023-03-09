import { useProfile } from "@/data/hook/useProfile";

export function GetUserInfo(){
    const { name } = useProfile();

    const helloUser = name ? `Olá, ${name}` : "Olá!";

    return {
        helloUser
    }
}