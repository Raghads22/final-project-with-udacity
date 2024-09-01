const getRdays = (date) => {
    const now = new Date();
    const travelDate = new Date(date);

    const timeDifference = travelDate.getTime() - now.getTime();

    const Rdays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return Rdays;
};

module.exports = {getRdays}