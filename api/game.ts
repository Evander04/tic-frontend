import { MoveRequestType } from "@/type/gameType";

export async function initGameWS(auth:any) {
    try {        
        const url = `${process.env.HOST}${process.env.PREFIX_GAME}/init`;
        const params = {
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${process.env.AUTH_PREFIX} ${auth.token}`,
            },            
        };

        const response = await fetch(url, params);
        return response;

    } catch (error) {
        console.log("login error=>"+error);        
        return
    }
}

export async function makeMoveWS(body:MoveRequestType,auth:any) {
    try {        
        const url = `${process.env.HOST}${process.env.PREFIX_GAME}/makeMove`;
        const params = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`${process.env.AUTH_PREFIX} ${auth.token}`,
            },          
            body: JSON.stringify(body)
        };

        const response = await fetch(url, params);
        return response;

    } catch (error) {
        console.log("login error=>"+error);        
        return
    }
}