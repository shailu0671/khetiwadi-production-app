// utils/formatViews.js

export const formatViews = (num) => {
    if (num === undefined || num === null) return '0';

    const absNum = Math.abs(num);

    if (absNum >= 1.0e+9) {
        return (num / 1.0e+9).toFixed(1).replace(/\.0$/, '') + 'B';
    } else if (absNum >= 1.0e+6) {
        return (num / 1.0e+6).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (absNum >= 1.0e+3) {
        return (num / 1.0e+3).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        return num.toString();
    }
};
