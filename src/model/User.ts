import { ReactNode } from "react"

export interface User {
    uid: string
    email: string
    name: string
    token: string
    provider: ReactNode
    imageUrl: string 
}