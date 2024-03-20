let roomDimensions = {
    width:50,
    length:100,
    getArea:()=>{
        return width*length;
    }
};
const boundGetArea =roomDimensions.getArea.bind(roomDimensions);