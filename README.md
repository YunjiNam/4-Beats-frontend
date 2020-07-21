# 1차 프로젝트 : beatsbydre.com 클론

## Introduction
- WeCode 기 수강생들의 1차 2주 클론 프로젝트입니다.
- 프로젝트 기간 : 2020.5.25 ~ 2020.6.5 (2주)
- 4명의 개발자가 함께 협업했습니다. (3 Front-End, 1Back-End)

## Demo
<a href="https://youtu.be/Xe5RDq6t8j0"><img src="https://media.vlpt.us/images/vllyj2260/post/822094b3-9e9f-4e1c-8e60-a2d87def1c6e/2.png" width="400px"></img></a>

## 목표
- [beatsbydre.com](http://beatsbydre.com) 사이트의 interface 와 동일하게 화면 구현하기.
- 실제 사이트에 없는 회원가입/로그인, Cart, 마이페이지, 결제내역 기능 추가하기.
- Back-End API를 통해 데이터를 GET / POST / DELETE 하기.
- trello를 사용해 협업하며 매일 아침 Stand Up 미팅과, 스프린스 스크럼 미팅 진행하기.

## 사용한 기술
- Front-End: React.js, Sass, Daum Postcode API  
- Back-End: Django, MySQL([Back-End Repository](https://github.com/wecode-bootcamp-korea/4-Beats-backendhttps://github.com/wecode-bootcamp-korea/4-Beats-backend))
- Deployment: AWS

## 기능
### 회원가입 및 로그인
- 모달로 구현 (Aesop UI 참고)
- 회원가입 및 로그인 (Access Token 전송)
### 장바구니
- 모달로 구현 (Aesop UI 참고)
- 회원별 카트 목록과 구매 내역 데이터를 저장
- 카트에 담은 아이템 수량 증감과 총 구매가격 실시간 업데이트, 담은 아이템 삭제 기능 구현
### 제품 페이지
- 제품 리스트 페이지 구현 (컴포넌트 재사용)
- 각각의 제품 상세 페이지 React Router 이동 구현
- 메인페이지 및 상세 페이지 Sass와 react-reveal 라이브러리를 이용한 Animation 구현
### 구매 페이지
- 구매 페이지로 이동시 장바구니에 저장되어 있는 제품 데이터 받아와서 보여줌
- Daum 우편번호 서비스 API를 이용하여 배송지 입력 기능 제공
- 최종 구매 버튼 누르면 구매 내역 확인 페이지로 이동 확인 가능 (장바구니 비워짐)
