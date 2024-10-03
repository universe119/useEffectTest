/*
  기존에는 src에서 이용하지만 public에 있는 자료는 컴포넌트를 한번 빌드이후에 가져오기때문에 fetching해서,, 자바스크립트 내장함수로 한번만 실행하는지? useEffect 사용 전 후를 보여주겠다....
*/

import { useEffect, useState } from "react";

export default function App() {
	//member.json파일로 부터 데이터를 펫치한 다음에 해당 펫치함수의 프로미스를 반환해서 then이라는 메서드를 사용할 수 있음
	// json 객체형태로 파싱을 해야하니깐 data를 받아서 data.json으로 받아서 프로미스를 반환해서 than 메서드를 받아서 json을 받아서 내부 콜백함수로 확인할 수 있음

	// 펫치 순서? 데이터 확인
	// const fetchData = () => {
	// 	console.log("fetchData");

	// 	fetch("/member.json")
	// 		.then(data => data.json())
	// 		.then(json => {
	// 			console.log(json);
	// 		});
	// };
	// fetchData();

	// App컴포넌트가 실행시점에는 데이터를 가져올 수 없기 때문에 값을 [] 초기화시켜준다.
	console.log("App Render");
	const [Members, setMembers] = useState([]);

	// 아래와 같이 useEffect를 처리하지 않은 상태에서 서버에서 fetching한 데이터를 state에 담으면 무한로딩 발생
	// setMembers에서 배열데이터를 바뀌어서 데이터가 변경되므로 App을 또 호출하고 useState를 호출하고 해서 무한로딩,,,
	// fetch("/member.json")
	// 	.then(data => data.json())
	// 	.then(json => {
	// 		console.log(json.members); // member.json 데이터 받음
	// 		setMembers(json.members); // 전개연산자를 안 써도 된다는말을 하시네,,
	// 	});

	useEffect(() => {
		fetch("/member.json")
			.then(data => data.json())
			.then(json => {
				console.log(json.members);
				setMembers(json.members);
			});
	}, []);

	return (
		<>
			<h1>useEffect</h1>
			{Members.map((data, idx) => (
				<h2 key={idx}>{data.name}</h2>
			))}
		</>
	);
}
