export const NameList =()=>{
    const names =["anusha","pravasthi","neil","srri"];
    const nameList = names.map((name) =><h2 key={name}>{name}</h2>);
    return <div>{nameList}</div>;
}