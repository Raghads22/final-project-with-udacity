const {getRdays} = require("../script/getRdays")

const date = new Date("2024-8-31");

test('give me the remaining days from now to the date I will set as the parameter', () => {
    expect(getRdays(date)).toEqual(-0);
});




