import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card } from '../components/Card'
import { useMovies } from '../hooks/useMovies'
import { useTitle } from '../hooks/useTitle'

export const Search = ({ title, apiPath }) => {
	useTitle(title)
	const [searchParams] = useSearchParams()
	const queryTerm = searchParams.get('query')

	const { data: movies, isLoading, isError, refetch } = useMovies(apiPath, queryTerm)

	useEffect(() => {
		refetch()
	}, [apiPath, refetch, queryTerm])

	useEffect(() => {
		if (isError) {
			// Handle error here
			console.log(isError)
		}
	}, [isError])

	return (
		<>
			<section className='py-5'>
				<div className=' text-center text-2xl text-gray-400'>
					{movies.length === 0 ? `No result found for ${queryTerm}` : `Result for ${queryTerm}`}
				</div>
			</section>
			<section className='mx-auto py-7 '>
				{isLoading && <div>Loading...</div>}

				{movies && (
					<div className='flex flex-wrap justify-start gap-4'>
						{movies.map(movie => (
							<Card key={movie.id} movie={movie} />
						))}
					</div>
				)}
			</section>
		</>
	)
}
