export const Alert =({ children,type = "success"}) =>{
    return <div
             style={{backgroundColor: type ==="success"?"yellow":"red",
                color:"blue",
                padding:"16px",
                borderRadius:"8px",
                marginBottom:"16px"
             } }>
        {children}</div>
};