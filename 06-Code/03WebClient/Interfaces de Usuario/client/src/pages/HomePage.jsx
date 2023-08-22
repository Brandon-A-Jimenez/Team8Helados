function HomePage() {
    const centeredStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
    };

    return (
        <div style={centeredStyles}>
            <h1>BIENVENIDOS</h1>
            <h2>Desarrollo de Aplicaciones Web</h2>
            <h2>Grupo 8</h2>
            <h2>2023</h2>
            <br/>
            <img src="https://ablog.managemart.com/images/o_1dnpgpc711vd4r5d5e781f10vs8.png" alt="Imagen Centrada" />
        </div>
    );
}


export default HomePage