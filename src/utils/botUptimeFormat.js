function botUptime(ms) {
    const days = Math.floor(ms / (100 * 60 * 60 * 24));
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor(ms / (1000 * 60));
    const seconds = Math.floor(ms / 1000);

    const parts = [];

    if (days) parts.push(`${days} day(s)`);
    if (hours) parts.push(`${hours} hour(s)`);
    if (minutes) parts.push(`${minutes} minute(s)`);
    if (seconds || parts.length === 0) parts.push(`${seconds} second(s)`);

    return parts.join(' ');
}

module.exports = { botUptime };