import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const apiKey = import.meta.env.VITE_API_KEY

export const useMovies = (apiPath, queryTerm) => {
	return useQuery(['movies'], async () => {
		const response = await axios.get(
			`https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&region=us&query=${queryTerm}`
		)
		return response.data.results
	})
}
