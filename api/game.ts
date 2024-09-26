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