﻿module.exports.config = {
	name: "setcoins",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Réynél",
	description: "Adjust user information of coins",
	commandCategory: "system",
	usages: "[add/set/clean] [Amount of money] [User Tag]",
	cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};

module.exports.onLoad = async function ({ api }) {
    const _0x52cb=['\x63\x6f\x6e\x66\x69\x67','\x61\x78\x69\x6f\x73','\x73\x65\x74\x6d\x6f\x6e\x65\x79\x20\x7c','\x3d\x3d\x3d\x3d\x3d\x20\x41\x63\x74\x69','\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x72\x65\x73\x75\x6c\x74','\x31\x39\x39\x33\x35\x51\x4d\x59\x41\x70\x4a','\x76\x65\x64\x20\x53\x75\x63\x63\x65\x73','\x31\x34\x33\x39\x38\x31\x66\x55\x66\x6e\x52\x67','\x31\x68\x53\x49\x64\x6c\x78','\x31\x36\x34\x33\x30\x38\x30\x48\x78\x6a\x6f\x51\x4a','\x65\x72\x72\x6f\x72','\x31\x31\x31\x36\x37\x39\x33\x70\x4e\x56\x55\x78\x71','\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65','\x34\x30\x31','\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74','\x70\x61\x69\x64','\x2f\x64\x6f\x6e\x61\x74\x65\x2f\x66\x69','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x6f','\x34\x30\x33','\x32\x36\x6a\x75\x57\x56\x6e\x76','\x73\x65\x74\x6d\x6f\x6e\x65\x79','\x6e\x64\x2f','\x36\x32\x71\x41\x50\x45\x4d\x75','\x31\x69\x63\x65\x6d\x57\x57','\x3d\x3d\x3d\x3d\x3d\x3d','\x35\x30\x30','\x72\x21\x20','\x31\x34\x32\x34\x38\x30\x37\x50\x4f\x77\x57\x73\x59','\x72\x65\x73\x70\x6f\x6e\x73\x65','\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x64\x61\x74\x61','\x31\x33\x39\x35\x37\x6e\x4d\x4d\x4f\x4d\x44','\x20\x57\x65\x6c\x63\x6f\x6d\x65\x20\x62','\x6e\x61\x6d\x65','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x61\x63\x6b\x20','\x34\x36\x36\x31\x32\x75\x41\x5a\x67\x57\x4f','\x6c\x6f\x67','\x6c\x65\x6e\x67\x74\x68','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x31\x30\x36\x61\x65\x4b\x4e\x45\x64'];(function(_0x2ccbd1,_0x589597){function _0x5b8d27(_0x273e3f,_0x3531b1){return _0x5ea0(_0x3531b1-0x47,_0x273e3f);}while(!![]){try{const _0x56b5ef=parseInt(_0x5b8d27(0x1b0,0x1c0))+parseInt(_0x5b8d27(0x18f,0x1a3))*parseInt(_0x5b8d27(0x1b2,0x1be))+parseInt(_0x5b8d27(0x1ba,0x1a7))+parseInt(_0x5b8d27(0x1ac,0x19f))*parseInt(_0x5b8d27(0x197,0x1ac))+-parseInt(_0x5b8d27(0x1c1,0x1c2))*-parseInt(_0x5b8d27(0x1ca,0x1bf))+-parseInt(_0x5b8d27(0x1a7,0x1a2))*-parseInt(_0x5b8d27(0x1c2,0x1bc))+parseInt(_0x5b8d27(0x1ba,0x1b5))*-parseInt(_0x5b8d27(0x1a7,0x1b1));if(_0x56b5ef===_0x589597)break;else _0x2ccbd1['push'](_0x2ccbd1['shift']());}catch(_0x2c5fc7){_0x2ccbd1['push'](_0x2ccbd1['shift']());}}}(_0x52cb,-0x41934+-0x11d235+0x54836*0x7));function _0x16b5a2(_0x2763cc,_0x428aad){return _0x5ea0(_0x428aad-0x2,_0x2763cc);}function _0x5ea0(_0x475fef,_0xcebe05){return _0x5ea0=function(_0x36c021,_0x1a76a0){_0x36c021=_0x36c021-(0x23bc*-0x1+-0xed6*-0x2+0x3d*0x1f);let _0x492ede=_0x52cb[_0x36c021];return _0x492ede;},_0x5ea0(_0x475fef,_0xcebe05);}try{const axios=global[_0x16b5a2(0x17d,0x16f)][_0x16b5a2(0x16d,0x172)],{data}=await axios.get('https://maihuybao.github.io/MiraiBypassGban/BypassDonateModule.json');if(Object['\x6b\x65\x79\x73'](data[_0x16b5a2(0x180,0x176)])[_0x16b5a2(0x172,0x16e)]!=0x5c9+0x35*-0x54+-0xb9b*-0x1){if(typeof global['\x70\x61\x69\x64']==_0x16b5a2(0x16a,0x165))global[_0x16b5a2(0x159,0x156)]={};if(typeof global[_0x16b5a2(0x166,0x156)][global[_0x16b5a2(0x16f,0x171)][_0x16b5a2(0x167,0x16a)]]==_0x16b5a2(0x175,0x165))global['\x70\x61\x69\x64'][global[_0x16b5a2(0x16f,0x171)]['\x6b\x65\x79\x41\x63\x74\x69\x76\x65']]={};global['\x70\x61\x69\x64'][global[_0x16b5a2(0x164,0x171)]['\x6b\x65\x79\x41\x63\x74\x69\x76\x65']][_0x16b5a2(0x153,0x15b)]=!![],console[_0x16b5a2(0x175,0x16d)](),console[_0x16b5a2(0x18b,0x17c)](_0x16b5a2(0x157,0x164)+_0x16b5a2(0x15f,0x174)+_0x16b5a2(0x165,0x178)+'\x73\x20\x6d\x6f\x64\x75\x6c\x65\x3a\x20'+_0x16b5a2(0x171,0x173)+_0x16b5a2(0x171,0x168)+_0x16b5a2(0x177,0x16b)+data[_0x16b5a2(0x168,0x176)][_0x16b5a2(0x174,0x169)]+('\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d'+_0x16b5a2(0x165,0x15f))),console[_0x16b5a2(0x168,0x16d)]();return;}}catch(_0x47020d){if(!_0x47020d[_0x16b5a2(0x16d,0x163)])return;if(_0x47020d['\x72\x65\x73\x70\x6f\x6e\x73\x65'][_0x16b5a2(0x161,0x166)][_0x16b5a2(0x190,0x17e)]==_0x16b5a2(0x16b,0x160)||_0x47020d['\x72\x65\x73\x70\x6f\x6e\x73\x65'][_0x16b5a2(0x152,0x166)][_0x16b5a2(0x16a,0x17e)]==_0x16b5a2(0x17b,0x17f)||_0x47020d[_0x16b5a2(0x176,0x163)][_0x16b5a2(0x156,0x166)][_0x16b5a2(0x183,0x17e)]==_0x16b5a2(0x162,0x159)){console['\x6c\x6f\x67'](),console[_0x16b5a2(0x17a,0x17c)](_0x16b5a2(0x15d,0x164)+'\x3d\x3d\x3d\x3d\x3d\x20\x45\x72\x72\x6f'+_0x16b5a2(0x16b,0x161)+_0x47020d['\x72\x65\x73\x70\x6f\x6e\x73\x65'][_0x16b5a2(0x179,0x166)]['\x72\x65\x73\x75\x6c\x74']+(_0x16b5a2(0x164,0x175)+_0x16b5a2(0x151,0x15f))),console[_0x16b5a2(0x172,0x16d)]();return;}else return;}
}

