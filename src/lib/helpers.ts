class helpers {
    public static isFalsy = (value: any, strict?: any) => {
        return strict ? (value === null || value === undefined) : !!value;
    }

    public static containsKeys = (obj: any, ...properties: string[]) => {
        return properties.every((property: string) => helpers.containsKey(obj, property));
    }

    public static containsKey = (obj: any, prop: string): boolean => {
        if (!prop || !obj) return false;
        const propArr = prop.split('.');
        if (propArr.length === 1) {
            return obj.hasOwnProperty(prop);
        }
        if (propArr.length === 0) {
            return false;
        }
        else {
            const firstProp: string | undefined = propArr.shift();
            return firstProp && obj.hasOwnProperty(firstProp) && helpers.containsKey(obj[firstProp], propArr.join('.'));
        }
    }
}

export default helpers;