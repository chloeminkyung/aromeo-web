
export const fakeControlData = [
    {
        roomNo: "101B",
        aromeoID: "0000001",
        schedule: -1,
        device: true,
        oil: {
            "running_out": 1,
            "ran_out": 2
        }
    },
    {
        roomNo: "101C",
        aromeoID: "0000001",
        schedule: -1,
        device: true,
        oil: {
            "running_out": 3,
            "ran_out": 0
        }
    },
    {
        roomNo: "101D",
        aromeoID: "0000001",
        schedule: -1,
        device: false,
        oil: {
            "running_out": 0,
            "ran_out": 0
        }
    },
    {
        roomNo: "105B",
        aromeoID: "0000001",
        schedule: -1,
        device: true,
        oil: {
            "running_out": 1,
            "ran_out": 2
        }
    },
    {
        roomNo: "201B",
        aromeoID: "0000001",
        schedule: -1,
        device: false,
        oil: {
            "running_out": 0,
            "ran_out": 0
        }
    }
];

export const dummyScheduleData = [
    {
        "schedule_name": 'Romantic',
        "description": "couples, honeymoon",
        "timeline": {
            "AM": "Energizing Blend",
            "PM": "Sensational Blend",
            "Night": "Relax Blend",
        }
    },
    {
        "schedule_name": 'Executive',
        "description": "business man/woman",
        "timeline": {
            "AM": "Uplift Blend",
            "PM": "Focus Blend",
            "Night": "Refresh Blend",
        }
    },
    {
        "schedule_name": 'Romantic',
        "description": "couples, honeymoon",
        "timeline": {
            "AM": "Energizing Blend",
            "PM": "Sensational Blend",
            "Night": "Relax Blend",
        }
    },
    {
        "schedule_name": 'Executive',
        "description": "business man/woman",
        "timeline": {
            "AM": "Uplift Blend",
            "PM": "Focus Blend",
            "Night": "Refresh Blend",
        }
    },
    {
        "schedule_name": 'Romantic',
        "description": "couples, honeymoon",
        "timeline": {
            "AM": "Energizing Blend",
            "PM": "Sensational Blend",
            "Night": "Relax Blend",
        }
    },
    {
        "schedule_name": 'Executive',
        "description": "business man/woman",
        "timeline": {
            "AM": "Uplift Blend",
            "PM": "Focus Blend",
            "Night": "Refresh Blend",
        }
    },
    {
        "schedule_name": 'Romantic',
        "description": "couples, honeymoon",
        "timeline": {
            "AM": "Energizing Blend",
            "PM": "Sensational Blend",
            "Night": "Relax Blend",
        }
    },
    {
        "schedule_name": 'Executive',
        "description": "business man/woman",
        "timeline": {
            "AM": "Uplift Blend",
            "PM": "Focus Blend",
            "Night": "Refresh Blend",
        }
    },
    {
        "schedule_name": 'Romantic',
        "description": "couples, honeymoon",
        "timeline": {
            "AM": "Energizing Blend",
            "PM": "Sensational Blend",
            "Night": "Relax Blend",
        }
    },
    {
        "schedule_name": 'Executive',
        "description": "business man/woman",
        "timeline": {
            "AM": "Uplift Blend",
            "PM": "Focus Blend",
            "Night": "Refresh Blend",
        }
    },

];

export const dummyBlendData = [
    {
        "blend_name": 'Energize',
        "description": "it helps boost up energy",
        "oils": [
            {
                "oilName": "Lavender",
                "ratio": 3
            },
            {
                "oilName": "Lemon",
                "ratio": 3
            }
        ]
    },{
        "blend_name": 'Sensual',
        "description": "creates romantic mood",
        "oils": [
            {
                "oilName": "YlangYlang",
                "ratio": 1
            },
            {
                "oilName": "Bergamot",
                "ratio": 4
            }
        ]
    },
];

// join deviceOil with Oil -> oil_position, oil_name
export const oilListForBlend = [
    {
        name: 'Lavender',
        oil_position: 1,
    },
    {
        name: 'Peppermint',
        oil_position: 2,
    },
    {
        name: 'Lemon',
        oil_position: 3,
    },
    {
        name: 'Ylang ylang',
        oil_position: 4,
    },
    {
        name: 'Bergamot',
        oil_position: 5,
    },
];
