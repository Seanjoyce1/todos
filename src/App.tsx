import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./App.css"
import Home from "./pages/Home/Home"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
