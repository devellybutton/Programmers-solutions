# SQL 코딩테스트 가이드

- [PART 1: 기본 SELECT 문법](#part-1-기본-select-문법)
- [PART 2: 데이터 조회 심화](#part-2-데이터-조회-심화)
- [PART 3: 데이터 타입과 연산자](#part-3-데이터-타입과-연산자)
- [PART 4: 데이터 그룹화와 테이블 조인](#part-4-데이터-그룹화와-테이블-조인)
- [PART 5: SQL 함수](#part-5-sql-함수)
- [PART 6: 윈도우 함수](#part-6-윈도우-함수)

-------

## PART 1: 기본 SELECT 문법
- SELECT/FROM - 데이터 조회 기초
- ORDER BY - 데이터 정렬(오름차순/내림차순)
- WHERE - 조건부 데이터 조회

## PART 2: 데이터 조회 심화
- SELECT 문법 확장
  - * (모든 정보 조회)
  - DISTINCT (중복 없이 조회)
  - TOP/LIMIT (상위 N개 조회)
- 연산자 및 함수
  - 산술 연산자 (+, -, *, /, %)
  - 숫자 함수 (ROUND, FLOOR, CEILING, ABS, SQRT)
  - 집계 함수 (MIN, MAX, SUM, AVG, COUNT)

## PART 3: 데이터 타입과 연산자
- 데이터 타입과 특성
- 논리 연산자 (AND, OR, NOT)
- CASE WHEN - 조건부 결과 처리

## PART 4: 데이터 그룹화와 테이블 조인
- 그룹화
  - GROUP BY
  - HAVING
- 테이블 결합
  - UNION
  - JOIN 유형
    - INNER JOIN
    - LEFT JOIN
    - RIGHT JOIN
    - CROSS JOIN
    - FULL JOIN
- 서브쿼리

## PART 5: SQL 함수
- 문자열 함수
  - CHAR_LENGTH
  - LOWER, UPPER
  - TRIM
  - REPLACE
  - CONCAT, GROUP_CONCAT
  - LEFT, RIGHT
  - SUBSTR
  - LOCATE
- 날짜 함수
  - NOW, CURDATE, CURTIME
  - DATE_ADD, DATE_SUB
  - DATEDIFF
  - ADDTIME, SUBTIME
  - TIMEDIFF
  - DATE_FORMAT
- NULL 처리
  - IFNULL

## PART 6: 윈도우 함수
- LAG, LEAD
- FIRSTVALUE, LASTVALUE
- RANK
- DENSE_RANK
- ROW_NUMBER
- CTE (Common Table Expression)