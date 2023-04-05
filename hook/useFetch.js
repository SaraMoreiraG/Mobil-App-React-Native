import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			'X-RapidAPI-Key': '9930e7d84cmsh297eeef7d60db09p1ba683jsn1940bcdac3bc',
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
		},
		params: { ...query }
	}

	const fetchData = async () => {
		setIsLoading(true)

		try {
			const response = await axios.request(options)

			setData(response.data.data)
			setIsLoading(false)
		} catch (error) {
			setError(error)
			alert('There is an error')
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const refetch = () => {
		setIsLoading(true)
		fetchData()
	}

	return { data, isLoading, error, refetch}
}

export default useFetch
