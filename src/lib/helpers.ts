class helpers {
    public static isFalsy = (value: any, strict?: any) => {
        return strict ? (value === null || value === undefined) : !!value;
    }

    public static containsKeys = (obj: any, ...properties: string[]) => {
        return properties.every((property: string) => helpers.containsKey(obj, property));
    }

    // recursive
    // public static containsKey = (obj: any, prop: string): boolean => {
    //     if (!prop || !obj) return false;
    //     const propArr = prop.split('.');
    //     if (propArr.length === 1) {
    //         return obj.hasOwnProperty(prop);
    //     }
    //     if (propArr.length === 0) {
    //         return false;
    //     }
    //     else {
    //         const firstProp: string | undefined = propArr.shift();
    //         return firstProp && obj.hasOwnProperty(firstProp) && helpers.containsKey(obj[firstProp], propArr.join('.'));
    //     }
    // }

    // iterative
    public static containsKey = (obj: any, prop: string): boolean => {
        const propertyArr = prop.split('.');
        let testObj = obj;
        for (let i = 0; i < propertyArr.length; i++) {
            let prop = propertyArr[i];
            if (!testObj.hasOwnProperty(prop)) {
                return false;
            }
            testObj = testObj[prop];
        }
        return true;
    }
}

export default helpers;