import React, { Component } from 'react';

class Resultado extends Component{
    mostrarImagenes = () => {
        /* console.log(this.props.imagenes) */
        const imagenes = this.props.imagenes;

        if(imagenes.lenght === 0) return null;

        console.log(imagenes);

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">

                </div>
            </React.Fragment>
        )
    }
    render() {

        return(
            <div>
                {this.mostrarImagenes()}
            </div>
        );

    }
    
}

export default Resultado;
