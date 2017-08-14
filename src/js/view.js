import { slider, mapTemplate } from './templates';

export default class View {

    constructor() {
        //templates
        this.map = document.getElementById('map');
        this.slider = document.getElementById('slider');
    }

    render() {
        //initial templates
        this.slider.innerHTML = slider(0);
        this.map.innerHTML = mapTemplate(0);

        //events
        const range = document.getElementById('timeRange')
        range.addEventListener('input', () => {
            this.renderMap(range.value);
        })
    }

    renderMap(val) {
        this.map.innerHTML = mapTemplate(val);
    }
}