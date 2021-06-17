
export function Room({name,icon}) {
    return (
        <div style={{
            marginTop:25,
            width: 160,
            height: 160,
            backgroundColor: "#F1F1F1",
            borderRadius: 10,
            position: "relative",
            display:'flex',
            justifyContent:"center",
            fontSize:48,
            alignItems:'center'
        }}>{icon}
            <div style={{
                backgroundColor: "#2E294E",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 25,
                borderRadius: "10px 10px 0px 0px",
                fontFamily:'Poppins',
                color:"white",
                fontSize:16,
                display:'flex',
                justifyContent:"center"
            }}>{name}</div>
            <div style={{
                backgroundColor: "#2E294E",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: 25,
                borderRadius: "0px 0px 10px 10px",
            }}></div>
        </div>
    )
}