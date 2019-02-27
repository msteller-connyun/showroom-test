import {LitElement, html} from 'lit-element';

class MyComponent extends LitElement {

    constructor(props) {
        super(props);
        this._data = [];
    }

    setData(data) {
        this._data = data;
        this.requestUpdate();
    }
    render() {
        return html `<ul>${this._data.map(dataItem=>html`<li>${dataItem}</li>`)}</ul>`;
    }
}


customElements.define('my-component', MyComponent);
