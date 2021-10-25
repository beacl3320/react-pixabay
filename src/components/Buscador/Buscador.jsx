const Buscador = () => {
    return(
        <form>
            <div className="row">
                <div className="form-group col-md-10">
                    <input type="text" className="form-control form-control-lg btn-block" placeholder="Busca tu imagen" />
                </div>
                <div className="form-group col-md-2">
                    <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..." />
                </div>
            </div>
        </form>
    )
}

export default Buscador;
