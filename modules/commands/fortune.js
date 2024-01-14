module.exports.config = {
    name: "fortune",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Réynél",
    description: "Predict users' fortunes using random outcomes.",
    commandCategory: "prediction",
    usages: "[Fortune]",
    cooldowns: 5,
    dependencies: "",
};

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

module.exports.run = async function ({ api, event }) {
    const fortunes = [
    {
        fortune: "𝖠 𝗉𝗅𝖾𝖺𝗌𝖺𝗇𝗍 𝗌𝗎𝗋𝗉𝗋𝗂𝗌𝖾 𝗂𝗌 𝗂𝗇 𝗌𝗍𝗈𝗋𝖾 𝖿𝗈𝗋 𝗒𝗈𝗎.",
        luckyNumbers: [7, 15, 22],
        recommendedAction: "𝖳𝖺𝗄𝖾 𝖺 𝗅𝖾𝖺𝗉 𝗈𝖿 𝖿𝖺𝗂𝗍𝗁 𝖺𝗇𝖽 𝗉𝗎𝗋𝗌𝗎𝖾 𝖺 𝗇𝖾𝗐 𝗈𝗉𝗉𝗈𝗋𝗍𝗎𝗇𝗂𝗍𝗒.",
        insight: "𝖳𝗁𝗂𝗌 𝗂𝗌 𝖺 𝗍𝗂𝗆𝖾 𝗈𝖿 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗍𝗋𝖺𝗇𝗌𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝗀𝗋𝗈𝗐𝗍𝗁.",
    },
    {
        fortune: "𝖡𝖾 𝖼𝖺𝗎𝗍𝗂𝗈𝗎𝗌 𝗂𝗇 𝖿𝗂𝗇𝖺𝗇𝖼𝗂𝖺𝗅 𝗆𝖺𝗍𝗍𝖾𝗋𝗌 𝖺𝗇𝖽 𝖺𝗏𝗈𝗂𝖽 𝗎𝗇𝗇𝖾𝖼𝖾𝗌𝗌𝖺𝗋𝗒 𝗋𝗂𝗌𝗄𝗌.",
        luckyNumbers: [3, 11, 18],
        recommendedAction: "𝖥𝗈𝖼𝗎𝗌 𝗈𝗇 𝖻𝗎𝖽𝗀𝖾𝗍𝗂𝗇𝗀 𝖺𝗇𝖽 𝗌𝖺𝗏𝗂𝗇𝗀 𝖿𝗈𝗋 𝗍𝗁𝖾 𝖿𝗎𝗍𝗎𝗋𝖾.",
        insight: "𝖯𝗋𝗎𝖽𝖾𝗇𝗍 𝖽𝖾𝖼𝗂𝗌𝗂𝗈𝗇𝗌 𝗇𝗈𝗐 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝗌𝗍𝖺𝖻𝗂𝗅𝗂𝗍𝗒 𝗅𝖺𝗍𝖾𝗋.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝗂𝗍𝗒 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝗂𝗇𝗇𝗈𝗏𝖺𝗍𝗂𝗏𝖾 𝗌𝗈𝗅𝗎𝗍𝗂𝗈𝗇𝗌.",
        luckyNumbers: [8, 16, 24],
        recommendedAction: "𝖤𝗇𝗀𝖺𝗀𝖾 𝗂𝗇 𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝖾 𝖺𝖼𝗍𝗂𝗏𝗂𝗍𝗂𝖾𝗌 𝗍𝗈 𝗌𝗉𝖺𝗋𝗄 𝗂𝗇𝗌𝗉𝗂𝗋𝖺𝗍𝗂𝗈𝗇.",
        insight: "𝖸𝗈𝗎𝗋 𝗎𝗇𝗂𝗊𝗎𝖾 𝖺𝗉𝗉𝗋𝗈𝖺𝖼𝗁 𝗐𝗂𝗅𝗅 𝗒𝗂𝖾𝗅𝖽 𝗋𝖾𝗆𝖺𝗋𝗄𝖺𝖻𝗅𝖾 𝗋𝖾𝗌𝗎𝗅𝗍𝗌.",
    },
    {
        fortune: "𝖭𝖾𝗐 𝖿𝗋𝗂𝖾𝗇𝖽𝗌𝗁𝗂𝗉𝗌 𝗐𝗂𝗅𝗅 𝖾𝗇𝗋𝗂𝖼𝗁 𝗒𝗈𝗎𝗋 𝗅𝗂𝖿𝖾.",
        luckyNumbers: [2, 10, 17],
        recommendedAction: "𝖠𝗍𝗍𝖾𝗇𝖽 𝗌𝗈𝖼𝗂𝖺𝗅 𝖾𝗏𝖾𝗇𝗍𝗌 𝖺𝗇𝖽 𝖼𝗈𝗇𝗇𝖾𝖼𝗍 𝗐𝗂𝗍𝗁 𝗇𝖾𝗐 𝗉𝖾𝗈𝗉𝗅𝖾.",
        insight: "𝖬𝖾𝖺𝗇𝗂𝗇𝗀𝖿𝗎𝗅 𝗋𝖾𝗅𝖺𝗍𝗂𝗈𝗇𝗌𝗁𝗂𝗉𝗌 𝖺𝗋𝖾 𝗈𝗇 𝗍𝗁𝖾 𝗁𝗈𝗋𝗂𝗓𝗈𝗇.",
    },
    {
        fortune: "𝖤𝗆𝖻𝗋𝖺𝖼𝖾 𝖼𝗁𝖺𝗇𝗀𝖾 𝖺𝗇𝖽 𝖾𝗆𝖻𝗋𝖺𝖼𝖾 𝗇𝖾𝗐 𝖻𝖾𝗀𝗂𝗇𝗇𝗂𝗇𝗀𝗌.",
        luckyNumbers: [5, 12, 19],
        recommendedAction: "𝖲𝗍𝖾𝗉 𝗈𝗎𝗍 𝗈𝖿 𝗒𝗈𝗎𝗋 𝖼𝗈𝗆𝖿𝗈𝗋𝗍 𝗓𝗈𝗇𝖾 𝖺𝗇𝖽 𝖾𝗆𝖻𝗋𝖺𝖼𝖾 𝖼𝗁𝖺𝗇𝗀𝖾.",
        insight: "𝖢𝗁𝖺𝗇𝗀𝖾 𝗂𝗌 𝗍𝗁𝖾 𝖼𝖺𝗍𝖺𝗅𝗒𝗌𝗍 𝖿𝗈𝗋 𝗀𝗋𝗈𝗐𝗍𝗁 𝖺𝗇𝖽 𝗉𝗋𝗈𝗀𝗋𝖾𝗌𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖽𝖾𝖽𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝗐𝗂𝗅𝗅 𝗉𝖺𝗏𝖾 𝗍𝗁𝖾 𝗐𝖺𝗒 𝗍𝗈 𝖺𝖼𝗁𝗂𝖾𝗏𝖾𝗆𝖾𝗇𝗍.",
        luckyNumbers: [9, 14, 21],
        recommendedAction: "𝖲𝗍𝖺𝗒 𝖼𝗈𝗆𝗆𝗂𝗍𝗍𝖾𝖽 𝗍𝗈 𝗒𝗈𝗎𝗋 𝗀𝗈𝖺𝗅𝗌 𝖺𝗇𝖽 𝗐𝗈𝗋𝗄 𝖽𝗂𝗅𝗂𝗀𝖾𝗇𝗍𝗅𝗒.",
        insight: "𝖸𝗈𝗎𝗋 𝗁𝖺𝗋𝖽 𝗐𝗈𝗋𝗄 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝗇𝗈𝗍𝖺𝖻𝗅𝖾 𝖺𝖼𝖼𝗈𝗆𝗉𝗅𝗂𝗌𝗁𝗆𝖾𝗇𝗍𝗌.",
    },
    {
        fortune: "𝖡𝖾𝗅𝗂𝖾𝗏𝖾 𝗂𝗇 𝗒𝗈𝗎𝗋𝗌𝖾𝗅𝖿 𝖺𝗇𝖽 𝗈𝗍𝗁𝖾𝗋𝗌 𝗐𝗂𝗅𝗅 𝗍𝗈𝗈.",
        luckyNumbers: [1, 13, 20],
        recommendedAction: "𝖯𝗋𝖺𝖼𝗍𝗂𝖼𝖾 𝗌𝖾𝗅𝖿-𝖼𝗈𝗇𝖿𝗂𝖽𝖾𝗇𝖼𝖾 𝖺𝗇𝖽 𝗌𝗁𝗈𝗐𝖼𝖺𝗌𝖾 𝗒𝗈𝗎𝗋 𝗌𝗄𝗂𝗅𝗅𝗌.",
        insight: "𝖸𝗈𝗎𝗋 𝗌𝖾𝗅𝖿-𝖺𝗌𝗌𝗎𝗋𝖺𝗇𝖼𝖾 𝗐𝗂𝗅𝗅 𝗂𝗇𝗌𝗉𝗂𝗋𝖾 𝖼𝗈𝗇𝖿𝗂𝖽𝖾𝗇𝖼𝖾 𝗂𝗇 𝗈𝗍𝗁𝖾𝗋𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝖾𝗇𝖾𝗋𝗀𝗒 𝗐𝗂𝗅𝗅 𝖺𝗍𝗍𝗋𝖺𝖼𝗍 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗉𝖾𝗈𝗉𝗅𝖾.",
        luckyNumbers: [4, 17, 23],
        recommendedAction: "𝖱𝖺𝖽𝗂𝖺𝗍𝖾 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝗂𝗍𝗒 𝖺𝗇𝖽 𝗌𝗎𝗋𝗋𝗈𝗎𝗇𝖽 𝗒𝗈𝗎𝗋𝗌𝖾𝗅𝖿 𝗐𝗂𝗍𝗁 𝗅𝗂𝗄𝖾-𝗆𝗂𝗇𝖽𝖾𝖽 𝗂𝗇𝖽𝗂𝗏𝗂𝖽𝗎𝖺𝗅𝗌.",
        insight: "𝖸𝗈𝗎𝗋 𝗈𝗉𝗍𝗂𝗆𝗂𝗌𝗍𝗂𝖼 𝖺𝗍𝗍𝗂𝗍𝗎𝖽𝖾 𝗐𝗂𝗅𝗅 𝖺𝗍𝗍𝗋𝖺𝖼𝗍 𝗄𝗂𝗇𝖽𝗋𝖾𝖽 𝗌𝗉𝗂𝗋𝗂𝗍𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗄𝗂𝗇𝖽𝗇𝖾𝗌𝗌 𝗐𝗂𝗅𝗅 𝖻𝖾 𝗋𝖾𝗐𝖺𝗋𝖽𝖾𝖽 𝗂𝗇 𝗎𝗇𝖾𝗑𝗉𝖾𝖼𝗍𝖾𝖽 𝗐𝖺𝗒𝗌.",
        luckyNumbers: [6, 18, 25],
        recommendedAction: "𝖯𝖾𝗋𝖿𝗈𝗋𝗆 𝗋𝖺𝗇𝖽𝗈𝗆 𝖺𝖼𝗍𝗌 𝗈𝖿 𝗄𝗂𝗇𝖽𝗇𝖾𝗌𝗌 𝖺𝗇𝖽 𝗌𝗉𝗋𝖾𝖺𝖽 𝗀𝗈𝗈𝖽𝗐𝗂𝗅𝗅.",
        insight: "𝖸𝗈𝗎𝗋 𝗀𝖾𝗇𝖾𝗋𝗈𝗌𝗂𝗍𝗒 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝗌𝗎𝗋𝗉𝗋𝗂𝗌𝗂𝗇𝗀 𝖻𝗅𝖾𝗌𝗌𝗂𝗇𝗀𝗌.",
    },
    {
        fortune: "𝖲𝗍𝖺𝗒 𝗉𝖺𝗍𝗂𝖾𝗇𝗍; 𝗀𝗈𝗈𝖽 𝗍𝗁𝗂𝗇𝗀𝗌 𝗍𝖺𝗄𝖾 𝗍𝗂𝗆𝖾.",
        luckyNumbers: [10, 21, 27],
        recommendedAction: "𝖯𝗋𝖺𝖼𝗍𝗂𝖼𝖾 𝗉𝖺𝗍𝗂𝖾𝗇𝖼𝖾 𝖺𝗇𝖽 𝖺𝗅𝗅𝗈𝗐 𝗍𝗁𝗂𝗇𝗀𝗌 𝗍𝗈 𝗎𝗇𝖿𝗈𝗅𝖽 𝗇𝖺𝗍𝗎𝗋𝖺𝗅𝗅𝗒.",
        insight: "𝖳𝗁𝖾 𝖻𝖾𝗌𝗍 𝗈𝗎𝗍𝖼𝗈𝗆𝖾𝗌 𝖺𝗋𝖾 𝗐𝗈𝗋𝗍𝗁 𝗐𝖺𝗂𝗍𝗂𝗇𝗀 𝖿𝗈𝗋.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝗈𝗍𝖾𝗇𝗍𝗂𝖺𝗅 𝗂𝗌 𝗅𝗂𝗆𝗂𝗍𝖾𝖽 𝗈𝗇𝗅𝗒 𝖻𝗒 𝗒𝗈𝗎𝗋 𝗂𝗆𝖺𝗀𝗂𝗇𝖺𝗍𝗂𝗈𝗇.",
        luckyNumbers: [12, 24, 30],
        recommendedAction: "𝖤𝗑𝗉𝗅𝗈𝗋𝖾 𝗒𝗈𝗎𝗋 𝖼𝗋𝖾𝖺𝗍𝗂𝗏𝖾 𝗌𝗂𝖽𝖾 𝖺𝗇𝖽 𝖽𝗋𝖾𝖺𝗆 𝖻𝗂𝗀.",
        insight: "𝖸𝗈𝗎𝗋 𝗂𝗆𝖺𝗀𝗂𝗇𝖺𝗍𝗂𝗈𝗇 𝗁𝗈𝗅𝖽𝗌 𝗍𝗁𝖾 𝗄𝖾𝗒 𝗍𝗈 𝖾𝗇𝖽𝗅𝖾𝗌𝗌 𝗉𝗈𝗌𝗌𝗂𝖻𝗂𝗅𝗂𝗍𝗂𝖾𝗌.",
    },
    {
        fortune: "𝖲𝗎𝖼𝖼𝖾𝗌𝗌 𝗂𝗌 𝗍𝗁𝖾 𝗋𝖾𝗌𝗎𝗅𝗍 𝗈𝖿 𝗒𝗈𝗎𝗋 𝖽𝖺𝗂𝗅𝗒 𝖼𝗁𝗈𝗂𝖼𝖾𝗌.",
        luckyNumbers: [14, 28, 35],
        recommendedAction: "𝖬𝖺𝗄𝖾 𝖼𝗈𝗇𝗌𝗂𝗌𝗍𝖾𝗇𝗍 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝖼𝗁𝗈𝗂𝖼𝖾𝗌 𝗍𝗁𝖺𝗍 𝖺𝗅𝗂𝗀𝗇 𝗐𝗂𝗍𝗁 𝗒𝗈𝗎𝗋 𝗀𝗈𝖺𝗅𝗌.",
        insight: "𝖲𝗆𝖺𝗅𝗅 𝖺𝖼𝗍𝗂𝗈𝗇𝗌 𝗅𝖾𝖺𝖽 𝗍𝗈 𝗌𝗂𝗀𝗇𝗂𝖿𝗂𝖼𝖺𝗇𝗍 𝖺𝖼𝗁𝗂𝖾𝗏𝖾𝗆𝖾𝗇𝗍𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗁𝖺𝗋𝖽 𝗐𝗈𝗋𝗄 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝖻𝗈𝗎𝗇𝖽𝗅𝖾𝗌𝗌 𝖺𝖼𝗁𝗂𝖾𝗏𝖾𝗆𝖾𝗇𝗍𝗌.",
        luckyNumbers: [16, 32, 40],
        recommendedAction: "𝖲𝗍𝖺𝗒 𝖿𝗈𝖼𝗎𝗌𝖾𝖽 𝗈𝗇 𝗒𝗈𝗎𝗋 𝗀𝗈𝖺𝗅𝗌 𝖺𝗇𝖽 𝗉𝗎𝗍 𝗂𝗇 𝗍𝗁𝖾 𝖾𝖿𝖿𝗈𝗋𝗍.",
        insight: "𝖣𝗂𝗅𝗂𝗀𝖾𝗇𝖼𝖾 𝖺𝗇𝖽 𝖽𝖾𝗍𝖾𝗋𝗆𝗂𝗇𝖺𝗍𝗂𝗈𝗇 𝗒𝗂𝖾𝗅𝖽 𝗋𝖾𝗆𝖺𝗋𝗄𝖺𝖻𝗅𝖾 𝗋𝖾𝗌𝗎𝗅𝗍𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝖺𝗌𝗌𝗂𝗈𝗇 𝗐𝗂𝗅𝗅 𝖽𝗋𝗂𝗏𝖾 𝗒𝗈𝗎𝗋 𝖺𝖼𝖼𝗈𝗆𝗉𝗅𝗂𝗌𝗁𝗆𝖾𝗇𝗍𝗌.",
        luckyNumbers: [18, 36, 45],
        recommendedAction: "𝖢𝗁𝖺𝗇𝗇𝖾𝗅 𝗒𝗈𝗎𝗋 𝗉𝖺𝗌𝗌𝗂𝗈𝗇 𝗂𝗇𝗍𝗈 𝗒𝗈𝗎𝗋 𝗐𝗈𝗋𝗄 𝖺𝗇𝖽 𝗉𝗎𝗋𝗌𝗎𝗂𝗍𝗌.",
        insight: "𝖸𝗈𝗎𝗋 𝖾𝗇𝗍𝗁𝗎𝗌𝗂𝖺𝗌𝗆 𝗐𝗂𝗅𝗅 𝖿𝗎𝖾𝗅 𝗒𝗈𝗎𝗋 𝗌𝗎𝖼𝖼𝖾𝗌𝗌.",
    },
    {
        fortune: "𝖳𝗋𝗎𝗌𝗍 𝗍𝗁𝖾 𝗍𝗂𝗆𝗂𝗇𝗀 𝗈𝖿 𝗒𝗈𝗎𝗋 𝗅𝗂𝖿𝖾.",
        luckyNumbers: [20, 40, 50],
        recommendedAction: "𝖫𝖾𝗍 𝗀𝗈 𝗈𝖿 𝗂𝗆𝗉𝖺𝗍𝗂𝖾𝗇𝖼𝖾 𝖺𝗇𝖽 𝗍𝗋𝗎𝗌𝗍 𝗍𝗁𝖺𝗍 𝗍𝗁𝗂𝗇𝗀𝗌 𝗐𝗂𝗅𝗅 𝗎𝗇𝖿𝗈𝗅𝖽 𝖺𝗍 𝗍𝗁𝖾 𝗋𝗂𝗀𝗁𝗍 𝗍𝗂𝗆𝖾.",
        insight: "𝖫𝗂𝖿𝖾'𝗌 𝗋𝗁𝗒𝗍𝗁𝗆 𝗂𝗌 𝗀𝗎𝗂𝖽𝖾𝖽 𝖻𝗒 𝗉𝖾𝗋𝖿𝖾𝖼𝗍 𝗍𝗂𝗆𝗂𝗇𝗀.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗆𝗂𝗇𝖽𝗌𝖾𝗍 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗈𝗎𝗍𝖼𝗈𝗆𝖾𝗌.",
        luckyNumbers: [22, 44, 55],
        recommendedAction: "𝖢𝗎𝗅𝗍𝗂𝗏𝖺𝗍𝖾 𝖺 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗈𝗎𝗍𝗅𝗈𝗈𝗄 𝖺𝗇𝖽 𝖾𝗑𝗉𝖾𝖼𝗍 𝗍𝗁𝖾 𝖻𝖾𝗌𝗍.",
        insight: "𝖸𝗈𝗎𝗋 𝗍𝗁𝗈𝗎𝗀𝗁𝗍𝗌 𝗌𝗁𝖺𝗉𝖾 𝗒𝗈𝗎𝗋 𝗋𝖾𝖺𝗅𝗂𝗍𝗒.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗃𝗈𝗎𝗋𝗇𝖾𝗒 𝗂𝗌 𝗃𝗎𝗌𝗍 𝖻𝖾𝗀𝗂𝗇𝗇𝗂𝗇𝗀; 𝖾𝗇𝗃𝗈𝗒 𝗍𝗁𝖾 𝗋𝗂𝖽𝖾.",
        luckyNumbers: [24, 48, 60],
        recommendedAction: "𝖤𝗆𝖻𝗋𝖺𝖼𝖾 𝖾𝗏𝖾𝗋𝗒 𝖾𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾 𝖺𝗇𝖽 𝗌𝖺𝗏𝗈𝗋 𝗍𝗁𝖾 𝗃𝗈𝗎𝗋𝗇𝖾𝗒.",
        insight: "𝖫𝗂𝖿𝖾'𝗌 𝖺𝖽𝗏𝖾𝗇𝗍𝗎𝗋𝖾 𝗁𝗈𝗅𝖽𝗌 𝖾𝗇𝖽𝗅𝖾𝗌𝗌 𝗈𝗉𝗉𝗈𝗋𝗍𝗎𝗇𝗂𝗍𝗂𝖾𝗌.",
    },
    {
        fortune: "𝖡𝖾𝗅𝗂𝖾𝗏𝖾 𝗂𝗇 𝗒𝗈𝗎𝗋 𝖽𝗋𝖾𝖺𝗆𝗌 𝖺𝗇𝖽 𝗍𝗁𝖾𝗒 𝗐𝗂𝗅𝗅 𝖻𝖾𝖼𝗈𝗆𝖾 𝗋𝖾𝖺𝗅𝗂𝗍𝗒.",
        luckyNumbers: [26, 52, 65],
        recommendedAction: "𝖵𝗂𝗌𝗎𝖺𝗅𝗂𝗓𝖾 𝗒𝗈𝗎𝗋 𝖽𝗋𝖾𝖺𝗆𝗌 𝖺𝗇𝖽 𝗍𝖺𝗄𝖾 𝗌𝗍𝖾𝗉𝗌 𝗍𝗈𝗐𝖺𝗋𝖽 𝖺𝖼𝗁𝗂𝖾𝗏𝗂𝗇𝗀 𝗍𝗁𝖾𝗆.",
        insight: "𝖸𝗈𝗎𝗋 𝖻𝖾𝗅𝗂𝖾𝖿 𝗂𝗇 𝗒𝗈𝗎𝗋𝗌𝖾𝗅𝖿 𝗉𝗋𝗈𝗉𝖾𝗅𝗌 𝗒𝗈𝗎𝗋 𝖺𝗌𝗉𝗂𝗋𝖺𝗍𝗂𝗈𝗇𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖺𝖼𝗍𝗂𝗈𝗇𝗌 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝖼𝗁𝖺𝗇𝗀𝖾.",
        luckyNumbers: [28, 56, 70],
        recommendedAction: "𝖳𝖺𝗄𝖾 𝖽𝖾𝗅𝗂𝖻𝖾𝗋𝖺𝗍𝖾 𝖺𝖼𝗍𝗂𝗈𝗇𝗌 𝗍𝗁𝖺𝗍 𝖼𝗈𝗇𝗍𝗋𝗂𝖻𝗎𝗍𝖾 𝗍𝗈 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗈𝗎𝗍𝖼𝗈𝗆𝖾𝗌.",
        insight: "𝖸𝗈𝗎𝗋 𝖼𝗁𝗈𝗂𝖼𝖾𝗌 𝗌𝗁𝖺𝗉𝖾 𝗍𝗁𝖾 𝗐𝗈𝗋𝗅𝖽 𝖺𝗋𝗈𝗎𝗇𝖽 𝗒𝗈𝗎.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗋𝖾𝗌𝗂𝗅𝗂𝖾𝗇𝖼𝖾 𝗐𝗂𝗅𝗅 𝖼𝖺𝗋𝗋𝗒 𝗒𝗈𝗎 𝗍𝗁𝗋𝗈𝗎𝗀𝗁 𝗍𝗈𝗎𝗀𝗁 𝗍𝗂𝗆𝖾𝗌.",
        luckyNumbers: [30, 60, 75],
        recommendedAction: "𝖲𝗍𝖺𝗒 𝗌𝗍𝗋𝗈𝗇𝗀 𝗂𝗇 𝗍𝗁𝖾 𝖿𝖺𝖼𝖾 𝗈𝖿 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾𝗌; 𝗒𝗈𝗎 𝗐𝗂𝗅𝗅 𝗈𝗏𝖾𝗋𝖼𝗈𝗆𝖾.",
        insight: "𝖠𝖽𝗏𝖾𝗋𝗌𝗂𝗍𝗒 𝗂𝗌 𝖺𝗇 𝗈𝗉𝗉𝗈𝗋𝗍𝗎𝗇𝗂𝗍𝗒 𝖿𝗈𝗋 𝗀𝗋𝗈𝗐𝗍𝗁.",
    },
    {
        fortune: "𝖫𝗎𝖼𝗄 𝖿𝖺𝗏𝗈𝗋𝗌 𝗍𝗁𝖾 𝗉𝗋𝖾𝗉𝖺𝗋𝖾𝖽; 𝗄𝖾𝖾𝗉 𝗐𝗈𝗋𝗄𝗂𝗇𝗀 𝗁𝖺𝗋𝖽.",
        luckyNumbers: [32, 64, 80],
        recommendedAction: "𝖢𝗈𝗆𝖻𝗂𝗇𝖾 𝗁𝖺𝗋𝖽 𝗐𝗈𝗋𝗄 𝗐𝗂𝗍𝗁 𝗋𝖾𝖺𝖽𝗂𝗇𝖾𝗌𝗌 𝗍𝗈 𝗌𝖾𝗂𝗓𝖾 𝗅𝗎𝖼𝗄𝗒 𝗈𝗉𝗉𝗈𝗋𝗍𝗎𝗇𝗂𝗍𝗂𝖾𝗌.",
        insight: "𝖯𝗋𝖾𝗉𝖺𝗋𝖺𝗍𝗂𝗈𝗇 𝗉𝗈𝗌𝗂𝗍𝗂𝗈𝗇𝗌 𝗒𝗈𝗎 𝖿𝗈𝗋 𝖿𝗈𝗋𝗍𝗎𝗇𝖺𝗍𝖾 𝗈𝗎𝗍𝖼𝗈𝗆𝖾𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖽𝖾𝗍𝖾𝗋𝗆𝗂𝗇𝖺𝗍𝗂𝗈𝗇 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗒𝗈𝗎 𝗍𝗈 𝗀𝗋𝖾𝖺𝗍𝗇𝖾𝗌𝗌.",
        luckyNumbers: [34, 68, 85],
        recommendedAction: "𝖲𝗍𝖺𝗒 𝗋𝖾𝗌𝗈𝗅𝗎𝗍𝖾 𝖺𝗇𝖽 𝗉𝖾𝗋𝗌𝗂𝗌𝗍𝖾𝗇𝗍 𝗂𝗇 𝗒𝗈𝗎𝗋 𝗉𝗎𝗋𝗌𝗎𝗂𝗍𝗌.",
        insight: "𝖸𝗈𝗎𝗋 𝗎𝗇𝗐𝖺𝗏𝖾𝗋𝗂𝗇𝗀 𝖼𝗈𝗆𝗆𝗂𝗍𝗆𝖾𝗇𝗍 𝖽𝗋𝗂𝗏𝖾𝗌 𝗒𝗈𝗎𝗋 𝗌𝗎𝖼𝖼𝖾𝗌𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗈𝗎𝗍𝗅𝗈𝗈𝗄 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗈𝗎𝗍𝖼𝗈𝗆𝖾𝗌.",
        luckyNumbers: [36, 72, 90],
        recommendedAction: "𝖬𝖺𝗂𝗇𝗍𝖺𝗂𝗇 𝖺𝗇 𝗈𝗉𝗍𝗂𝗆𝗂𝗌𝗍𝗂𝖼 𝖺𝗍𝗍𝗂𝗍𝗎𝖽𝖾; 𝗀𝗈𝗈𝖽 𝗍𝗁𝗂𝗇𝗀𝗌 𝖺𝗋𝖾 𝖼𝗈𝗆𝗂𝗇𝗀.",
        insight: "𝖯𝗈𝗌𝗂𝗍𝗂𝗏𝗂𝗍𝗒 𝖺𝗍𝗍𝗋𝖺𝖼𝗍𝗌 𝖺𝖻𝗎𝗇𝖽𝖺𝗇𝖼𝖾 𝗂𝗇𝗍𝗈 𝗒𝗈𝗎𝗋 𝗅𝗂𝖿𝖾.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝗈𝗍𝖾𝗇𝗍𝗂𝖺𝗅 𝗂𝗌 𝖻𝗈𝗎𝗇𝖽𝗅𝖾𝗌𝗌; 𝗇𝖾𝗏𝖾𝗋 𝖽𝗈𝗎𝖻𝗍 𝗂𝗍.",
        luckyNumbers: [38, 76, 95],
        recommendedAction: "𝖢𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾 𝗌𝖾𝗅𝖿-𝖽𝗈𝗎𝖻𝗍 𝖺𝗇𝖽 𝖾𝗆𝖻𝗋𝖺𝖼𝖾 𝗒𝗈𝗎𝗋 𝗅𝗂𝗆𝗂𝗍𝗅𝖾𝗌𝗌 𝗉𝗈𝗍𝖾𝗇𝗍𝗂𝖺𝗅.",
        insight: "𝖡𝖾𝗅𝗂𝖾𝗏𝖾 𝗂𝗇 𝗒𝗈𝗎𝗋 𝖺𝖻𝗂𝗅𝗂𝗍𝗂𝖾𝗌 𝖺𝗇𝖽 𝖺𝖼𝗁𝗂𝖾𝗏𝖾 𝗍𝗁𝖾 𝖾𝗑𝗍𝗋𝖺𝗈𝗋𝖽𝗂𝗇𝖺𝗋𝗒.",
    },
    {
        fortune: "𝖤𝗏𝖾𝗋𝗒 𝗌𝖾𝗍𝖻𝖺𝖼𝗄 𝗂𝗌 𝖺 𝗌𝖾𝗍𝗎𝗉 𝖿𝗈𝗋 𝖺 𝖼𝗈𝗆𝖾𝖻𝖺𝖼𝗄.",
        luckyNumbers: [40, 80, 100],
        recommendedAction: "𝖵𝗂𝖾𝗐 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾𝗌 𝖺𝗌 𝗈𝗉𝗉𝗈𝗋𝗍𝗎𝗇𝗂𝗍𝗂𝖾𝗌 𝖿𝗈𝗋 𝗀𝗋𝗈𝗐𝗍𝗁 𝖺𝗇𝖽 𝗋𝖾𝗌𝗂𝗅𝗂𝖾𝗇𝖼𝖾.",
        insight: "𝖥𝗋𝗈𝗆 𝗌𝖾𝗍𝖻𝖺𝖼𝗄𝗌, 𝗒𝗈𝗎 𝗋𝗂𝗌𝖾 𝗌𝗍𝗋𝗈𝗇𝗀𝖾𝗋 𝗍𝗁𝖺𝗇 𝖻𝖾𝖿𝗈𝗋𝖾.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖼𝗈𝗎𝗋𝖺𝗀𝖾 𝗐𝗂𝗅𝗅 𝗈𝗉𝖾𝗇 𝗇𝖾𝗐 𝖽𝗈𝗈𝗋𝗌.",
        luckyNumbers: [42, 84, 105],
        recommendedAction: "𝖲𝗍𝖾𝗉 𝗈𝗎𝗍 𝗈𝖿 𝗒𝗈𝗎𝗋 𝖼𝗈𝗆𝖿𝗈𝗋𝗍 𝗓𝗈𝗇𝖾; 𝖼𝗈𝗎𝗋𝖺𝗀𝖾 𝗅𝖾𝖺𝖽𝗌 𝗍𝗈 𝗀𝗋𝗈𝗐𝗍𝗁.",
        insight: "𝖡𝗈𝗅𝖽𝗇𝖾𝗌𝗌 𝗂𝗇𝗏𝗂𝗍𝖾𝗌 𝗇𝖾𝗐 𝖺𝗇𝖽 𝖾𝗑𝖼𝗂𝗍𝗂𝗇𝗀 𝗉𝗈𝗌𝗌𝗂𝖻𝗂𝗅𝗂𝗍𝗂𝖾𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗌𝗎𝖼𝖼𝖾𝗌𝗌 𝗂𝗌 𝖺 𝗃𝗈𝗎𝗋𝗇𝖾𝗒, 𝗇𝗈𝗍 𝖺 𝖽𝖾𝗌𝗍𝗂𝗇𝖺𝗍𝗂𝗈𝗇.",
        luckyNumbers: [44, 88, 110],
        recommendedAction: "𝖠𝗉𝗉𝗋𝖾𝖼𝗂𝖺𝗍𝖾 𝖾𝖺𝖼𝗁 𝗌𝗍𝖾𝗉 𝗈𝖿 𝗒𝗈𝗎𝗋 𝗃𝗈𝗎𝗋𝗇𝖾𝗒 𝗍𝗈𝗐𝖺𝗋𝖽𝗌 𝗌𝗎𝖼𝖼𝖾𝗌𝗌.",
        insight: "𝖲𝗎𝖼𝖼𝖾𝗌𝗌 𝗂𝗌 𝖿𝗈𝗎𝗇𝖽 𝗂𝗇 𝗍𝗁𝖾 𝗃𝗈𝗎𝗋𝗇𝖾𝗒 𝗂𝗍𝗌𝖾𝗅𝖿.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝖾𝗇𝖾𝗋𝗀𝗒 𝗐𝗂𝗅𝗅 𝗅𝗂𝖿𝗍 𝗈𝗍𝗁𝖾𝗋𝗌 𝗎𝗉.",
        luckyNumbers: [46, 92, 115],
        recommendedAction: "𝖲𝗁𝖺𝗋𝖾 𝗒𝗈𝗎𝗋 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝗂𝗍𝗒 𝖺𝗇𝖽 𝗂𝗇𝗌𝗉𝗂𝗋𝖾 𝗍𝗁𝗈𝗌𝖾 𝖺𝗋𝗈𝗎𝗇𝖽 𝗒𝗈𝗎.",
        insight: "𝖸𝗈𝗎𝗋 𝖾𝗇𝖾𝗋𝗀𝗒 𝗂𝗌 𝖼𝗈𝗇𝗍𝖺𝗀𝗂𝗈𝗎𝗌 𝖺𝗇𝖽 𝗎𝗉𝗅𝗂𝖿𝗍𝗂𝗇𝗀.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖼𝗈𝗆𝗆𝗂𝗍𝗆𝖾𝗇𝗍 𝗍𝗈 𝗒𝗈𝗎𝗋 𝗀𝗈𝖺𝗅𝗌 𝗐𝗂𝗅𝗅 𝗉𝖺𝗒 𝗈𝖿𝖿.",
        luckyNumbers: [48, 96, 120],
        recommendedAction: "𝖲𝗍𝖺𝗒 𝖽𝖾𝖽𝗂𝖼𝖺𝗍𝖾𝖽 𝖺𝗇𝖽 𝖿𝗈𝖼𝗎𝗌𝖾𝖽 𝗈𝗇 𝗒𝗈𝗎𝗋 𝖺𝗌𝗉𝗂𝗋𝖺𝗍𝗂𝗈𝗇𝗌.",
        insight: "𝖢𝗈𝗇𝗌𝗂𝗌𝗍𝖾𝗇𝗍 𝖾𝖿𝖿𝗈𝗋𝗍 𝗒𝗂𝖾𝗅𝖽𝗌 𝗋𝖾𝗐𝖺𝗋𝖽𝗂𝗇𝗀 𝗈𝗎𝗍𝖼𝗈𝗆𝖾𝗌.",
    },
    {
        fortune: "𝖤𝗆𝖻𝗋𝖺𝖼𝖾 𝖼𝗁𝖺𝗇𝗀𝖾 𝖺𝗌 𝖺 𝗌𝗍𝖾𝗉𝗉𝗂𝗇𝗀 𝗌𝗍𝗈𝗇𝖾 𝗍𝗈 𝗌𝗎𝖼𝖼𝖾𝗌𝗌.",
        luckyNumbers: [50, 100, 125],
        recommendedAction: "𝖤𝗆𝖻𝗋𝖺𝖼𝖾 𝖼𝗁𝖺𝗇𝗀𝖾 𝖺𝗇𝖽 𝖺𝖽𝖺𝗉𝗍 𝗐𝗂𝗍𝗁 𝖾𝗇𝗍𝗁𝗎𝗌𝗂𝖺𝗌𝗆.",
        insight: "𝖢𝗁𝖺𝗇𝗀𝖾 𝗅𝖾𝖺𝖽𝗌 𝗍𝗈 𝗀𝗋𝗈𝗐𝗍𝗁 𝖺𝗇𝖽 𝖾𝗏𝗈𝗅𝗎𝗍𝗂𝗈𝗇.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗌𝗎𝖼𝖼𝖾𝗌𝗌 𝗂𝗌 𝖺 𝗋𝖾𝖿𝗅𝖾𝖼𝗍𝗂𝗈𝗇 𝗈𝖿 𝗒𝗈𝗎𝗋 𝗉𝖾𝗋𝗌𝖾𝗏𝖾𝗋𝖺𝗇𝖼𝖾.",
        luckyNumbers: [52, 104, 130],
        recommendedAction: "𝖯𝖾𝗋𝗌𝗂𝗌𝗍 𝗂𝗇 𝗍𝗁𝖾 𝖿𝖺𝖼𝖾 𝗈𝖿 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾𝗌; 𝗒𝗈𝗎𝗋 𝗌𝗎𝖼𝖼𝖾𝗌𝗌 𝗂𝗌 𝗂𝗆𝗆𝗂𝗇𝖾𝗇𝗍.",
        insight: "𝖤𝗇𝖽𝗎𝗋𝖺𝗇𝖼𝖾 𝖿𝗎𝖾𝗅𝗌 𝗒𝗈𝗎𝗋 𝗃𝗈𝗎𝗋𝗇𝖾𝗒 𝗍𝗈 𝗌𝗎𝖼𝖼𝖾𝗌𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝗂𝗍𝗒 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝗉𝗋𝗈𝗌𝗉𝖾𝗋𝗂𝗍𝗒.",
        luckyNumbers: [54, 108, 135],
        recommendedAction: "𝖢𝗎𝗅𝗍𝗂𝗏𝖺𝗍𝖾 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝗂𝗍𝗒 𝖺𝗇𝖽 𝖺𝗍𝗍𝗋𝖺𝖼𝗍 𝖺𝖻𝗎𝗇𝖽𝖺𝗇𝖼𝖾.",
        insight: "𝖠 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗆𝗂𝗇𝖽𝗌𝖾𝗍 𝗈𝗉𝖾𝗇𝗌 𝗍𝗁𝖾 𝖽𝗈𝗈𝗋 𝗍𝗈 𝗌𝗎𝖼𝖼𝖾𝗌𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖽𝖾𝖽𝗂𝖼𝖺𝗍𝗂𝗈𝗇 𝗐𝗂𝗅𝗅 𝗉𝖺𝗏𝖾 𝗍𝗁𝖾 𝗐𝖺𝗒 𝗍𝗈 𝖺𝖼𝗁𝗂𝖾𝗏𝖾𝗆𝖾𝗇𝗍.",
        luckyNumbers: [56, 112, 140],
        recommendedAction: "𝖲𝗍𝖺𝗒 𝖼𝗈𝗆𝗆𝗂𝗍𝗍𝖾𝖽 𝗍𝗈 𝗒𝗈𝗎𝗋 𝗀𝗈𝖺𝗅𝗌 𝖺𝗇𝖽 𝗐𝗈𝗋𝗄 𝖽𝗂𝗅𝗂𝗀𝖾𝗇𝗍𝗅𝗒.",
        insight: "𝖸𝗈𝗎𝗋 𝗁𝖺𝗋𝖽 𝗐𝗈𝗋𝗄 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝗇𝗈𝗍𝖺𝖻𝗅𝖾 𝖺𝖼𝖼𝗈𝗆𝗉𝗅𝗂𝗌𝗁𝗆𝖾𝗇𝗍𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎 𝖺𝗋𝖾 𝗍𝗁𝖾 𝗌𝖼𝗎𝗅𝗉𝗍𝗈𝗋 𝗈𝖿 𝗒𝗈𝗎𝗋 𝗈𝗐𝗇 𝖽𝖾𝗌𝗍𝗂𝗇𝗒.",
        luckyNumbers: [58, 116, 145],
        recommendedAction: "𝖳𝖺𝗄𝖾 𝖼𝗈𝗇𝗍𝗋𝗈𝗅 𝖺𝗇𝖽 𝗌𝗁𝖺𝗉𝖾 𝗒𝗈𝗎𝗋 𝖿𝗎𝗍𝗎𝗋𝖾 𝗐𝗂𝗍𝗁 𝗂𝗇𝗍𝖾𝗇𝗍𝗂𝗈𝗇.",
        insight: "𝖸𝗈𝗎𝗋 𝖼𝗁𝗈𝗂𝖼𝖾𝗌 𝗌𝗁𝖺𝗉𝖾 𝗍𝗁𝖾 𝗅𝗂𝖿𝖾 𝗒𝗈𝗎 𝖼𝗋𝖾𝖺𝗍𝖾.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖻𝖾𝗅𝗂𝖾𝖿 𝗂𝗇 𝗒𝗈𝗎𝗋𝗌𝖾𝗅𝖿 𝗂𝗌 𝗒𝗈𝗎𝗋 𝗀𝗋𝖾𝖺𝗍𝖾𝗌𝗍 𝖺𝗌𝗌𝖾𝗍.",
        luckyNumbers: [60, 120, 150],
        recommendedAction: "𝖡𝗎𝗂𝗅𝖽 𝗌𝖾𝗅𝖿-𝖼𝗈𝗇𝖿𝗂𝖽𝖾𝗇𝖼𝖾 𝖺𝗇𝖽 𝗍𝗋𝗎𝗌𝗍 𝗂𝗇 𝗒𝗈𝗎𝗋 𝖺𝖻𝗂𝗅𝗂𝗍𝗂𝖾𝗌.",
        insight: "𝖢𝗈𝗇𝖿𝗂𝖽𝖾𝗇𝖼𝖾 𝗂𝗌 𝗍𝗁𝖾 𝖼𝗈𝗋𝗇𝖾𝗋𝗌𝗍𝗈𝗇𝖾 𝗈𝖿 𝖺𝖼𝗁𝗂𝖾𝗏𝖾𝗆𝖾𝗇𝗍.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗁𝖺𝗋𝖽 𝗐𝗈𝗋𝗄 𝗐𝗂𝗅𝗅 𝗋𝖾𝗌𝗎𝗅𝗍 𝗂𝗇 𝗌𝗂𝗀𝗇𝗂𝖿𝗂𝖼𝖺𝗇𝗍 𝗋𝖾𝗐𝖺𝗋𝖽𝗌.",
        luckyNumbers: [62, 124, 155],
        recommendedAction: "𝖨𝗇𝗏𝖾𝗌𝗍 𝖾𝖿𝖿𝗈𝗋𝗍 𝗂𝗇 𝗒𝗈𝗎𝗋 𝗉𝗎𝗋𝗌𝗎𝗂𝗍𝗌; 𝗍𝗁𝖾 𝗉𝖺𝗒𝗈𝖿𝖿 𝗂𝗌 𝗌𝗎𝖻𝗌𝗍𝖺𝗇𝗍𝗂𝖺𝗅.",
        insight: "𝖸𝗈𝗎𝗋 𝖽𝗂𝗅𝗂𝗀𝖾𝗇𝗍 𝗐𝗈𝗋𝗄 𝗅𝖾𝖺𝖽𝗌 𝗍𝗈 𝗋𝖾𝗆𝖺𝗋𝗄𝖺𝖻𝗅𝖾 𝗈𝗎𝗍𝖼𝗈𝗆𝖾𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎 𝗁𝖺𝗏𝖾 𝗍𝗁𝖾 𝗉𝗈𝗐𝖾𝗋 𝗍𝗈 𝗆𝖺𝗄𝖾 𝖺 𝖽𝗂𝖿𝖿𝖾𝗋𝖾𝗇𝖼𝖾.",
        luckyNumbers: [64, 128, 160],
        recommendedAction: "𝖴𝗌𝖾 𝗒𝗈𝗎𝗋 𝗂𝗇𝖿𝗅𝗎𝖾𝗇𝖼𝖾 𝗍𝗈 𝗂𝗆𝗉𝖺𝖼𝗍 𝗍𝗁𝖾 𝗅𝗂𝗏𝖾𝗌 𝗈𝖿 𝗈𝗍𝗁𝖾𝗋𝗌.",
        insight: "𝖸𝗈𝗎𝗋 𝖺𝖼𝗍𝗂𝗈𝗇𝗌 𝗁𝖺𝗏𝖾 𝖿𝖺𝗋-𝗋𝖾𝖺𝖼𝗁𝗂𝗇𝗀 𝖾𝖿𝖿𝖾𝖼𝗍𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝗈𝗍𝖾𝗇𝗍𝗂𝖺𝗅 𝖿𝗈𝗋 𝗌𝗎𝖼𝖼𝖾𝗌𝗌 𝗂𝗌 𝗎𝗇𝗅𝗂𝗆𝗂𝗍𝖾𝖽.",
        luckyNumbers: [66, 132, 165],
        recommendedAction: "𝖠𝖼𝗄𝗇𝗈𝗐𝗅𝖾𝖽𝗀𝖾 𝗒𝗈𝗎𝗋 𝖼𝖺𝗉𝖺𝖻𝗂𝗅𝗂𝗍𝗂𝖾𝗌 𝖺𝗇𝖽 𝗌𝗍𝗋𝗂𝗏𝖾 𝖿𝗈𝗋 𝖾𝗑𝖼𝖾𝗅𝗅𝖾𝗇𝖼𝖾.",
        insight: "𝖸𝗈𝗎𝗋 𝗉𝗈𝗍𝖾𝗇𝗍𝗂𝖺𝗅 𝗄𝗇𝗈𝗐𝗌 𝗇𝗈 𝖻𝗈𝗎𝗇𝖽𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖽𝗋𝖾𝖺𝗆𝗌 𝗐𝗂𝗅𝗅 𝗀𝗎𝗂𝖽𝖾 𝗒𝗈𝗎 𝗍𝗈𝗐𝖺𝗋𝖽 𝖿𝗎𝗅𝖿𝗂𝗅𝗅𝗆𝖾𝗇𝗍.",
        luckyNumbers: [68, 136, 170],
        recommendedAction: "𝖢𝗁𝖺𝗌𝖾 𝗒𝗈𝗎𝗋 𝖽𝗋𝖾𝖺𝗆𝗌 𝗐𝗂𝗍𝗁 𝖽𝖾𝗍𝖾𝗋𝗆𝗂𝗇𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝗉𝖺𝗌𝗌𝗂𝗈𝗇.",
        insight: "𝖸𝗈𝗎𝗋 𝖺𝗌𝗉𝗂𝗋𝖺𝗍𝗂𝗈𝗇𝗌 𝖺𝗋𝖾 𝗒𝗈𝗎𝗋 𝖼𝗈𝗆𝗉𝖺𝗌𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝖺𝗌𝗌𝗂𝗈𝗇 𝗐𝗂𝗅𝗅 𝖿𝗎𝖾𝗅 𝗒𝗈𝗎𝗋 𝗃𝗈𝗎𝗋𝗇𝖾𝗒.",
        luckyNumbers: [70, 140, 175],
        recommendedAction: "𝖫𝖾𝗍 𝗒𝗈𝗎𝗋 𝗉𝖺𝗌𝗌𝗂𝗈𝗇 𝖽𝗋𝗂𝗏𝖾 𝗒𝗈𝗎𝗋 𝖺𝖼𝗍𝗂𝗈𝗇𝗌 𝖺𝗇𝖽 𝖼𝗁𝗈𝗂𝖼𝖾𝗌.",
        insight: "𝖯𝖺𝗌𝗌𝗂𝗈𝗇 𝗂𝗌 𝗍𝗁𝖾 𝖽𝗋𝗂𝗏𝗂𝗇𝗀 𝖿𝗈𝗋𝖼𝖾 𝖻𝖾𝗁𝗂𝗇𝖽 𝖺𝖼𝗁𝗂𝖾𝗏𝖾𝗆𝖾𝗇𝗍.",
    },
    {
        fortune: "𝖸𝗈𝗎 𝖺𝗋𝖾 𝖽𝖾𝗌𝗍𝗂𝗇𝖾𝖽 𝖿𝗈𝗋 𝗀𝗋𝖾𝖺𝗍𝗇𝖾𝗌𝗌.",
        luckyNumbers: [72, 144, 180],
        recommendedAction: "𝖤𝗆𝖻𝗋𝖺𝖼𝖾 𝗒𝗈𝗎𝗋 𝗂𝗇𝗇𝖺𝗍𝖾 𝗀𝗋𝖾𝖺𝗍𝗇𝖾𝗌𝗌 𝖺𝗇𝖽 𝖺𝗂𝗆 𝗁𝗂𝗀𝗁.",
        insight: "𝖣𝖾𝗌𝗍𝗂𝗇𝗒 𝗁𝗈𝗅𝖽𝗌 𝖾𝗑𝗍𝗋𝖺𝗈𝗋𝖽𝗂𝗇𝖺𝗋𝗒 𝗉𝗈𝗌𝗌𝗂𝖻𝗂𝗅𝗂𝗍𝗂𝖾𝗌 𝖿𝗈𝗋 𝗒𝗈𝗎.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗈𝗉𝗍𝗂𝗆𝗂𝗌𝗆 𝗐𝗂𝗅𝗅 𝗎𝗇𝗅𝗈𝖼𝗄 𝗇𝖾𝗐 𝗈𝗉𝗉𝗈𝗋𝗍𝗎𝗇𝗂𝗍𝗂𝖾𝗌.",
        luckyNumbers: [74, 148, 185],
        recommendedAction: "𝖬𝖺𝗂𝗇𝗍𝖺𝗂𝗇 𝖺 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗉𝖾𝗋𝗌𝗉𝖾𝖼𝗍𝗂𝗏𝖾; 𝖽𝗈𝗈𝗋𝗌 𝗐𝗂𝗅𝗅 𝗈𝗉𝖾𝗇.",
        insight: "𝖮𝗉𝗍𝗂𝗆𝗂𝗌𝗆 𝗂𝗌 𝗍𝗁𝖾 𝗄𝖾𝗒 𝗍𝗈 𝖽𝗂𝗌𝖼𝗈𝗏𝖾𝗋𝗂𝗇𝗀 𝗇𝖾𝗐 𝗉𝖺𝗍𝗁𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖾𝖿𝖿𝗈𝗋𝗍𝗌 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝗏𝖾 𝖺 𝗅𝖺𝗌𝗍𝗂𝗇𝗀 𝗂𝗆𝗉𝖺𝖼𝗍.",
        luckyNumbers: [76, 152, 190],
        recommendedAction: "𝖲𝗍𝗋𝗂𝗏𝖾 𝗍𝗈 𝖼𝗋𝖾𝖺𝗍𝖾 𝖺 𝗅𝖾𝗀𝖺𝖼𝗒 𝗍𝗁𝗋𝗈𝗎𝗀𝗁 𝗒𝗈𝗎𝗋 𝖺𝖼𝗍𝗂𝗈𝗇𝗌.",
        insight: "𝖸𝗈𝗎𝗋 𝖺𝖼𝗍𝗂𝗈𝗇𝗌 𝗌𝗁𝖺𝗉𝖾 𝗒𝗈𝗎𝗋 𝗅𝖺𝗌𝗍𝗂𝗇𝗀 𝗂𝗇𝖿𝗅𝗎𝖾𝗇𝖼𝖾.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖽𝖾𝗍𝖾𝗋𝗆𝗂𝗇𝖺𝗍𝗂𝗈𝗇 𝗐𝗂𝗅𝗅 𝗌𝗁𝖺𝗉𝖾 𝗒𝗈𝗎𝗋 𝖿𝗎𝗍𝗎𝗋𝖾.",
        luckyNumbers: [78, 156, 195],
        recommendedAction: "𝖲𝗍𝖺𝗒 𝗌𝗍𝖾𝖺𝖽𝖿𝖺𝗌𝗍 𝗂𝗇 𝗉𝗎𝗋𝗌𝗎𝗂𝗇𝗀 𝗒𝗈𝗎𝗋 𝗀𝗈𝖺𝗅𝗌.",
        insight: "𝖸𝗈𝗎𝗋 𝗎𝗇𝗐𝖺𝗏𝖾𝗋𝗂𝗇𝗀 𝖼𝗈𝗆𝗆𝗂𝗍𝗆𝖾𝗇𝗍 𝗆𝗈𝗅𝖽𝗌 𝗒𝗈𝗎𝗋 𝖽𝖾𝗌𝗍𝗂𝗇𝗒.",
    },
    {
        fortune: "𝖸𝗈𝗎 𝗉𝗈𝗌𝗌𝖾𝗌𝗌 𝗍𝗁𝖾 𝗄𝖾𝗒𝗌 𝗍𝗈 𝗒𝗈𝗎𝗋 𝗈𝗐𝗇 𝗌𝗎𝖼𝖼𝖾𝗌𝗌.",
        luckyNumbers: [80, 160, 200],
        recommendedAction: "𝖱𝖾𝖼𝗈𝗀𝗇𝗂𝗓𝖾 𝗒𝗈𝗎𝗋 𝗌𝗍𝗋𝖾𝗇𝗀𝗍𝗁𝗌 𝖺𝗇𝖽 𝗎𝗌𝖾 𝗍𝗁𝖾𝗆 𝗍𝗈 𝖺𝖼𝗁𝗂𝖾𝗏𝖾 𝗌𝗎𝖼𝖼𝖾𝗌𝗌.",
        insight: "𝖤𝗆𝗉𝗈𝗐𝖾𝗋 𝗒𝗈𝗎𝗋𝗌𝖾𝗅𝖿 𝗍𝗈 𝗎𝗇𝗅𝗈𝖼𝗄 𝗒𝗈𝗎𝗋 𝖿𝗎𝗅𝗅 𝗉𝗈𝗍𝖾𝗇𝗍𝗂𝖺𝗅.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝖺𝗍𝗍𝗂𝗍𝗎𝖽𝖾 𝗂𝗌 𝗒𝗈𝗎𝗋 𝗌𝖾𝖼𝗋𝖾𝗍 𝗐𝖾𝖺𝗉𝗈𝗇.",
        luckyNumbers: [82, 164, 205],
        recommendedAction: "𝖧𝖺𝗋𝗇𝖾𝗌𝗌 𝗍𝗁𝖾 𝗉𝗈𝗐𝖾𝗋 𝗈𝖿 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝗂𝗍𝗒 𝖿𝗈𝗋 𝗆𝖺𝗑𝗂𝗆𝗎𝗆 𝗂𝗆𝗉𝖺𝖼𝗍.",
        insight: "𝖯𝗈𝗌𝗂𝗍𝗂𝗏𝗂𝗍𝗒 𝖺𝗆𝗉𝗅𝗂𝖿𝗂𝖾𝗌 𝗒𝗈𝗎𝗋 𝖾𝖿𝖿𝖾𝖼𝗍𝗂𝗏𝖾𝗇𝖾𝗌𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖼𝗈𝗆𝗆𝗂𝗍𝗆𝖾𝗇𝗍 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝗍𝗋𝗂𝗎𝗆𝗉𝗁.",
        luckyNumbers: [84, 168, 210],
        recommendedAction: "𝖲𝗍𝖺𝗒 𝖽𝖾𝖽𝗂𝖼𝖺𝗍𝖾𝖽 𝖺𝗇𝖽 𝗏𝗂𝖼𝗍𝗈𝗋𝗒 𝗐𝗂𝗅𝗅 𝖿𝗈𝗅𝗅𝗈𝗐.",
        insight: "𝖸𝗈𝗎𝗋 𝗌𝗍𝖾𝖺𝖽𝖿𝖺𝗌𝗍𝗇𝖾𝗌𝗌 𝗉𝖺𝗏𝖾𝗌 𝗍𝗁𝖾 𝗐𝖺𝗒 𝖿𝗈𝗋 𝗌𝗎𝖼𝖼𝖾𝗌𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗌𝗎𝖼𝖼𝖾𝗌𝗌 𝗂𝗌 𝗐𝗋𝗂𝗍𝗍𝖾𝗇 𝗂𝗇 𝗍𝗁𝖾 𝗌𝗍𝖺𝗋𝗌.",
        luckyNumbers: [86, 172, 215],
        recommendedAction: "𝖠𝗅𝗂𝗀𝗇 𝗐𝗂𝗍𝗁 𝗍𝗁𝖾 𝖼𝗈𝗌𝗆𝗂𝖼 𝖾𝗇𝖾𝗋𝗀𝗒; 𝗌𝗎𝖼𝖼𝖾𝗌𝗌 𝗂𝗌 𝖽𝖾𝗌𝗍𝗂𝗇𝖾𝖽.",
        insight: "𝖳𝗁𝖾 𝗎𝗇𝗂𝗏𝖾𝗋𝗌𝖾 𝖼𝗈𝗇𝗌𝗉𝗂𝗋𝖾𝗌 𝗍𝗈 𝗌𝗎𝗉𝗉𝗈𝗋𝗍 𝗒𝗈𝗎𝗋 𝗌𝗎𝖼𝖼𝖾𝗌𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎 𝖺𝗋𝖾 𝖺 𝖻𝖾𝖺𝖼𝗈𝗇 𝗈𝖿 𝗅𝗂𝗀𝗁𝗍 𝗂𝗇 𝗍𝗁𝖾 𝗐𝗈𝗋𝗅𝖽.",
        luckyNumbers: [88, 176, 220],
        recommendedAction: "𝖲𝗁𝖺𝗋𝖾 𝗒𝗈𝗎𝗋 𝗅𝗂𝗀𝗁𝗍 𝖺𝗇𝖽 𝗂𝗇𝗌𝗉𝗂𝗋𝖾 𝗈𝗍𝗁𝖾𝗋𝗌 𝗍𝗈 𝗌𝗁𝗂𝗇𝖾.",
        insight: "𝖸𝗈𝗎𝗋 𝗉𝗋𝖾𝗌𝖾𝗇𝖼𝖾 𝗂𝗅𝗅𝗎𝗆𝗂𝗇𝖺𝗍𝖾𝗌 𝗍𝗁𝖾 𝗅𝗂𝗏𝖾𝗌 𝗈𝖿 𝗈𝗍𝗁𝖾𝗋𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗁𝖺𝗋𝖽 𝗐𝗈𝗋𝗄 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝖺𝖻𝗎𝗇𝖽𝖺𝗇𝗍 𝖺𝖼𝗁𝗂𝖾𝗏𝖾𝗆𝖾𝗇𝗍𝗌.",
        luckyNumbers: [90, 180, 225],
        recommendedAction: "𝖯𝖾𝗋𝗌𝗂𝗌𝗍 𝗐𝗂𝗍𝗁 𝖽𝖾𝗍𝖾𝗋𝗆𝗂𝗇𝖺𝗍𝗂𝗈𝗇; 𝗋𝖾𝗐𝖺𝗋𝖽𝗌 𝖺𝗋𝖾 𝗉𝗅𝖾𝗇𝗍𝗂𝖿𝗎𝗅.",
        insight: "𝖤𝗇𝖽𝗎𝗋𝖺𝗇𝖼𝖾 𝗒𝗂𝖾𝗅𝖽𝗌 𝖻𝗈𝗎𝗇𝗍𝗂𝖿𝗎𝗅 𝗌𝗎𝖼𝖼𝖾𝗌𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝖽𝗋𝖾𝖺𝗆𝗌 𝖺𝗋𝖾 𝗍𝗁𝖾 𝖼𝗈𝗆𝗉𝖺𝗌𝗌 𝗈𝖿 𝗒𝗈𝗎𝗋 𝗃𝗈𝗎𝗋𝗇𝖾𝗒.",
        luckyNumbers: [92, 184, 230],
        recommendedAction: "𝖥𝗈𝗅𝗅𝗈𝗐 𝗒𝗈𝗎𝗋 𝖽𝗋𝖾𝖺𝗆𝗌 𝖺𝗌 𝗍𝗁𝖾𝗒 𝗀𝗎𝗂𝖽𝖾 𝗒𝗈𝗎𝗋 𝗉𝖺𝗍𝗁.",
        insight: "𝖸𝗈𝗎𝗋 𝖺𝗌𝗉𝗂𝗋𝖺𝗍𝗂𝗈𝗇𝗌 𝗀𝗎𝗂𝖽𝖾 𝗒𝗈𝗎𝗋 𝗌𝗍𝖾𝗉𝗌 𝖿𝗈𝗋𝗐𝖺𝗋𝖽.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝗈𝗎𝗍𝗅𝗈𝗈𝗄 𝗐𝗂𝗅𝗅 𝖺𝗍𝗍𝗋𝖺𝖼𝗍 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝗂𝗍𝗒.",
        luckyNumbers: [94, 188, 235],
        recommendedAction: "𝖯𝗋𝗈𝗃𝖾𝖼𝗍 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝗂𝗍𝗒 𝖺𝗇𝖽 𝖺𝗍𝗍𝗋𝖺𝖼𝗍 𝗁𝖺𝗋𝗆𝗈𝗇𝗂𝗈𝗎𝗌 𝖾𝗇𝖾𝗋𝗀𝗂𝖾𝗌.",
        insight: "𝖯𝗈𝗌𝗂𝗍𝗂𝗏𝗂𝗍𝗒 𝗂𝗇𝗏𝗂𝗍𝖾𝗌 𝗉𝗈𝗌𝗂𝗍𝗂𝗏𝖾 𝖾𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎𝗋 𝗉𝖾𝗋𝗌𝖾𝗏𝖾𝗋𝖺𝗇𝖼𝖾 𝗐𝗂𝗅𝗅 𝖻𝗋𝖾𝖺𝗄 𝖽𝗈𝗐𝗇 𝖻𝖺𝗋𝗋𝗂𝖾𝗋𝗌.",
        luckyNumbers: [96, 192, 240],
        recommendedAction: "𝖮𝗏𝖾𝗋𝖼𝗈𝗆𝖾 𝗈𝖻𝗌𝗍𝖺𝖼𝗅𝖾𝗌 𝗐𝗂𝗍𝗁 𝗋𝖾𝗅𝖾𝗇𝗍𝗅𝖾𝗌𝗌 𝖽𝖾𝗍𝖾𝗋𝗆𝗂𝗇𝖺𝗍𝗂𝗈𝗇.",
        insight: "𝖸𝗈𝗎𝗋 𝗉𝖾𝗋𝗌𝗂𝗌𝗍𝖾𝗇𝖼𝖾 𝖽𝗂𝗌𝗆𝖺𝗇𝗍𝗅𝖾𝗌 𝗅𝗂𝗆𝗂𝗍𝖺𝗍𝗂𝗈𝗇𝗌.",
    },
    {
        fortune: "𝖸𝗈𝗎 𝗁𝖺𝗏𝖾 𝗍𝗁𝖾 𝖼𝗈𝗎𝗋𝖺𝗀𝖾 𝗍𝗈 𝖼𝗈𝗇𝗊𝗎𝖾𝗋 𝖺𝗇𝗒 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾.",
        luckyNumbers: [98, 196, 245],
        recommendedAction: "𝖥𝖺𝖼𝖾 𝖼𝗁𝖺𝗅𝗅𝖾𝗇𝗀𝖾𝗌 𝖿𝖾𝖺𝗋𝗅𝖾𝗌𝗌𝗅𝗒; 𝗒𝗈𝗎 𝖺𝗋𝖾 𝖼𝖺𝗉𝖺𝖻𝗅𝖾.",
        insight: "𝖢𝗈𝗎𝗋𝖺𝗀𝖾 𝖾𝗆𝗉𝗈𝗐𝖾𝗋𝗌 𝗒𝗈𝗎 𝗍𝗈 𝗈𝗏𝖾𝗋𝖼𝗈𝗆𝖾 𝖺𝖽𝗏𝖾𝗋𝗌𝗂𝗍𝗒.",
    },
 ];

    const randomFortuneObject = getRandomElement(fortunes);

    const message = `🔮 𝗙𝗢𝗥𝗧𝗨𝗡𝗘 𝗧𝗘𝗟𝗟𝗘𝗥 🔮\n\n${randomFortuneObject.fortune}\n\n𝗟𝗨𝗖𝗞𝗬 𝗡𝗨𝗠𝗕𝗘𝗥𝗦\n   ⌲ ${randomFortuneObject.luckyNumbers.join(', ')}\n\n𝗥𝗘𝗖𝗢𝗠𝗠𝗘𝗡𝗗 𝗔𝗖𝗧𝗜𝗢𝗡\n ⌲  ${randomFortuneObject.recommendedAction}\n\n𝗜𝗡𝗦𝗜𝗚𝗛𝗧\n  ⌲ ${randomFortuneObject.insight}`;

    api.sendMessage(message, event.threadID, event.messageID);
};
      