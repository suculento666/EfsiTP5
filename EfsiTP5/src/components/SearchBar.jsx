import React, { useState } from 'react'

export default function SearchBar({ onSearch, initialQuery = '' }) {
	const [query, setQuery] = useState(initialQuery)
	const [type, setType] = useState('all')

	const submit = (e) => {
		e.preventDefault()
		if (!onSearch) return
		onSearch(query.trim(), type === 'all' ? undefined : type)
	}

	const clear = () => {
		setQuery('')
		if (onSearch) onSearch('')
	}

	return (
		<form onSubmit={submit} style={{display: 'flex', gap: 8, alignItems: 'center'}}>
			<input
				aria-label="Buscar"
				placeholder="Buscar título..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				style={{padding: '6px 8px', flex: 1}}
				onKeyDown={(e) => { if (e.key === 'Enter') submit(e) }}
			/>

			<select value={type} onChange={(e) => setType(e.target.value)} style={{padding: 6}}>
				<option value="all">Todos</option>
				<option value="movie">Película</option>
				<option value="series">Serie</option>
				<option value="episode">Episodio</option>
			</select>

			<button type="submit" style={{padding: '6px 10px'}}>Buscar</button>
			<button type="button" onClick={clear} style={{padding: '6px 10px'}}>Limpiar</button>
		</form>
	)
}