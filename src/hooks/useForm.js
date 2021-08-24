import axios from "axios";
import { useState } from "react";

const useForm = (route = "/login") => {
    const [state, setState] = useState({});
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    const onChange = e => {
        e.preventDefault();
        setState(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = e => {
        e.preventDefault();
        axios
            .post(`http://localhost:3020/auth${route}`, state)
            .then(res => {
                setData(res.data);
            })
            .catch(setError);
    };
    return { state, setState, onChange, onSubmit, data, error };
};

export default useForm;
