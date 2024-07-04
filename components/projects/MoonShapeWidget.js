import React from 'react';

const MoonShapeWidget = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
    <section className="mb-8">
        <p>IOS Native Application, SwiftUI, XCode</p>
    </section>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">개요</h2>
      <p className="mb-4">1. <strong>아이폰 잠금화면 위젯:</strong> 잠금화면에 그날의 달 위상 이미지를 표시합니다.</p>
      <p className="mb-4">2. <strong>달력 기능:</strong> 달의 위상 변화를 날짜에 따라 확인할 수 있습니다.</p>
      <p className="mb-4">3. <strong>AR 기능:</strong> 평면을 비추면 실제 하늘에서 달의 위치를 표시해줍니다.</p>
    </section>


    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">문제 해결</h2>
      <p className="mb-2">1. <strong>개발 계기</strong></p>
      <p className="mb-4">IOS16 업데이트 - 잠금화면 위젯을 활용하는 어플을 만듬.</p>
      <p className="mb-2">2. <strong>달의 위상 위젯 로직</strong></p>
      <p className="mb-4">API - 한국천문연구원_음양력 정보 API 를 이용해 음력 날짜를 받아와 달의 위상 계산</p>
      <p className="mb-2">3. <strong>AR 로직</strong></p>
      <p className="mb-4">ARKit - 하늘에 달의 위치를 예측하기</p>
      <p className="mb-2">4. <strong>리뷰 의견 반영</strong></p>
      <p className="mb-1">꽉 차는 위젯 이미지</p>
      <p className="mb-2">배경색에 따른 위젯 이미지</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">성과</h2>
      <p className="mb-2">1. <strong>앱스토어 날씨 카테고리 무료, 유료 앱 모두 1위</strong></p>
      <p className="mb-4">image</p>
      <p className="mb-2">2. <strong>앱스토어 날씨 카테고리 차트 유지</strong></p>
      <p className="mb-4">image</p>
      <p className="mb-2">3. <strong>무료 앱 꾸준한 다운로드 유입</strong></p>
      <p className="mb-4">image</p>

    </section>

    {/* Moon Shape Widget에 대한 추가 내용 */}
  </div>
);

export default MoonShapeWidget;
