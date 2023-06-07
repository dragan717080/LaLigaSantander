abstract class StringHelpers {
    static convertSnakeToCamelCase(snakeCaseStr: string): string {
        return snakeCaseStr.replace(/(_\w)/g, (match) => match[1].toUpperCase());
    }
    
    static convertCamelToSnakeCase (camelCaseStr: string): string {
        return camelCaseStr.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
    }
}

export default StringHelpers;
