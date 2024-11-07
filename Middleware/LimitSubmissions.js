const submissionLimits = {};

const LimitSubmissions = (req, res, next) => {
    const userCode = req.body.code; // Assuming the code is sent in the request body
    // console.log(userCode);
    const userIP = req.ip;

    if (!userCode) {
        return res.status(400).json({
            success: false,
            message: "Unique code is required."
        });
    }

    // Combine IP and unique code to create a unique identifier
    const identifier = `${userIP}-${userCode}`;

    if (!submissionLimits[identifier]) {
        submissionLimits[identifier] = { count: 0, timestamp: Date.now() };
    }

    const { count, timestamp } = submissionLimits[identifier];

    // Reset count if the time window has passed (60 seconds)
    if (Date.now() - timestamp > 60000) {
        submissionLimits[identifier].count = 0;
        submissionLimits[identifier].timestamp = Date.now();
    }

    if (count >= 10) {
        return res.status(429).json({
            success: false,
            message: "You have reached the maximum number of submissions. Please try again later."
        });
    }

    submissionLimits[identifier].count += 1;
    next();
};

module.exports = LimitSubmissions;
