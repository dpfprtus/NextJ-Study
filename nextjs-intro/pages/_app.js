import NavBar from "@/components/NavBar";

/*일종의 청사진이다. 이걸 제일 먼저 렌더링해서 global하게 적용*/
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
