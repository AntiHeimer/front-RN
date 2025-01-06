# AntiHeimer

AntiHeimer는 치매(알츠하이머)의 조기 진단과 예방을 돕기 위해 개발된 애플리케이션입니다.

이름은 Anti + Alzheimer의 합성어로, 치매를 예방하고 관리하려는 목적을 담고 있습니다.

## 주요 기능

1.  iOS HealthKit 데이터를 활용한 건강 상태 조회

    • 사용자의 HealthKit 데이터를 활용하여 건강 상태를 조회할 수 있습니다.

    • 수집된 건강 데이터를 그래프로 시각화하여 직관적으로 확인 가능합니다.

2.  위치 조회 및 기록

    • 사용자의 디바이스 위치를 주기적으로 조회 및 기록합니다.

    • 위치 정보를 통해 사용자의 이동 경로를 관리할 수 있습니다.

3.  보호자 및 피보호자 관리 기능

    • 보호자가 피보호자를 등록하여 다음 정보를 조회할 수 있습니다:

         보호자의 건강 데이터

         피보호자의 현재 위치

         긴급 상황 시 피보호자의 위치 확인 및 대처가 가능합니다.

4.  AI를 활용한 치매 진단

    • MMSE(간이 정신상태 검사)와 건강 데이터를 결합하여 AI 기반으로 치매를 진단합니다.

    • 결과는 다음 세 가지로 분류됩니다

         정상, 치매 위험, 치매 주의

## 기술 스택

    • Frontend: React Native, JavaScript

## 사용 예시

1. 보호자/피보호자 등록

   ![image](https://firebasestorage.googleapis.com/v0/b/portfolio-74c3d.appspot.com/o/antiheimer_Notification.png?alt=media&token=b402d57a-45c8-4922-bdd4-8d79ad10128a)

   보호자가 피보호자를 등록하여 건강 상태와 위치를 실시간으로 조회합니다.

2. 건강 상태 시각화

   ![image](https://firebasestorage.googleapis.com/v0/b/portfolio-74c3d.appspot.com/o/antiheimer_Main.png?alt=media&token=eed76c57-0e6f-4839-ab0f-bfaac25c6d40)

   HealthKit 데이터를 기반으로 건강 데이터를 그래프로 시각화하여 변화 추적이 가능합니다.

3. AI 치매 진단

   ![image](https://firebasestorage.googleapis.com/v0/b/portfolio-74c3d.appspot.com/o/antiheimer_Diagnosis.png?alt=media&token=39a9908a-2d05-49fe-a19d-af99ba5b0a8b)

   간단한 MMSE 설문과 건강 데이터를 입력하면, AI가 치매 가능성을 분석하여 결과를 제공합니다.

4. 위치 확인 및 기록

   ![image](https://firebasestorage.googleapis.com/v0/b/portfolio-74c3d.appspot.com/o/antiheimer_Location.png?alt=media&token=1d29e924-a9ff-4800-a0bc-c31591d8e143)

   디바이스의 현재 위치를 조회하여 보호자와 공유하거나 기록합니다.
