import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function App() {
	console.log("App Render");
	// useState 초기값을 false로 실무에서 자주 쓰임
	let [IsOpen, setIsOpen] = useState(false);

	console.log(IsOpen);

	//의존성 배열에 IsOpen state를 등록해서
	//모달창 출력 유무의 정보값이 변경될때에만 전용함수인 body요소의 스크롤바 제거, 생성의 기능을 선별적으로 호출
	useEffect(() => {
		IsOpen ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
	}, [IsOpen]);

	return (
		<main className="h-[300vh] w-full">
			<h1>useEffect</h1>
			<button onClick={() => setIsOpen(!IsOpen)}>모달창 토글</button>
			{IsOpen && <Modal />}
		</main>
	);
}
