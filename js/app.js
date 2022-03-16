export const min = (entry) => {
        let tmp=entry[0]

        for (let i = 0; i < entry.length; i++) {
            if(entry[i]<tmp)
            tmp=entry[i]
        }
        return tmp;
    
}
export const moyen = (entry) => {
    let tmp=0

    for (let i = 0; i < entry.length; i++) {
        tmp+=entry[i]
    }
    tmp/=entry.length
    return tmp;

}
export const nostring = (entry) => {
    let t=parseInt(entry)
    return t;
}
export const pair = (entry) => {
    let tmp=[[],[]]
    for (let i = 0; i < entry.length; i++) {
        if(entry[i]%2==1){
            tmp[[1][0]].push(entry[i])
        }
        if(entry[i]%2==0){
            tmp[[0][0]].push(entry[i])
        }
    }
    return tmp;
}