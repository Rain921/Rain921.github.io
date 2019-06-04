const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '10px',
    container: {
        maxWidth: '1145px',
        fields: '55px'
    },
    breakPoints: {
        md: {
            width: "992px",
            fields: "55px"
        },
        sm: {
            width: "776px",
            fields: "55px"
        },
        xs: {
            width: "576px",
            fields: "55px"
        },
        xxs: {
            width: "400px",
            fields: "15px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid('./src/less/libs', settings);