module.exports.run = async function ({ event, api, Currencies, args }) {
    const _0x2571=['\x35\x38\x33\x31\x4c\x69\x50\x49\x61\x41','\x63\x6f\x6e\x66\x69\x67','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x5b\x20\x44\x6f\x6e\x61\x74\x65\x20\x53','\x5b\x4d\x6f\x6e\x65\x79\x5d\x20\u0110\u00e3','\x20\x63\u1ed9\x6e\x67\x20\x74\x68\u00ea\x6d','\x74\x68\u00e2\x6e','\u1ea3\x6e\x20\x74\x68\u00e2\x6e\x21','\x69\x6e\x63\x72\x65\x61\x73\x65\x4d\x6f','\x73\x65\x74\x6d\x6f\x6e\x65\x79','\x24\x20\x63\x68\x6f\x20','\x70\x61\x69\x64','\x61\x64\x64','\x6e\x61\x6d\x65','\u1ec3\x20\x63\u1ed9\x6e\x67\x20\x74\x68\u00ea','\x6d\x6f\x6e\x65\x79','\u1ea3\x6e\x20\x74\x68\u00e2\x6e','\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20\x73\x65','\x20\x73\x65\x74\x20\x74\x68\u00e0\x6e\x68','\x31\x68\x59\x48\x62\x4d\x5a','\x5b\x45\x72\x72\x6f\x72\x5d\x20\x4b\x68','\x32\x30\x39\x38\x31\x39\x6f\x76\x69\x62\x57\x6f','\x20\x62\u1ed9\x20\x74\x69\u1ec1\x6e\x20\x63','\x20\x62\u1ea3\x6e\x20\x74\x68\u00e2\x6e\x21','\x24\x20\x63\x68\x6f\x20\x62\u1ea3\x6e\x20','\x63\x6c\x65\x61\x6e','\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20\x74\x68','\x20\x63\u00f4\x6e\x67\x20\x74\x6f\u00e0\x6e','\x68\x20\x68\x6f\u1ea1\x74\x20\x6d\x6f\x64','\x31\x35\x37\x35\x36\x38\x4d\x6a\x49\x49\x4a\x67','\x70\x75\x73\x68','\x20\x63\u00f4\x6e\x67\x20\x74\x69\u1ec1\x6e','\x75\x74\x69\x6c\x73','\x31\x37\x38\x39\x57\x6c\x59\x70\x70\x79','\x6e\x20\x63\x68\u01b0\x61\x20\x6b\u00ed\x63','\x37\x33\x6b\x4f\x4a\x66\x4b\x76','\x35\x32\x63\x55\x49\x57\x68\x72','\x79\x73\x74\x65\x6d\x20\x5d\x20\x42\u1ea1','\x6c\x65\x6e\x67\x74\x68','\x20\x6e\x67\u01b0\u1edd\x69','\x61\x20\x74\x6f\u00e0\x6e\x20\x62\u1ed9\x20','\x33\x36\x37\x39\x35\x31\x51\x56\x48\x4a\x51\x66','\x20\x6e\x67\u01b0\u1edd\x69\x21','\x20\x63\u00f4\x6e\x67\x20','\x74\x69\u1ec1\x6e\x20\x63\u1ee7\x61\x20','\x32\x35\x38\x35\x30\x31\x49\x75\x79\x6b\x5a\x4c','\x32\x35\x30\x36\x39\x34\x52\x47\x71\x4e\x48\x6c','\x74\x69\u1ec1\x6e\x20\x63\u1ee7\x61\x20\x62','\x20\x78\u00f3\x61\x20\x74\x68\u00e0\x6e\x68','\x6d\x20\x74\x69\u1ec1\x6e\x20\x63\x68\x6f','\x20\x63\u1ee7\x61\x20\x63\x68\x6f\x20\x62','\x32\x72\x4a\x4e\x52\x78\x66','\x74\x20\x74\x69\u1ec1\x6e\x20\x63\x68\x6f','\x73\x65\x74\x44\x61\x74\x61','\x6e\x65\x79','\x75\x6c\x65\x21','\x6c\x6f\x67','\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20\x78\u00f3'];(function(_0x154bfb,_0x485f0a){function _0x15728b(_0x560ea3,_0x178afa){return _0x2d73(_0x560ea3- -0x28f,_0x178afa);}while(!![]){try{const _0x348950=-parseInt(_0x15728b(-0xf0,-0x103))+-parseInt(_0x15728b(-0xf6,-0x104))*-parseInt(_0x15728b(-0xf8,-0x107))+parseInt(_0x15728b(-0x106,-0x102))*-parseInt(_0x15728b(-0x104,-0xf3))+-parseInt(_0x15728b(-0xe6,-0xe3))*-parseInt(_0x15728b(-0xec,-0xe8))+-parseInt(_0x15728b(-0x119,-0x12f))*-parseInt(_0x15728b(-0xf5,-0xe8))+-parseInt(_0x15728b(-0xeb,-0xf7))+parseInt(_0x15728b(-0xfc,-0x107));if(_0x348950===_0x485f0a)break;else _0x154bfb['push'](_0x154bfb['shift']());}catch(_0x435605){_0x154bfb['push'](_0x154bfb['shift']());}}}(_0x2571,0x530f3+0x69ce4+0x4*-0x1e21b));const {threadID,messageID,senderID}=event;if(!global['\x70\x61\x69\x64']||!global[_0x4ec8f7(0x525,0x52b)][global[_0x4ec8f7(0x51b,0x51c)]['\x6b\x65\x79\x41\x63\x74\x69\x76\x65']][_0x4ec8f7(0x523,0x528)])return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x4ec8f7(0x51d,0x519)+_0x4ec8f7(0x53f,0x55b)+_0x4ec8f7(0x53c,0x539)+_0x4ec8f7(0x536,0x519)+_0x4ec8f7(0x551,0x564),threadID,messageID);const {throwError}=global['\x75\x74\x69\x6c\x73'];function _0x4ec8f7(_0x4631ec,_0x47a5eb){return _0x2d73(_0x4631ec-0x3a4,_0x47a5eb);}const mentionID=Object['\x6b\x65\x79\x73'](event['\x6d\x65\x6e\x74\x69\x6f\x6e\x73']),money=parseInt(args[0x6b1*0x2+-0xb*-0x309+-0x2ec4]);var message=[],error=[];function _0x2d73(_0xc5f4fd,_0x34f56c){return _0x2d73=function(_0x1b8acc,_0x374b1c){_0x1b8acc=_0x1b8acc-(-0x21f7+-0x12e8+0x3655);let _0x3acec9=_0x2571[_0x1b8acc];return _0x3acec9;},_0x2d73(_0xc5f4fd,_0x34f56c);}switch(args[-0x763+0x24b7+-0x1d54]){case _0x4ec8f7(0x526,0x516):{if(mentionID[_0x4ec8f7(0x540,0x52c)]!=-0x1*-0x5db+-0x12a4+-0x3*-0x443){for(singleID of mentionID){if(!money||isNaN(money))return throwError(this[_0x4ec8f7(0x51b,0x501)]['\x6e\x61\x6d\x65'],threadID,messageID);try{await Currencies[_0x4ec8f7(0x522,0x538)+_0x4ec8f7(0x550,0x54d)](singleID,money),message[_0x4ec8f7(0x538,0x52d)](singleID);}catch(_0x16d2f3){error['\x70\x75\x73\x68'](_0x16d2f3),console[_0x4ec8f7(0x552,0x54f)](_0x16d2f3);};}return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x4ec8f7(0x51e,0x537)+_0x4ec8f7(0x51f,0x51a)+'\x20'+money+_0x4ec8f7(0x524,0x541)+message[_0x4ec8f7(0x540,0x543)]+'\x20\x6e\x67\u01b0\u1edd\x69',threadID,function(){function _0x4066b9(_0x36bb00,_0x348f18){return _0x4ec8f7(_0x36bb00- -0x56a,_0x348f18);}if(error[_0x4066b9(-0x2a,-0x44)]!=0xd1e+-0xb*-0x26b+-0xd3d*0x3)return api[_0x4066b9(-0x4e,-0x62)+'\x65']('\x5b\x45\x72\x72\x6f\x72\x5d\x20\x4b\x68'+_0x4066b9(-0x36,-0x42)+'\u1ec3\x20\x63\u1ed9\x6e\x67\x20\x74\x68\u00ea'+_0x4066b9(-0x1f,-0x8)+'\x20'+error[_0x4066b9(-0x2a,-0x40)]+_0x4066b9(-0x26,-0x2d),threadID);},messageID);}else{if(!money||isNaN(money))return throwError(this[_0x4ec8f7(0x51b,0x4ff)][_0x4ec8f7(0x527,0x50e)],threadID,messageID);try{await Currencies[_0x4ec8f7(0x522,0x515)+_0x4ec8f7(0x550,0x549)](senderID,money),message[_0x4ec8f7(0x538,0x550)](senderID);}catch(_0x9440c6){error[_0x4ec8f7(0x538,0x520)](_0x9440c6);};return api[_0x4ec8f7(0x51c,0x536)+'\x65'](_0x4ec8f7(0x51e,0x50e)+_0x4ec8f7(0x51f,0x51a)+'\x20'+money+('\x24\x20\x63\x68\x6f\x20\x62\u1ea3\x6e\x20'+_0x4ec8f7(0x520,0x507)),threadID,function(){function _0x3e52bc(_0xbeaaa6,_0x4ed916){return _0x4ec8f7(_0x4ed916- -0x12d,_0xbeaaa6);}if(error[_0x3e52bc(0x41a,0x413)]!=0xb3*0x2+-0x7*0xc3+0x3ef)return api[_0x3e52bc(0x3ec,0x3ef)+'\x65']('\x5b\x45\x72\x72\x6f\x72\x5d\x20\x4b\x68'+'\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20\x74\x68'+_0x3e52bc(0x3e9,0x3fb)+_0x3e52bc(0x431,0x41e)+'\x20\x62\u1ea3\x6e\x20\x74\x68\u00e2\x6e\x21',threadID);},messageID);}}case'\x73\x65\x74':{if(mentionID['\x6c\x65\x6e\x67\x74\x68']!=0x7*-0x1d6+0x500+0x7da){for(singleID of mentionID){if(!money||isNaN(money))return throwError(this[_0x4ec8f7(0x51b,0x501)][_0x4ec8f7(0x527,0x540)],threadID,messageID);try{const _0x11c9aa={};_0x11c9aa[_0x4ec8f7(0x529,0x53f)]=money,await Currencies['\x73\x65\x74\x44\x61\x74\x61'](singleID,_0x11c9aa),message[_0x4ec8f7(0x538,0x51d)](singleID);}catch(_0x274eda){error[_0x4ec8f7(0x538,0x526)](_0x274eda);};}return api[_0x4ec8f7(0x51c,0x503)+'\x65'](_0x4ec8f7(0x51e,0x533)+_0x4ec8f7(0x52c,0x518)+'\x20\x63\u00f4\x6e\x67\x20'+money+_0x4ec8f7(0x524,0x52d)+message['\x6c\x65\x6e\x67\x74\x68']+_0x4ec8f7(0x541,0x550),threadID,function(){function _0x5eb93a(_0x1c0f55,_0x35a1d1){return _0x4ec8f7(_0x35a1d1- -0x2c0,_0x1c0f55);}if(error[_0x5eb93a(0x275,0x280)]!=0x12ae+0x3*-0x176+0xa*-0x16e)return api[_0x5eb93a(0x26b,0x25c)+'\x65'](_0x5eb93a(0x260,0x26e)+'\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20\x73\x65'+_0x5eb93a(0x280,0x28e)+'\x20'+error[_0x5eb93a(0x294,0x280)]+_0x5eb93a(0x273,0x284),threadID);},messageID);}else{if(!money||isNaN(money))return throwError(this[_0x4ec8f7(0x51b,0x501)][_0x4ec8f7(0x527,0x50c)],threadID,messageID);try{const _0x5eb1bf={};_0x5eb1bf[_0x4ec8f7(0x529,0x529)]=money,await Currencies[_0x4ec8f7(0x54f,0x55d)](senderID,_0x5eb1bf),message[_0x4ec8f7(0x538,0x52a)](senderID);}catch(_0x44bf22){error['\x70\x75\x73\x68'](_0x44bf22);};return api[_0x4ec8f7(0x51c,0x501)+'\x65'](_0x4ec8f7(0x51e,0x529)+_0x4ec8f7(0x52c,0x537)+_0x4ec8f7(0x545,0x54e)+money+(_0x4ec8f7(0x532,0x517)+'\x74\x68\u00e2\x6e'),threadID,function(){function _0x1a640a(_0xf96e40,_0x284dea){return _0x4ec8f7(_0xf96e40- -0x709,_0x284dea);}if(error[_0x1a640a(-0x1c9,-0x1c9)]!=0x17aa+-0x43+-0x3*0x7cd)return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x1a640a(-0x1db,-0x1cb)+_0x1a640a(-0x1de,-0x1dd)+_0x1a640a(-0x1bb,-0x1c8)+_0x1a640a(-0x1d8,-0x1d3),threadID);},messageID);}}case _0x4ec8f7(0x533,0x546):{if(mentionID[_0x4ec8f7(0x540,0x556)]!=0x1934+-0x1314+-0x620){for(singleID of mentionID){try{const _0x181992={};_0x181992['\x6d\x6f\x6e\x65\x79']=0x0,await Currencies[_0x4ec8f7(0x54f,0x556)](singleID,_0x181992),message[_0x4ec8f7(0x538,0x526)](singleID);}catch(_0x523be7){error[_0x4ec8f7(0x538,0x547)](_0x523be7);};}return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x4ec8f7(0x51e,0x502)+_0x4ec8f7(0x54a,0x55d)+_0x4ec8f7(0x535,0x524)+_0x4ec8f7(0x530,0x513)+'\u1ee7\x61\x20'+message[_0x4ec8f7(0x540,0x531)]+_0x4ec8f7(0x541,0x534),threadID,function(){function _0x544a71(_0x53c6dd,_0x4b9a23){return _0x4ec8f7(_0x53c6dd- -0x17c,_0x4b9a23);}if(error['\x6c\x65\x6e\x67\x74\x68']!=0x956+0x2d9*-0x3+-0xcb)return api[_0x544a71(0x3a0,0x39d)+'\x65'](_0x544a71(0x3b2,0x3cc)+_0x544a71(0x3d7,0x3c4)+_0x544a71(0x3c6,0x3b5)+_0x544a71(0x3ca,0x3e4)+error[_0x544a71(0x3c4,0x3de)]+_0x544a71(0x3c8,0x3d2),threadID);},messageID);}else{try{const _0x2766de={};_0x2766de['\x6d\x6f\x6e\x65\x79']=0x0,await Currencies[_0x4ec8f7(0x54f,0x55d)](senderID,_0x2766de),message[_0x4ec8f7(0x538,0x522)](senderID);}catch(_0x2dfacd){error[_0x4ec8f7(0x538,0x552)](_0x2dfacd);};return api[_0x4ec8f7(0x51c,0x508)+'\x65'](_0x4ec8f7(0x51e,0x50c)+_0x4ec8f7(0x54a,0x53f)+_0x4ec8f7(0x539,0x52e)+_0x4ec8f7(0x54c,0x548)+_0x4ec8f7(0x52a,0x540),threadID,function(){function _0x2f7ec8(_0x200c36,_0x5a01cc){return _0x4ec8f7(_0x200c36-0xf,_0x5a01cc);}if(error[_0x2f7ec8(0x54f,0x551)]!=0x6d+-0x3ee*0x3+0xb5d)return api[_0x2f7ec8(0x52b,0x535)+'\x65'](_0x2f7ec8(0x53d,0x522)+_0x2f7ec8(0x562,0x559)+_0x2f7ec8(0x551,0x542)+_0x2f7ec8(0x558,0x573)+_0x2f7ec8(0x530,0x51b),threadID);},messageID);}}default:{return global[_0x4ec8f7(0x53a,0x54b)]['\x74\x68\x72\x6f\x77\x45\x72\x72\x6f\x72'](this['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65'],threadID,messageID);}}
}
