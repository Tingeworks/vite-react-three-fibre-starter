import { Canvas } from "@react-three/fiber";

import "./App.css";
import Box from "./components/Primitives/Box";

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
}

export default App;
