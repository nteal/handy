class helpers {
    public static isFalsy = (value: any, strict?: any) => {
        return strict ? (value === null || value === undefined) : !!value;
    }
}

export default helpers;