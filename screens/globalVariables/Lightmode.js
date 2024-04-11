let isLightMode = false;

export function switchLightMode(value){
    if(value === 0){
        isLightMode = false;
    } else {
        isLightMode = true;
    }
}

export function getCurrentMode(){
    return isLightMode;
}
