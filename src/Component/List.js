import React, {Component, Fragment} from "react";

import {SehirContext} from "../Context/SehirContext";


export class List extends Component {

    renderList = (bilgiler) => {
        return bilgiler.map((item, i) => {
            return <div className="card" key={i}>
                <img src={item.Resim} className="card-img" />
                <div className="card-header">{item.Ad}</div>
                <div className="card-body">{item.Aciklama}</div>
            </div>
        })
    };

    render() {
        return (
            <Fragment>
                <div className="jumbotron">
                    <div className="row">
                        <div className="card-columns">

                            <SehirContext.Consumer>
                                {(context) => (
                                        this.renderList(context.state.list)
                                    )}
                            </SehirContext.Consumer>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}