import loadHandler from '../handler/loadHandler.js';

const loadListener = () => {
    window.addEventListener('load', loadHandler);
};

export default loadListener;
