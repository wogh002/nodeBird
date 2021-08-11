import { useState, useCallback } from "react";

export default (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback(({ target }) => {
        setValue(target.value);
    }, []);
    return [value, handler];
}