import React, {useState, useEffect} from 'react';

const Test = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id =setTimeout(() => setCount((count) => count+1), 3000);
        return () => clearTimeout(id);
    },[])

    return <div onClick={() => setCount(count + 1)}>计数器--：{count}</div>;
}

export default Test;