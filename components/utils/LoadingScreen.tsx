import { Html, useProgress } from "@react-three/drei";

export default function LoadingScreen() {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="text-white">{`${progress}%`}</div>
    </Html>
  );
}
