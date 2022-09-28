const type = window.location.host.includes('localhost') ? 'dev' : '';
let device;
if (window.screen.width <= '576') {
    device = 'Mobile';
} else {
    device = 'Desktop';
}
const Stagging = 'https://reemchatbotstaging.bluelogic.ai';
const Production = 'https://reemchatbot.bluelogic.ai';
const productionServer = false;

export const Environment = {
    avatar_name: 'Myriam',
    socketUrl: 'wss://reemchatbotstaging.bluelogic.ai/ws/web', //reem
    assetUrl: productionServer ? Production : Stagging,
    startBotEng: `/language_selection{"language": "en","avatar_name":"Layla","type":"${type}"}`,
    startBotAr: `/language_selection{"language": "ar","avatar_name":"Layla","type":"${type}"}`,
};
