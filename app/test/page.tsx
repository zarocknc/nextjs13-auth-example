'use client';
import { useSession, signIn, signOut } from "next-auth/react";
//import React from "react";

export default function Testeo() {
    const {data: session} = useSession();
    if (session) {
        return (
            <div>
                <h1 className="text-3xl">Iniciado session como: {session.user?.email}</h1>
                <h1 className="text-3xl">Nombre: {session.user?.name}</h1>
                <h1 className="text-3xl">Avatar:<img src={session.user?.image as string} alt="avatar image" /></h1>
                
                <button onClick={() => signOut()} className="btn btn-secondary">Cerrar session</button>
            </div>
        )
    }
    return (<div>
        <h1 className="text-3xl">Sesion no iniciada</h1>
        <button onClick={() => signIn()} className="btn btn-primary">Inicias session</button>
    </div>)
}