'use client'

import AuthContext from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { getSession, getToken, removeSession, setSession, setToken } from '@/context/storage';
import Home from './login/page';

export function Providers({children}: { children: React.ReactNode }) {
    const [auth, setAuth] = useState<any>(undefined);
    const router= useRouter();
  
    //Update context
	useEffect(() => {		                        		
		(async () => {
			const token = await getToken()
			const session= await getSession()			
			if(token) {
				setAuth({
					token,
					session			
				})
			} else {
				setAuth(null);
			}
		})();
	}, []);
    const logIn = (session:any) => {		
        //tokens
        const tokenUser = session.token;		

        //local storage
        setToken(tokenUser)
        setSession(JSON.stringify(session))		

        //Update State
        setAuth({
            session:session,
            token:tokenUser,			
        });
	}

    //Close Session
	const signOut = () => {
		if (auth) {		
			setAuth(null)
			removeSession()
			router.push("/")
		}
	}

    //Store and update component
	const authData:any = useMemo(
		() => ({
			auth,
			logIn,
			signOut,
		}),
		[auth]
	);	
  return (
    <AuthContext.Provider value={authData}>
        { auth ? 
            children
            :
            <Home/>
        }
    </AuthContext.Provider>   
  )
}