import React, { useState } from 'react'

export default function SearchBar({ onSearch, initialQuery = '' }) {
	const [query, setQuery] = useState(initialQuery)
	const [type, setType] = useState('all')

	const submit = (e) => { 
		e.preventDefault()
		if (!onSearch) return
		onSearch(query.trim(), type !== 'all' ? type : undefined) // Llama a onSearch con la query y el tipo seleccionado (si no es "all") para realizar la búsqueda.
	}

	const clear = () => { 
		setQuery('') 
		if (onSearch) onSearch('')
	} // El botón de borrar limpia la búsqueda y también llama a onSearch con una query vacía para restablecer los resultados.

	return (
		<form onSubmit={submit} style={{display: 'flex', gap: 8, alignItems: 'center'}}> 
			<input
				aria-label="Buscar"
				placeholder="Buscar título..."
				value={query}
				onChange={(e) => setQuery(e.target.value)} // Actualiza la query mientras que el usuario escribe en el campo de búsqueda.
				style={{padding: '6px 8px', flex: 1}}
				onKeyDown={(e) => { if (e.key === 'Enter') submit(e) }} // Permite enviar la búsqueda al presionar Enter, además de hacer clic en el botón de buscar.
			/>

			<select value={type} onChange={(e) => setType(e.target.value)} style={{padding: 6}}> // Deja al usuario seleccionar el tipo de contenido (película, serie, episodio o todos) para filtrar los resultados de búsqueda.
				<option value="all">Todos</option>
				<option value="movie">Película</option>
				<option value="series">Serie</option>
				<option value="episode">Episodio</option>
			</select>

			<button type="submit" style={{padding: '6px 10px'}}>Buscar</button>
			<button type="button" onClick={clear} style={{padding: '6px 10px'}}>Borrar</button>
		</form>
	)
}