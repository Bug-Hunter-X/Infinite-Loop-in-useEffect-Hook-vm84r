# Infinite Loop in React useEffect Hook

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying state within the effect function without specifying dependencies. 

## The Bug
The `bug.js` file contains a component that uses `useEffect` to increment a counter.  Because the dependency array is empty (`[]`), the effect runs continuously, causing the counter to increment infinitely and potentially crashing the application.