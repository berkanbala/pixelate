import dynamic from "next/dynamic";

const Home = dynamic(() => import("../custom/component/home/home"), {
  ssr: false,
});

export default function Index() {
  return <Home />;
}
