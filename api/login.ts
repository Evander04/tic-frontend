import { LoginResponse, LoginType } from "@/type/loginType";

export async function loginWS(formData:LoginType) {
    try {        
        const url = `${process.env.HOST}/login`;
        const params = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(formData)
        };

        const response = await fetch(url, params);
        return response;

    } catch (error) {
        console.log("login error=>"+error);        
        return
    }
}