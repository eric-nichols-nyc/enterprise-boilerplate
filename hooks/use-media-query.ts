import * as React from "react"

// Defining a custom hook named useMediaQuery that takes a media query string as an argument
export function useMediaQuery(query: string) {
  // Declaring a state variable 'value' with its setter 'setValue', initialized to false
  const [value, setValue] = React.useState(false)

  // Using the useEffect hook to perform side effects in function components
  React.useEffect(() => {
    // Defining a function to handle changes in the media query's match status
    function onChange(event: MediaQueryListEvent) {
      // Updating the state variable 'value' based on whether the media query matches
      setValue(event.matches)
    }

    // Creating a MediaQueryList object for the given query
    const result = matchMedia(query)
    // Adding an event listener to the MediaQueryList object to listen for changes
    result.addEventListener("change", onChange)
    // Setting the initial state based on whether the media query matches
    setValue(result.matches)

    // Returning a cleanup function to remove the event listener when the component unmounts or the query changes
    return () => result.removeEventListener("change", onChange)
  }, [query]) // The effect depends on the 'query' argument

  // Returning the current state value, which indicates whether the media query matches
  return value
}