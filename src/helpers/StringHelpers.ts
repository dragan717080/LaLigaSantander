abstract class StringHelpers {
    static convertSnakeToCamelCase(snakeCaseStr: string): string {
        return snakeCaseStr.replace(/(_\w)/g, (match) => match[1].toUpperCase());
    }

    static convertCamelToSnakeCase(camelCaseStr: string): string {
        return camelCaseStr.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
    }

    static formatDateString(str: string): string {
        const d = new Date(str).toString().split(' ');
        return d[1] + ' ' + d[2] + ', ' + d[3];
    }

    static getValueEUR(startValue: number): string {
        const value = parseFloat(startValue.toFixed(1));

        return (value >= 1000000)
            ? '€' + (value / 1000000) + 'M'
            : (value >= 1000)
                ? '€' + (value / 1000) + 'K'
                : '€' + value;
    }
}

export default StringHelpers;

