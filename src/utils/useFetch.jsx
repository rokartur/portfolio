import useSWR from "swr";

const fetcher = (args) => fetch(args).then((response) => response.json())

const useFetch = ({ url }) => {
    const { data, error } = useSWR(url, fetcher)
    return { error, data }
}

export default useFetch;
