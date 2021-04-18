const thankYouMessage = [];
const giftGiver = [];
const giftEvent = [];

function writeCards(giftGiver, giftEvent) {
    for (let i = 0; i < giftGiver.length; i ++) {
        thankYouMessage.push(`Thank you, ${giftGiver[i]}, for the wonderful ${giftEvent} gift!`);

    };
    return thankYouMessage;
};

writeCards(giftGiver, giftEvent);

function countDown(x) {
    while (x >= 0) {
        console.log(x--);
    };
};
countDown(10)