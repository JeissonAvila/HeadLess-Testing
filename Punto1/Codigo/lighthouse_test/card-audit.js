'use strict';

const Audit = require('lighthouse').Audit;

const MAX_PI_CALL_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            id: 'card-audit',
            title: 'Cart audit',
            category: 'MyPerformance',
            name: 'card-audit',
            description: 'First API Call Response Time',
            failureDescription: 'First API Call slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the first api' +
                ' call is made.',
            requiredArtifacts: ['TimeToCard']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToCard;

        const belowThreshold = loadedTime < MAX_PI_CALL_TIME;

        return {
            displayValue: loadedTime,
            score: Number(belowThreshold)
        };
    }
}

module.exports = LoadAudit;