export const NameList =()=>{
    const names =["anusha","pravasthi","neil","srri","pravasthi"];
    const nameList = names.map((name,index) =><h2 key={index}>{index}{name}</h2>);
    return <div>{nameList}</div>;
}