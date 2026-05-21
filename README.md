# 학원 안가니?

초등학생 자녀의 방과후수업·학원 이동 일정을 관리하는 웹앱 시제품입니다.

## Vercel에 올리는 방법

1. https://vercel.com 접속
2. GitHub 또는 Google 계정으로 로그인
3. Add New → Project
4. 이 폴더를 GitHub에 올린 뒤 Import 하거나, Vercel CLI로 배포
5. Build Command: npm run build
6. Output Directory: dist

## 로컬 실행

```bash
npm install
npm run dev
```

## 현재 기능

- 동훈/동준 아이 선택
- 요일별 일정 확인
- 아이용 화면 / 부모용 화면 전환
- 일정 추가·삭제
- 도착/이동/끝남 상태 변경
- 브라우저 localStorage 저장
- 브라우저 알림 테스트
- 모바일 홈 화면 추가 안내

## 한계

현재 버전은 브라우저에 저장되는 시제품입니다.
부모폰과 아이폰 간 실시간 동기화, 앱을 꺼도 울리는 푸시알림, 위치 도착 확인은 Firebase 연동 단계가 필요합니다.
