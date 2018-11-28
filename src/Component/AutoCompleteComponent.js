import React, {Component} from "react";

export class AutoCompleteComponent extends Component {

    degisimKontrol = (e) => {
        // e.target.value
    };

    render(){
        return(<input className="w-100 mb-3 form-control" onChange={this.degisimKontrol}  type="text" id="inputAutoComp" name="inputAutoComp" placeholder="Aramak istediğiniz kelimeyi girin." />
        )
    }
}
