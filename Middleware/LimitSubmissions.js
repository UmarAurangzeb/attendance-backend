const submissionLimits = {};

const LimitSubmissions = (req, res, next) => {
    const userId = req.ip;

    if (!submissionLimits[userId]) {
        submissionLimits[userId] = { count: 0, timestamp: Date.now() };
    }

    const { count, timestamp } = submissionLimits[userId];
    
    if (Date.now() - timestamp > 60000) {
        submissionLimits[userId].count = 0;
        submissionLimits[userId].timestamp = Date.now();    
    }

    if (count >= 10) {
        return res.status(429).json({
            success: false,
            message: "You have reached the maximum number of submissions. Please try again later."
        });
    }

    submissionLimits[userId].count += 1;
    next();
};

module.exports = LimitSubmissions;