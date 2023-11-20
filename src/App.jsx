import AppRoutes from "./routes/routes";
import { Suspense } from "react";

function App() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <AppRoutes/>
        </Suspense>
    )
}

export default App;