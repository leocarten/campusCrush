var hasJoined = false;

export function joinedStatus() {
    return hasJoined;
}
export function updateJoinedStatus(){
    if(hasJoined == false){
        hasJoined = true;
    }
}