function Box() {
    return (
        <div 
            onMouseOut={e => console.log("Вы вывели курсор из квадрата")}
            onMouseOver={e => console.log("Вы навели курсор на квадрат")}
        />
      );
}

export default Box;