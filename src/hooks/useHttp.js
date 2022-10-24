import { useState, useCallback } from "react";

const useHttp = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const request = async (url) => {
		setLoading(true);

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Couldn't fetch ${url}, status: ${response.ok}`);
			}

			const data = await response.json();

			return data;
		} catch (e) {
			setLoading(false);
			setError(e.message);
		}
	}

	return { loading, error, request, setLoading }
}

export { useHttp };