export const CustomButton =({ text})=>{
   const name = "Codevoilution";
    const handleClick = ()=>{
     console.log(`hey ${name},you clicked ${text}`); // alert ("thanks for liking");
    };
    return <button onClick={handleClick}>{text}</button>
 //return <button onClick = { () => alert("thanks for liking")}>like me</button>;
 };
