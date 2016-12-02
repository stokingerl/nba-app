export const GlobalConstants = Object.freeze({
    API: {
        BASE_API_URL: 'http://api.probasketballapi.com/',
        BASE_API_KEY: process.env.api_key
    },
    HEADERS: {
        PPG_HEADER: 'PPG',
        PPG_PROPERTY: 'ppg',
        RPG_HEADER: 'RPG',
        RPG_PROPERTY: 'rpg',
        APG_HEADER: 'APG',
        APG_PROPERTY: 'apg',
        BPG_HEADER: 'BPG',
        BPG_PROPERTY: 'bpg',
        SPG_HEADER: 'SPG',
        SPG_PROPERTY: 'spg',
        FGP_HEADER: 'FG%',
        FGP_PROPERTY: 'fgPercent'
    }

});
