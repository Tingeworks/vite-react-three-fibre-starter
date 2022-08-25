import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props) => {
  // Direct reference to Object
  const ref = useRef();
  // Store state info
  const [hoverState, setHoverState] = useState(false);
  const [clickState, setClickState] = useState(false);

  // Register to render-loop
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  useFrame((state, delta) => (ref.current.rotation.z += 0.01));

  // return view
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clickState ? 1.5 : 1}
      onClick={(event) => setClickState(!clickState)}
      onPointerOver={(event) => setHoverState(true)}
      onPointerOut={(event) => setHoverState(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={ hoverState ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;
