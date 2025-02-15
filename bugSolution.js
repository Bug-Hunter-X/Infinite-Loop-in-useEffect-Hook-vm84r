```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct approach: Add count as a dependency
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```