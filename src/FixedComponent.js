import { memo } from "react";
function FixedComponent() {
  console.log("renderd");
  return <h1>meow: I am a cat</h1>;
}
export default memo(FixedComponent);
