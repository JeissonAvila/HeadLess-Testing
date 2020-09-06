'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'card-gatherer'
        ]
    }],

    audits: [
        'card-audit'
    ],

    categories: {
        ratp_pwa: {
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp first api call',
            auditRefs: [
                { id: 'card-audit', weight: 1 }
            ]
        }
    }
};