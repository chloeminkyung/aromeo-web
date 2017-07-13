
export const fakeControlData = [
    {
        "aromeo_id": "2",
        "name": "201A",
        "power_on": false,
        "diffusion_strength": 2,
        "schedule_id": -1,
        "schedule_name": null
    },
    {
        "aromeo_id": "1",
        "name": "101A",
        "power_on": false,
        "diffusion_strength": 2,
        "schedule_id": -1,
        "schedule_name": null
    }
]

export const fakeControlDataaaaaaa = [
    {
        name: "101B",
        aromeo_id: "0000001",
        schedule_id: -1,
        schedule_name: null,
        power_on: true,
        diffusion_strength: 2
    },
    {
        name: "101C",
        aromeo_id: "0000001",
        schedule_id: -1,
        schedule_name: null,
        power_on: true,
        diffusion_strength: 2
    },
    {
        name: "101D",
        aromeo_id: "0000001",
        schedule_id: -1,
        schedule_name: null,
        power_on: false,
        diffusion_strength: 2
    },
    {
        name: "105B",
        aromeo_id: "0000001",
        schedule_id: -1,
        schedule_name: null,
        power_on: true,
        diffusion_strength: 2
    }
];

/*

 ,
 oil: {
 "running_out": 1,
 "ran_out": 2
 }
 */

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
