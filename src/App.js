import React, {Component, Fragment} from 'react';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Index} from "./Component/Index";
import {List} from "./Component/List";
import {SehirContext} from "./Context/SehirContext";


class App extends Component {
    state = {
        list : []
    };


    btnKaydet = (e) => {
        const {Ad, Aciklama, Resim} = e;

        let sehirList = this.state.list;

        sehirList.push({
            Ad: Ad,
            Aciklama: Aciklama,
            Resim: Resim,
        });

        this.setState({
            list: sehirList
        });

    };

    render() {

        return (
            <Router>
                <Fragment>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow fixed-top">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                                <img src="https://vignette.wikia.nocookie.net/logopedia/images/f/f0/Washington_capitals_alternate_logo.gif/revision/latest?cb=20130929140614" width="30" height="30"
                                     className="d-inline-block align-top" alt=""/>
                                Şehir Rehberi
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Anasayfa <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Sehirler">Şehirler</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container" style={{marginTop: 80 + 'px'}}>
                        <SehirContext.Provider value={{
                            btnKaydet: this.btnKaydet,
                            state : this.state
                        }}>
                            <Route path="/" exact component={Index}/>
                            <Route path="/Sehirler" component={List}/>
                        </SehirContext.Provider>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default App;
