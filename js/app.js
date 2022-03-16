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