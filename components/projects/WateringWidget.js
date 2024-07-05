import React from 'react';

const WateringWidget = ({ project }) => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">Watering Widget</h1>
    <section className="mb-8">
        <p>Android Native Application, Kotlin, Android Studio</p>
    </section>
    
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2">개요</h2>
      <p className="mb-4">1. <strong>배경화면 위젯:</strong> 위젯을 통해 물 섭취량을 기록할 수 있습니다.</p>
      <p className="mb-4">2. <strong>로컬 데이터 이용:</strong> 지난 7일 간의 물 섭취량을 확인할 수 있습니다.</p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">문제 해결</h2>
      <p className="mb-2">1. <strong>개발 동기</strong></p>
      <p className="mb-4">친구의 요청으로 만들어진 어플입니다.</p>
      <p className="mb-2">2. <strong>위젯 로직</strong> </p>
      <p className="mb-4"></p>
      <p className="mb-2">3. <strong>위젯과 어플간의 데이터 일관성</strong></p>
      <p className="mb-4">위젯을 통해 기록한 물 섭취량이 어플에 반영되어야 함.</p>

    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">배운점</h2>
      <p>IOS 와 안드로이드 개발의 차이</p>
    </section>

    {/* Watering Widget에 대한 추가 내용 */}
  </div>
);

export default WateringWidget;
