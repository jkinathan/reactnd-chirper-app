export const SETAUTHEDUSER = "SETAUTHEDUSER"


export function setAuthedUser(id){
    return {
        type: SETAUTHEDUSER,
        id,
    }
}