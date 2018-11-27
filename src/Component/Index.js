import React, {Component, Fragment} from "react";

import {SehirContext} from "../Context/SehirContext";

export class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Ad: "",
            Aciklama: "",
            Resim: ""
        }
    }

    degisimKontrol = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    render() {
        return (
            <Fragment>
                <SehirContext.Consumer>
                    {(context) => (
                        <div className="jumbotron">
                            <h1 className="display-4 text-uppercase">Şehrini tanıt ve Kaydet!</h1>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Şehir Adı</label>
                                <input name="Ad" type="text" onChange={this.degisimKontrol} className="form-control" placeholder="Şehir Adı"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Şehir Açıklaması</label>
                                <input name="Aciklama" type="text" onChange={this.degisimKontrol} className="form-control" placeholder="Açıklama"/>
                                <small className="form-text text-muted">Şehriniz Hakkında Birkaç açıklama yazın.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Şehir Resmi</label>
                                <input name="Resim" type="text" onChange={this.degisimKontrol} className="form-control" placeholder="http:// resmin urlsini "/>
                            </div>
                            <button id="btnKaydet" onClick={()=>context.btnKaydet(this.state)} className="btn btn-primary">Kaydet</button>
                        </div>
                    )}
                </SehirContext.Consumer>
            </Fragment>
        );
    }

}