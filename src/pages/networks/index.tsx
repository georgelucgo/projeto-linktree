import { FormEvent, useState, useEffect } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";

import { db } from "../../services/firebaseConnection";

import { setDoc, doc, getDoc } from "firebase/firestore";

export function Networks(){
    const [github, setGithub] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [instagram, setInstagram] = useState('')

    useEffect(()=>{
        function loadLinks(){
            const docRef = doc(db,'social', 'link')
            getDoc(docRef)
            .then((snapshot)=> {
               if(snapshot.data() !== undefined){
                setGithub(snapshot.data()?.github)
                setLinkedin(snapshot.data()?.linkedin)
                setInstagram(snapshot.data()?.instagram)
               }
            })
        }
        loadLinks()
    },[])

    function handleRegister(e: FormEvent){
        e.preventDefault();

        setDoc(doc(db, 'social', 'link'), {
            github: github,
            linkedin: linkedin,
            instagram: instagram
        })
        .then(()=>{
            console.log('CADASTRADOS COM SUCESSO');
            
        })
        .catch((error)=>{
            console.log('ERRO AO SALVAR: ' + error);
            
        })

    }

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>
            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">Link do Github</label>
                <Input 
                type='url'
                placeholder="Digite a url do github..."
                value={github}
                onChange={(e)=> setGithub(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link do Linkedin</label>
                <Input 
                type='url'
                placeholder="Digite a url do linkedin..."
                value={linkedin}
                onChange={(e)=> setLinkedin(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
                <Input 
                type='url'
                placeholder="Digite a url do github..."
                value={instagram}
                onChange={(e)=> setInstagram(e.target.value)}
                />

            <button
            type="submit"
            className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
            >Salvar links</button>
            </form>

           
        </div>
    )
}