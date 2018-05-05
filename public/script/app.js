'use strict';

var showDetail = true;

var tampil = function tampil() {
    showDetail = !showDetail;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: tampil },
            showDetail ? 'Hide Details' : 'Show Details'
        ),
        showDetail ? React.createElement(
            'p',
            null,
            'Hey these are some details you can now see'
        ) : undefined
    );
    ReactDOM.render(template, appRoot);
};
render();
