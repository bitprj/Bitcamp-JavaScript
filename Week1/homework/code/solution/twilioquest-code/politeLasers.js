function getLaserSetting(magicword){
    if(magicword == 'please'){
        return 'OFF';
    }
    else {
        return 'ON';
    }
}

const currentSetting = getLaserSetting("please");
console.log(currentSetting);