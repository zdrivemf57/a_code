export default function Profile ({personalInfo}) {
  return (
    <>
      <h2>プロフィール</h2>
      <ul>
        <li>名前: {personalInfo.name}</li>
        <li>年齢: {personalInfo.age}歳</li>
        <li>職業: {personalInfo.job}</li>
      </ul>
    </>
  );
}
